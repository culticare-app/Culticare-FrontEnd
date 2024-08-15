import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ReportPage = ({ route }) => {
  const { recordedText } = route.params;
  const navigation = useNavigation();

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
        <Image source={require('../../assets/images/analysis/sad.png')} style={styles.icon} />
        <Text style={styles.resultText}>
          측정된 Anna 님의 우울감은 75%로 우울증에 대한 주의가 필요합니다
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
