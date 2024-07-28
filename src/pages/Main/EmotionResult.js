import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['2024.07.07', '2024.07.08', '2024.07.09', '2024.07.10', '2024.07.11'],
  datasets: [
    {
      data: [68, 56, 42, 24, 75],
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  barPercentage: 0.5,
  fillShadowGradient: '#000',
  fillShadowGradientOpacity: 1,
};

const records = [
  { date: '2024.07.11', emotion: '우울감 75%', emoji: '🙁', color: '#EB5757' },
  { date: '2024.07.10', emotion: '우울감 24%', emoji: '😊', color: '#7BDCB5' },
  { date: '2024.07.09', emotion: '우울감 42%', emoji: '🙂', color: '#BEBEBE' },
  { date: '2024.07.08', emotion: '우울감 56%', emoji: '😐', color: '#BEBEBE' },
  { date: '2024.07.07', emotion: '우울감 68%', emoji: '🙁', color: '#EB5757' },
  { date: '2024.07.06', emotion: '우울감 72%', emoji: '☹️', color: '#EB5757' },
  { date: '2024.07.04', emotion: '우울감 72%', emoji: '☹️', color: '#EB5757' },
  { date: '2024.07.03', emotion: '우울감 72%', emoji: '☹️', color: '#EB5757' },
  { date: '2024.07.02', emotion: '우울감 72%', emoji: '☹️', color: '#EB5757' },
  { date: '2024.07.01', emotion: '우울감 72%', emoji: '☹️', color: '#EB5757' },
];

const EmotionAnalysisResultPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back-outline" size={24} color="#000" />
        <Text style={styles.headerText}>감정 분석 결과</Text>
        <Ionicons name="share-outline" size={24} color="#000" />
      </View>
      
      <View style={styles.dateSelector}>
        <Ionicons name="chevron-back-outline" size={24} color="#000" />
        <Text style={styles.dateText}>2024년 07월 11일</Text>
        <Ionicons name="chevron-forward-outline" size={24} color="#000" />
      </View>
      
      <BarChart
        data={data}
        width={screenWidth - 40}
        height={220}
        chartConfig={chartConfig}
        style={styles.chart}
      />

      <ScrollView style={styles.scrollView}>
        {records.map((record, index) => (
          <View key={index} style={styles.record}>
            <Text style={styles.recordDate}>{record.date}</Text>
            <Text style={styles.recordEmotion}>{record.emotion}</Text>
            <View style={[styles.recordEmojiContainer, { backgroundColor: record.color }]}>
              <Text style={styles.recordEmoji}>{record.emoji}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="document-text-outline" size={24} color="#A593E0" />
          <Text style={styles.footerButtonText}>감정 기록</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="search-outline" size={24} color="#BEBEBE" />
          <Text style={styles.footerButtonText}>정보 조회</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="information-circle-outline" size={24} color="#BEBEBE" />
          <Text style={styles.footerButtonText}>문화 탐구</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="chatbubble-ellipses-outline" size={24} color="#BEBEBE" />
          <Text style={styles.footerButtonText}>커뮤니티</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="person-outline" size={24} color="#BEBEBE" />
          <Text style={styles.footerButtonText}>마이페이지</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chart: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  scrollView: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  record: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
  },
  recordDate: {
    fontSize: 16,
    color: '#888',
  },
  recordEmotion: {
    fontSize: 16,
    color: '#000',
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
