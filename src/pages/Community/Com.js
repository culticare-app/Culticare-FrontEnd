import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Modal, Animated, Easing } from 'react-native';

const App = () => {
  const [selectedButton, setSelectedButton] = useState('자료');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(500)).current;  // Initial position of modal is off-screen

  const handleToggle = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handlePostPress = () => {
    setModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 312,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  };

  const handleCloseModal = () => {
    Animated.timing(slideAnim, {
      toValue: 500,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start(() => {
      setModalVisible(false);
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>정보 조회 게시판</Text>
      
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.toggleButton, selectedButton === '자료' && styles.selectedButton]}
          onPress={() => handleToggle('자료')}
        >
          <Text style={selectedButton === '자료' ? styles.selectedButtonText : styles.buttonText}>자료</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, selectedButton === '지원센터' && styles.selectedButton]}
          onPress={() => handleToggle('지원센터')}
        >
          <Text style={selectedButton === '지원센터' ? styles.selectedButtonText : styles.buttonText}>지원센터</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, selectedButton === '채용 공고' && styles.selectedButton]}
          onPress={() => handleToggle('채용 공고')}
        >
          <Text style={selectedButton === '채용 공고' ? styles.selectedButtonText : styles.buttonText}>채용 공고</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="검색"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      <Text style={styles.subHeader}>최신 자료</Text>
      
      {[...Array(10)].map((_, index) => (
        <TouchableOpacity key={index} style={styles.postButton} onPress={handlePostPress}>
          <Text style={styles.postButtonText}>게시글 제목 {index + 1}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.pagination}>
        <TouchableOpacity style={styles.pageButton}><Text style={styles.pageButtonText}>{'<'}</Text></TouchableOpacity>
        {[1, 2, 3, 4, 5].map((num) => (
          <TouchableOpacity key={num} style={styles.pageButton}><Text style={styles.pageButtonText}>{num}</Text></TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.pageButton}><Text style={styles.pageButtonText}>{'>'}</Text></TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity style={styles.overlayBackground} onPress={handleCloseModal} />
          <Animated.View style={[styles.modalContent, { transform: [{ translateY: slideAnim }] }]}>
            <Text style={styles.modalTitle}>게시글 제목</Text>
            <View style={styles.modalSeparator} />
            <Text style={styles.modalBody}>여기에 게시글 내용이 표시됩니다.</Text>
            <TouchableOpacity style={styles.saveButton} onPress={handleCloseModal}>
              <Text style={styles.saveButtonText}>저장하기</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  toggleButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#ccc',
    alignItems: 'center',
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: '#000',
  },
  buttonText: {
    color: '#000',
  },
  selectedButtonText: {
    color: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#888',
    marginBottom: 8,
  },
  postButton: {
    padding: 12,
    backgroundColor: '#f0f0f0',
    marginBottom: 8,
    borderRadius: 5,
  },
  postButtonText: {
    fontSize: 16,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  pageButton: {
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  pageButtonText: {
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  overlayBackground: {
    flex: 1,
  },
  modalContent: {
    width: 375,
    height: 500,
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalSeparator: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  modalBody: {
    fontSize: 16,
    marginBottom: 20,
  },
  saveButton: {
    width: 132,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    position: 'absolute',
    bottom: 20,
  },
  saveButtonText: {
    fontSize: 16,
    color: '#000',
  },
});

export default App;
