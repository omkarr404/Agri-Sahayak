// SchemeRegistrationScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function SchemeRegistrationScreen() {
  const [name, setName] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [mobile, setMobile] = useState('');
  const [village, setVillage] = useState('');
  const [scheme, setScheme] = useState('');

  const handleSubmit = () => {
    if (!name || !aadhar || !mobile || !village || !scheme) {
      Alert.alert('संपूर्ण माहिती भरा');
      return;
    }
    Alert.alert('नोंदणी यशस्वी!', 'तुमची योजना नोंदणी यशस्वी झाली आहे.');
    // You can add backend integration here
    setName('');
    setAadhar('');
    setMobile('');
    setVillage('');
    setScheme('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>योजना नोंदणी फॉर्म</Text>
      <TextInput
        style={styles.input}
        placeholder="नाव"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="आधार क्रमांक"
        value={aadhar}
        onChangeText={setAadhar}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="मोबाईल क्रमांक"
        value={mobile}
        onChangeText={setMobile}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="गावाचे नाव"
        value={village}
        onChangeText={setVillage}
      />
      <TextInput
        style={styles.input}
        placeholder="योजनेचे नाव"
        value={scheme}
        onChangeText={setScheme}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>नोंदणी करा</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f8e9',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#2e7d32',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 6,
    marginBottom: 15,
    borderColor: '#c5e1a5',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#388e3c',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
