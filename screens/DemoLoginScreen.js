// screens/DemoLoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const dummyUsers = [
  { username: 'shivaji', password: 'farm123', name: 'शिवाजी' },
  { username: 'savitribai', password: 'farm456', name: 'सावित्री' },
  { username: 'vithoba', password: 'farm789', name: 'विठोबा' },
  { username: 'gauri', password: 'farm000', name: 'गौरी' },
];

export default function DemoLoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = dummyUsers.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      navigation.navigate('FarmerTrade', { currentUser: user });
    } else {
      Alert.alert('त्रुटी', 'चुकीचे वापरकर्तानाव किंवा पासवर्ड');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>डेमो लॉगिन</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>लॉगिन करा</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff8e1',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#2e7d32',
  },
  input: {
    height: 50,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#2e7d32',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
