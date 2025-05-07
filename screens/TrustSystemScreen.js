import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TrustSystemScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ट्रस्ट प्रणाली</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontSize: 24,
    color: '#2E7D32',
  },
});
