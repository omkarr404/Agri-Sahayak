import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OfflineModeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ऑफलाइन मोड</Text>
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
