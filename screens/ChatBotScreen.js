// ChatbotScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

export default function ChatbotScreen() {
  const openWhatsAppBot = () => {
    const phoneNumber = '917738662870'; // Replace with your WhatsApp number in international format
    const message = 'Hi';// Default message to send
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>कृषी सहाय्य बॉट</Text>
      <Text style={styles.description}>
        तुमचे प्रश्न विचारण्यासाठी कृपया खालील बटणावर क्लिक करा. तुम्हाला आमचा WhatsApp सहाय्य बॉट मदत करेल.
      </Text>
      <TouchableOpacity style={styles.button} onPress={openWhatsAppBot}>
        <Text style={styles.buttonText}>WhatsApp बॉट सुरु करा</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    color: '#2e7d32',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: '#444',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#25D366',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 10,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
