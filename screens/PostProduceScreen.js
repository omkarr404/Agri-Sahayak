// screens/PostProduceScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PostProduceScreen({ navigation }) {
  const [name, setName] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async () => {
    if (!name || !product || !quantity || !price || !location) {
      Alert.alert('संपूर्ण माहिती भरा');
      return;
    }

    const newEntry = {
      name,
      product,
      quantity,
      price,
      location,
      timestamp: new Date().toISOString(),
    };

    try {
      const existing = await AsyncStorage.getItem('produceList');
      const list = existing ? JSON.parse(existing) : [];
      list.push(newEntry);
      await AsyncStorage.setItem('produceList', JSON.stringify(list));

      Alert.alert('नोंद यशस्वी!');
      navigation.goBack();
    } catch (e) {
      console.error(e);
      Alert.alert('त्रुटी आली!');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>उत्पादन नोंदवा</Text>

      <TextInput placeholder="आपले नाव" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="पिकाचे नाव" value={product} onChangeText={setProduct} style={styles.input} />
      <TextInput placeholder="प्रमाण (उदा. १० क्विंटल)" value={quantity} onChangeText={setQuantity} style={styles.input} />
      <TextInput placeholder="किंमत (उदा. ₹२५००)" value={price} onChangeText={setPrice} style={styles.input} />
      <TextInput placeholder="गाव / ठिकाण" value={location} onChangeText={setLocation} style={styles.input} />

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>नोंदवा</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#e8f5e9',
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2e7d32',
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
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
    fontWeight: 'bold',
    fontSize: 16,
  },
});
