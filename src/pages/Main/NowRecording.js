import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const DiaryStartPage = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.topbox}>
        <View style={styles.header}>
          <Image source={require('../../assets/images/recording/record.png')} />
          <TouchableOpacity style={styles.closeButton} onPress={() => { navigation.navigate('Recording') }}>
            <Image source={require('../../assets/images/recording/delete.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>일기 기록 시작하기</Text>
          <Text style={styles.subtitle}>
            아래의 버튼을 눌러서 오늘의 감정을 기록해보세요{'\n'}
            원하는 언어로 AI와 편하게 이야기를 나누어 주시면 됩니다
          </Text>
        </View>
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
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  closeButton: {
    padding: 10,
  },
  content: {
    alignItems: 'left',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'left',
  },
  recordButton: {
    height: 48,
    backgroundColor: '#9199DD',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recordButtonText: {
    fontSize: 16,
    color: '#fff',
    paddingBottom: 4
  },
});

export default DiaryStartPage;
