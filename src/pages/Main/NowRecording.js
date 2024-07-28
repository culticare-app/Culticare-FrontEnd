import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DiaryStartPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="mic-outline" size={48} color="#fff" />
        <TouchableOpacity style={styles.closeButton}>
          <Ionicons name="close-outline" size={36} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>일기 기록 시작하기</Text>
        <Text style={styles.subtitle}>
          아래의 버튼을 눌러서 오늘의 감정을 기록해보세요{'\n'}
          원하는 언어로 AI와 편하게 이야기를 나누어 주시면 됩니다
        </Text>
      </View>
      <TouchableOpacity style={styles.recordButton}>
        <Text style={styles.recordButtonText}>일기 기록하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingTop: 60,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton: {
    padding: 10,
  },
  content: {
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  recordButton: {
    backgroundColor: '#A593E0',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  recordButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DiaryStartPage;
