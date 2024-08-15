import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ReportPage = ({ route }) => {
  const { recordedText } = route.params; // 우울감 비율을 route.params에서 받아옴
  const navigation = useNavigation();

  const depressionLevel = 50;
  // 우울감 비율에 따른 이미지와 멘트 설정
  let moodImage = require('../../assets/images/analysis/good.png');
  let moodMessage = `측정된 Anna 님의 우울감은 ${depressionLevel}%로 우울감을 느끼지 않고 있습니다.`;

  if (depressionLevel >= 70) {
    moodImage = require('../../assets/images/analysis/sad.png');
    moodMessage = `측정된 Anna 님의 우울감은 ${depressionLevel}%로 우울증에 대한 주의가 필요합니다.`;
  } else if (depressionLevel < 70 && depressionLevel >= 30) {
    moodImage = require('../../assets/images/analysis/soso.png');
    moodMessage = `측정된 Anna 님의 우울감은 ${depressionLevel}%로 약간의 우울감을 느끼고 있습니다.`;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>감정 분석 결과</Text>
        <TouchableOpacity 
          style={styles.closeButton} 
          onPress={() => navigation.navigate('Recording')} // "Recording" 페이지로 이동
        >
          <Text style={styles.closeButtonText}>일기 닫기 ✖</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Image source={moodImage} style={styles.icon} />
        <Text style={styles.resultText}>
          {moodMessage}
        </Text>
        <View style={styles.textContainer}>
          <ScrollView>
            <Text style={styles.recordedText}>
              {recordedText}
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  resultText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  textContainer: {
    backgroundColor: '#444',  // 배경색 추가
    padding: 15,
    borderRadius: 10,
    width: '100%',
    maxHeight: '50%',  // 최대 높이 설정
  },
  recordedText: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'left',
  },
});

export default ReportPage;
