// screens/FarmerTradeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function FarmerTradeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👨‍🌾 Farmer-to-Farmer Trade</Text>

      {/* Add navigation to chat features */}
      <View style={styles.buttons}>
        <Button title="Group Chat" onPress={() => navigation.navigate('GroupChat')} />
        <Button title="Individual Chat" onPress={() => navigation.navigate('Chat')} />
      </View>

      {/* Add your existing transaction or checkout UI here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  buttons: { gap: 16 },
});
