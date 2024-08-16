import React, { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image, Modal } from 'react-native';
import Nav from '../../components/Nav';
import CustomText from '../../components/CustomText';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useSelector } from 'react-redux';

const URL = 'http://ec2-43-202-146-22.ap-northeast-2.compute.amazonaws.com:8082';

const Recording = () => {
    const [seapop, useSeapop] = React.useState(false);
    const [records, setRecords] = React.useState([]);
    const [selectedRecord, setSelectedRecord] = React.useState(null);
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const navigation = useNavigation();
    const accessToken = useSelector((state) => state.auth.accessToken);

    const getEmojiAndColor = (percentage) => {
        if (percentage < 30) {
            return { emoji: '😊', color: '#A1F394' };
        } else if (percentage < 70) {
            return { emoji: '🙂', color: '#BBBBBB' };
        } else {
            return { emoji: '☹️', color: '#FA8080' };
        }
    };

    useEffect(() => {
        console.log(accessToken)
        const fetchRecords = async () => {
            try {
                const response = await axios.get(`${URL}/diary/view`, {
                    headers: {
                        Authorization: `${accessToken}`,
                        'Accept': '*/*',
                    },
                });
                const fetchedRecords = response.data.reverse().map((record) => ({
                    id: record.id,
                    date: new Date(record.createdAt).toLocaleDateString('ko-KR'),
                    emotion: `우울감 ${record.depressionPercent}%`,
                    content: record.content,
                    ...getEmojiAndColor(record.depressionPercent),
                }));
                setRecords(fetchedRecords);
            } catch (error) {
                console.error('Error fetching records:', error);
            }
        };

        fetchRecords();
    }, [accessToken]);

    const handleRecordPress = (record) => {
        setSelectedRecord(record);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setSelectedRecord(null);
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <CustomText style={styles.headerText}>AI와의 대화를 통해 {'\n'}오늘의 감정을 기록해보세요</CustomText>
                    <View style={styles.headerbox}>
                        <CustomText style={styles.subHeaderText}>오른쪽 버튼을 누르면 일기가 시작됩니다{'\n'}원하는 언어로 자유롭게 이야기를 해보세요</CustomText>
                        <TouchableOpacity onPress={() => { navigation.navigate('DiaryStartPage') }}>
                            <Image style={styles.headerimg} source={require('../../assets/images/recording/mike.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.recordContainer}>
                    <View style={styles.recordingbox}>
                        <CustomText style={styles.recentRecord}>최근 기록</CustomText>
                        <TouchableOpacity onPress={() => { navigation.navigate('EmotionResultPage') }}>
                            <Image style={styles.headerimg} source={require('../../assets/images/recording/detail.png')} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => { useSeapop(true) }}>
                        <Image style={styles.headerimg} source={require('../../assets/images/recording/share.png')} />
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.scrollView}>
                    {records.map((record, index) => (
                        <TouchableOpacity key={index} onPress={() => handleRecordPress(record)}>
                            <View style={styles.record}>
                                <CustomText style={styles.recordDate}>{record.date}</CustomText>
                                <View style={styles.emotionbox}>
                                    <CustomText style={styles.recordEmotion}>{record.emotion}</CustomText>
                                    <View style={[styles.recordEmojiContainer, { backgroundColor: record.color }]}>
                                        <CustomText style={styles.recordEmoji}>{record.emoji}</CustomText>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <Nav />
            </View>
            {seapop ? (
                <SharePop useSeapop={useSeapop} />
            ) : null}

            <Modal
                transparent={true}
                visible={isModalVisible}
                animationType="slide"
                onRequestClose={closeModal}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <CustomText style={styles.modalTitle}>감정 기록 내용</CustomText>
                        <Text style={styles.modalText}>{selectedRecord?.content}</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                            <CustomText style={styles.closeButtonText}>닫기</CustomText>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
};

const SharePop = ({ useSeapop }) => {
    const [who, onChangeWho] = React.useState('');
    const [full, setFull] = React.useState(false);

    useEffect(() => {
        if (who !== '') {
            setFull(true);
        } else {
            setFull(false);
        }
    }, [who]);

    return (
        <View style={popups.popup_wrap}>
            <View style={popups.popup}>
                <CustomText style={popups.title}>감정 기록 공유하기</CustomText>
                <View style={popups.descbox}>
                    <CustomText style={popups.desc}>가족이나 지인 등의 다른 사용자에게</CustomText>
                    <CustomText style={popups.desc}>나의 감정 기록 결과를 공유합니다.</CustomText>
                </View>
                <TextInput
                    value={who}
                    onChangeText={(text) => onChangeWho(text)}
                    style={popups.input}
                    placeholder='공유할 사용자의 아이디를 입력해주세요'
                />
                <TouchableOpacity style={full ? popups.sharebtnfull : popups.sharebtn}>
                    <CustomText style={popups.sharetext}>공유하기</CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={popups.deletebtn} onPress={() => { useSeapop(false) }}>
                    <CustomText style={popups.deletetext}>취소하기</CustomText>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        alignItems: 'left',
        backgroundColor: '#333',
        padding: 20,
        borderBottomRightRadius: 80,
        paddingTop: 40,
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
        textAlign: 'left',
    },
    headerbox: {
        marginTop: 40,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    subHeaderText: {
        fontSize: 12,
        color: '#fff',
    },
    headerimg: {
        marginRight: 15,
    },
    recordContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        paddingRight: 0,
        marginTop: 10,
        marginHorizontal: 10,
    },
    recordingbox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    recentRecord: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 3,
        marginRight: 3,
    },
    scrollView: {
        marginTop: 10,
        paddingHorizontal: 20,
    },
    record: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        marginBottom: 10,
    },
    recordDate: {
        fontSize: 16,
        color: '#A0A0A0',
    },
    emotionbox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    recordEmotion: {
        fontSize: 16,
        color: '#000',
        marginRight: 10,
    },
    recordEmojiContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    recordEmoji: {
        fontSize: 18,
        color: '#fff',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        marginBottom: 10,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: '#333',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

const popups = StyleSheet.create({
    popup_wrap: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        backgroundColor: '#000000B8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    popup: {
        width: 289,
        height: 300,
        backgroundColor: '#fff',
        borderRadius: 28,
        padding: 18,
        alignItems: 'center',
    },
    title: {
        marginTop: 5,
        fontSize: 20,
        color: '#000',
        marginBottom: 10,
        fontFamily: 'Pretendard-Bold',
    },
    descbox: {
        marginBottom: 15,
    },
    desc: {
        textAlign: 'center',
        fontSize: 15,
        color: '#A0A0A0',
        fontFamily: 'Pretendard-Reqular',
    },
    input: {
        borderBottomColor: '#c5c5c5',
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 30,
        width: '100%',
        textAlign: 'center',
    },
    sharebtn: {
        width: '100%',
        height: 44,
        backgroundColor: '#C5C5C5',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 5,
    },
    sharebtnfull: {
        width: '100%',
        height: 44,
        backgroundColor: '#303030',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 5,
    },
    sharetext: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Pretendard-Bold',
        paddingBottom: 2,
    },
    deletebtn: {
        width: '100%',
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deletetext: {
        color: '#000',
        fontSize: 16,
    },
});

export default Recording;
