import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, Modal, TextInput, Alert } from 'react-native';

export default function ProduceDetailScreen({ route }) {
  const { produce } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [offerAmount, setOfferAmount] = useState('');

  const submitOffer = () => {
    if (!offerAmount) {
      Alert.alert("कृपया एक रक्कम भरा");
      return;
    }
    Alert.alert('ऑफर सबमिट केली!', `आपली ऑफर ₹${offerAmount}`);
    setModalVisible(false);
    setOfferAmount('');
  };

  return (
    <View style={styles.container}>
      <Image source={produce.image} style={styles.image} />
      <Text style={styles.title}>{produce.name}</Text>
      <Text style={styles.price}>₹{produce.price}</Text>
      <Text style={styles.description}>{produce.description}</Text>
      <Button title="ऑफर द्या" onPress={() => setModalVisible(true)} />

      {/* Offer Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>आपली ऑफर भरा</Text>
            <TextInput
              placeholder="रक्कम ₹"
              keyboardType="numeric"
              value={offerAmount}
              onChangeText={setOfferAmount}
              style={styles.input}
            />
            <Button title="सबमिट" onPress={submitOffer} />
            <Button title="रद्द" onPress={() => setModalVisible(false)} color="gray" />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: '#2e7d32',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    width: '80%',
    borderRadius: 12,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    marginBottom: 15,
    paddingVertical: 8,
    fontSize: 16,
  },
});
