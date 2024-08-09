import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import CustomText from '../../components/CustomText';
import Nav from '../../components/Nav';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

const data = {
    datasets: [
        {
            data: [68, 56, 42, 24, 75, 30, 50],
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

const records = [
    { date: '2024.07.11', emotion: '우울감 75%', emoji: '🙁', color: '#FA8080' },
    { date: '2024.07.10', emotion: '우울감 24%', emoji: '😊', color: '#A1F394' },
    { date: '2024.07.09', emotion: '우울감 42%', emoji: '🙂', color: '#BBBBBB' },
    { date: '2024.07.08', emotion: '우울감 56%', emoji: '😐', color: '#BBBBBB' },
    { date: '2024.07.07', emotion: '우울감 68%', emoji: '🙁', color: '#FA8080' },
    { date: '2024.07.06', emotion: '우울감 72%', emoji: '☹️', color: '#FA8080' },
    { date: '2024.07.04', emotion: '우울감 72%', emoji: '☹️', color: '#FA8080' },
    { date: '2024.07.03', emotion: '우울감 72%', emoji: '☹️', color: '#FA8080' },
    { date: '2024.07.02', emotion: '우울감 72%', emoji: '☹️', color: '#FA8080' },
    { date: '2024.07.01', emotion: '우울감 72%', emoji: '☹️', color: '#FA8080' },
];

const EmotionAnalysisResultPage = () => {
    const navigation = useNavigation()

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
                <CustomText style={styles.dateText}>2024년 07월 11일</CustomText>
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
