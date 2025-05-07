// screens/PriceNegotiationScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

export default function PriceNegotiationScreen() {
  const [offerPrice, setOfferPrice] = useState('');

  const handleSubmit = () => {
    if (!offerPrice || isNaN(offerPrice)) {
      Alert.alert('त्रुटी', 'कृपया वैध ऑफर किंमत प्रविष्ट करा');
      return;
    }

    Alert.alert(
      'ऑफर पाठवली',
      `तुमची ₹${offerPrice} ची ऑफर विक्रेत्याला पाठवली गेली.`,
      [{ text: 'ठीक आहे' }]
    );

    setOfferPrice('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>किंमत बोलणी</Text>

      <Image
        source={require('../assets/tomato.jpg')}
        style={styles.image}
      />

      <Text style={styles.name}>टोमॅटो</Text>
      <Text style={styles.detail}>वर्तमान किंमत: ₹1500</Text>
      <Text style={styles.detail}>ताजे आणि सेंद्रिय टोमॅटो</Text>

      <TextInput
        placeholder="तुमची ऑफर किंमत (₹)"
        style={styles.input}
        keyboardType="numeric"
        value={offerPrice}
        onChangeText={setOfferPrice}
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>ऑफर पाठवा</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f8e9',
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  detail: {
    fontSize: 16,
    marginBottom: 4,
    color: '#555',
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#388e3c',
    marginTop: 20,
    padding: 14,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
