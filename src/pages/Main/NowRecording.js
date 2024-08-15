import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, Modal, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Voice from '@react-native-voice/voice';

const DiaryStartPage = () => {
  const navigation = useNavigation();
  const [isRecording, setIsRecording] = useState(false);
  const [recordedText, setRecordedText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('ko-KR'); // 기본 언어 설정
  const [isLanguagePickerVisible, setIsLanguagePickerVisible] = useState(false);

  const languages = [
    { label: '🇺🇸 영어 (미국)', value: 'en-US' },
    { label: '🇰🇷 한국어', value: 'ko-KR' },
    { label: '🇯🇵 일본어', value: 'ja-JP' },
    { label: '🇨🇳 중국어 (중국)', value: 'zh-CN' },
    { label: '🇻🇳 베트남어', value: 'vi-VN' },
    { label: '🇹🇭 태국어', value: 'th-TH' },
  ];

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = (e) => {
    console.log('onSpeechStart:', e);
  };

  const onSpeechEnd = (e) => {
    console.log('onSpeechEnd:', e);
    setIsRecording(false);
  };

  const onSpeechResults = (e) => {
    console.log('onSpeechResults:', e);
    setRecordedText(e.value[0]);
  };

  const onSpeechError = (e) => {
    console.error('onSpeechError:', e);
    Alert.alert('오류 발생', '음성 인식 중 오류가 발생했습니다. 다시 시도해 주세요.');
    setIsRecording(false);
  };

  const handlePress = async () => {
    try {
      if (isRecording) {
        await Voice.stop();
        setIsRecording(false);
        console.log('Recorded Text:', recordedText);
        navigation.navigate('DiaryEndPage', { recordedText });
      } else {
        setRecordedText('');
        await Voice.start(selectedLanguage);
        setIsRecording(true);
      }
    } catch (e) {
      console.error('Error during voice recording:', e);
      Alert.alert('오류 발생', '녹음 중 문제가 발생했습니다.');
      setIsRecording(false);
    }
  };

  const toggleLanguagePicker = () => {
    setIsLanguagePickerVisible(!isLanguagePickerVisible);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language.value);
    toggleLanguagePicker();
  };

  return (
    <View style={styles.container}>
      <View style={styles.topbox}>
        <View style={styles.header}>
          <Image 
            source={isRecording ? 
              require('../../assets/images/recording/record_purple.png') : 
              require('../../assets/images/recording/record.png')} 
          />
          <TouchableOpacity style={styles.closeButton} onPress={() => { navigation.navigate('Recording') }}>
            <Image source={require('../../assets/images/recording/delete.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {isRecording ? (
            <>
              <Text style={styles.recordingText}>기록이 시작되었습니다</Text>
              <Text style={styles.recordingPrompt}>안녕 Anna! 오늘 하루는 어땠어?</Text>
              <Text style={styles.recordingText}>녹음된 내용: {recordedText}</Text>
            </>
          ) : (
            <>
              <Text style={styles.title}>일기 기록 시작하기</Text>
              <Text style={styles.subtitle}>
                아래의 버튼을 눌러서 오늘의 감정을 기록해보세요{'\n'}
                원하는 언어로 AI와 편하게 이야기를 나누어 주시면 됩니다
              </Text>
            </>
          )}
        </View>
      </View>

      <View style={styles.languageSelectorContainer}>
        <TouchableOpacity style={styles.languageSelector} onPress={toggleLanguagePicker}>
          <Text style={styles.languageLabel}>{languages.find(lang => lang.value === selectedLanguage).label}</Text>
          <Text style={styles.dropdownIcon}>▼</Text> 
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        animationType="fade"
        visible={isLanguagePickerVisible}
        onRequestClose={toggleLanguagePicker}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={toggleLanguagePicker}>
          <View style={styles.languagePicker}>
            <FlatList
              data={languages}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.languagePickerItem}
                  onPress={() => selectLanguage(item)}
                >
                  <Text style={styles.languagePickerItemText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>

      <TouchableOpacity style={styles.recordButton} onPress={handlePress}>
        <Text style={styles.recordButtonText}>
          {isRecording ? '일기 끝내기' : '일기 기록하기'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// 일기 끝내기 후 표시될 화면
const DiaryEndPage = ({ route, navigation }) => {
  const { recordedText } = route.params;

  return (
    <View style={endStyles.container}>
      <View style={endStyles.header}>
        <Image source={require('../../assets/images/recording/record.png')} />
        <TouchableOpacity style={endStyles.closeButton} onPress={() => { navigation.goBack() }}>
          <Image source={require('../../assets/images/recording/delete.png')} />
        </TouchableOpacity>
      </View>
      <Text style={endStyles.recordingText}>기록이 종료되었습니다</Text>
      <Text style={endStyles.thankYouText}>이야기 해줘서 고마워 :)  오늘 하루도 응원할게!</Text>
      <TouchableOpacity 
        style={endStyles.analysisButton} 
        onPress={() => navigation.navigate('ReportPage', { recordedText })}
      >        
        <Text style={endStyles.analysisButtonText}>감정 분석 결과 보기</Text>
      </TouchableOpacity>
      <Text style={endStyles.recordedTextConsole}>콘솔에 출력된 녹음된 내용: {recordedText}</Text>
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
    marginBottom: 15,
  },
  closeButton: {
    padding: 10,
  },
  content: {
    alignItems: 'flex-start',
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
  recordingText: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 10,
  },
  recordingPrompt: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 30,
  },
  recordButton: {
    height: 48,
    backgroundColor: '#9199DD',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 40,
    justifyContent: 'center',
  },
  recordButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  languageSelectorContainer: {
    alignItems: 'center', 
    marginBottom: 20, 
  },
  languageSelector: {
    backgroundColor: '#444', 
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25, 
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageLabel: {
    fontSize: 16,
    color: '#fff',
    marginRight: 10,
  },
  dropdownIcon: {
    fontSize: 16,
    color: '#fff',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  languagePicker: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 250,
    maxHeight: 300,
  },
  languagePickerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  languagePickerItemText: {
    fontSize: 16,
    color: '#333',
  },
});

const endStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingTop: 60,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  closeButton: {
    padding: 10,
  },
  recordingText: {
    fontSize: 16,
    color: '#ccc',
    marginTop: 0,
  },
  thankYouText: {
    fontSize: 24,
    color: '#fff',
    marginTop: 20,
    textAlign: 'center',
  },
  analysisButton: {
    height: 48,
    backgroundColor: '#9199DD',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
    width: '80%',
  },
  analysisButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  recordedTextConsole: {
    fontSize: 14,
    color: '#fff',
    marginTop: 40,
    marginBottom: 40,
    textAlign: 'center',
  },
});

export default DiaryStartPage;
export { DiaryEndPage };
