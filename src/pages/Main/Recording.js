import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  const records = [
    { date: '2024.07.10', emotion: '우울감 24%', emoji: '😊', color: '#7BDCB5' },
    { date: '2024.07.09', emotion: '우울감 42%', emoji: '🙂', color: '#BEBEBE' },
    { date: '2024.07.08', emotion: '우울감 56%', emoji: '😐', color: '#BEBEBE' },
    { date: '2024.07.07', emotion: '우울감 68%', emoji: '🙁', color: '#EB5757' },
    { date: '2024.07.06', emotion: '우울감 72%', emoji: '☹️', color: '#EB5757' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>AI와의 대화를 통해 오늘의 감정을 기록해보세요</Text>
        <Ionicons name="mic-circle" size={60} color="#A593E0" />
        <Text style={styles.subHeaderText}>오른쪽 버튼을 누르면 일기가 시작됩니다{'\n'}원하는 언어로 자유롭게 이야기를 해보세요</Text>
      </View>

      <View style={styles.recordContainer}>
        <Text style={styles.recentRecord}>최근 기록</Text>
        <Ionicons name="share-outline" size={24} color="#000" />
      </View>

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
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  subHeaderText: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  recordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  recentRecord: {
    fontSize: 18,
    fontWeight: 'bold',
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

export default App;
