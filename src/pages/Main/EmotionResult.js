import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import CustomText from '../../components/CustomText';
import Nav from '../../components/Nav';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useSelector } from 'react-redux';

const screenWidth = Dimensions.get('window').width;

const EmotionAnalysisResultPage = () => {
    const [records, setRecords] = useState([]);
    const navigation = useNavigation();
    const accessToken = useSelector((state) => state.auth.accessToken);

    useEffect(() => {
        const fetchRecords = async () => {
            try {
                const response = await axios.get('http://ec2-43-202-146-22.ap-northeast-2.compute.amazonaws.com:8082/diary/view', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Accept': '*/*',
                    },
                });
                const fetchedRecords = response.data.map(record => ({
                    date: new Date(record.createdAt).toLocaleDateString('ko-KR'),
                    emotion: `우울감 ${record.depressionPercent}%`,
                    emoji: getEmoji(record.depressionPercent),
                    color: getColor(record.depressionPercent),
                    depressionPercent: record.depressionPercent,
                }));
                setRecords(fetchedRecords.reverse());
            } catch (error) {
                console.error('Error fetching records:', error);
            }
        };

        fetchRecords();
    }, [accessToken]);

    const getEmoji = (percentage) => {
        if (percentage < 30) {
            return '😊';
        } else if (percentage < 70) {
            return '🙂';
        } else {
            return '☹️';
        }
    };

    const getColor = (percentage) => {
        if (percentage < 30) {
            return '#A1F394';
        } else if (percentage < 70) {
            return '#BBBBBB';
        } else {
            return '#FA8080';
        }
    };

    const recentData = records.slice(0, 7).map(record => record.depressionPercent);

    const data = {
        datasets: [
            {
                data: recentData,
            },
        ],
    };

    const chartConfig = {
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        barPercentage: 1,
        fillShadowGradient: '#C5C5C5',
        fillShadowGradientOpacity: 1,
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { navigation.navigate('Recording') }}>
                    <Image source={require('../../assets/images/recording/back.png')} />
                </TouchableOpacity>
                <CustomText style={styles.headerText}>감정 분석 결과</CustomText>
                <Image source={require('../../assets/images/recording/share.png')} />
            </View>

            <View style={styles.dateSelector}>
                <Image source={require('../../assets/images/recording/back.png')} />
                <CustomText style={styles.dateText}>최근 기록</CustomText>
                <Image source={require('../../assets/images/recording/right.png')} />
            </View>
            <View style={styles.chartbox}>
                <BarChart
                    data={data}
                    width={screenWidth + 20}
                    height={160}
                    chartConfig={chartConfig}
                    style={styles.chart}
                    fromZero={true}
                    withVerticalLabels={false}
                    withHorizontalLabels={false}
                    withInnerLines={false}
                    showBarTops={false}
                    showValuesOnTopOfBars={false}
                />
            </View>
            <ScrollView style={styles.scrollView}>
                {records.map((record, index) => (
                    <View key={index} style={styles.record}>
                        <CustomText style={styles.recordDate}>{record.date}</CustomText>
                        <View style={styles.emotionbox}>
                            <CustomText style={styles.recordEmotion}>{record.emotion}</CustomText>
                            <View style={[styles.recordEmojiContainer, { backgroundColor: record.color }]}>
                                <CustomText style={styles.recordEmoji}>{record.emoji}</CustomText>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <Nav />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
    },
    headerText: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'Pretendard-SemiBold'
    },
    dateSelector: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#fff',
        marginBottom: 20
    },
    dateText: {
        fontSize: 16,
        color: '#000',
        paddingHorizontal: 10,
    },
    chartbox: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    chart: {
        marginTop: 10,
        marginHorizontal: 20,
        marginRight: 100
    },
    scrollView: {
        paddingHorizontal: 10,
    },
    record: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        marginBottom: 10,
        height: 60
    },
    emotionbox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    recordDate: {
        fontSize: 16,
        color: '#888',
    },
    recordEmotion: {
        fontSize: 16,
        color: '#000',
        marginRight: 10
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
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#E5E5E5',
    },
    footerButton: {
        alignItems: 'center',
    },
    footerButtonText: {
        fontSize: 12,
        color: '#888',
        marginTop: 5,
    },
});

export default EmotionAnalysisResultPage;
