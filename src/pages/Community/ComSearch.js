import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Header 컴포넌트
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Welcome to the Home Page</Text>
    </View>
  );
};

// Content 컴포넌트
const Content = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.contentText}>This is the Home Page of your application.</Text>
    </View>
  );
};

// HomePage 컴포넌트
const HomePage = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
    </View>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    color: '#333',
  },
  content: {
    marginBottom: 20,
  },
  contentText: {
    fontSize: 18,
    color: '#666',
  },
});

export default HomePage;
