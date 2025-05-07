// SchemesScreen.js

import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  Alert,
} from 'react-native';

const schemesData = [
  {
    id: '1',
    title: 'प्रधानमंत्री कृषी सन्मान योजना',
    summary: 'शेतकऱ्यांना आर्थिक मदत मिळते.',
    details:
      'या योजनेअंतर्गत पात्र शेतकऱ्यांना दरवर्षी ₹६००० ची आर्थिक मदत थेट खात्यात जमा केली जाते.',
  },
  {
    id: '2',
    title: 'पिक विमा योजना',
    summary: 'पिकांचे विमा संरक्षण मिळते.',
    details:
      'या योजनेअंतर्गत हवामान किंवा कीड यामुळे पिकांचे नुकसान झाल्यास विमा रक्कम दिली जाते.',
  },
  {
    id: '3',
    title: 'महात्मा फुले शेतकरी कर्जमाफी योजना',
    summary: 'शेतकऱ्यांचे कर्ज माफ केले जाते.',
    details:
      'राज्य सरकारतर्फे पात्र शेतकऱ्यांचे थकित शेती कर्ज माफ करण्यात येते.',
  },
];

export default function SchemesScreen() {
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleRegister = () => {
    setModalVisible(false);
    Alert.alert('नोंदणी यशस्वी!', 'तुमची नोंदणी यशस्वीरित्या पूर्ण झाली आहे.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>शासकीय योजना</Text>
      <FlatList
        data={schemesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.summary}>{item.summary}</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.moreBtn}
                onPress={() => {
                  setSelectedScheme(item);
                  setModalVisible(true);
                }}
              >
                <Text style={styles.btnText}>अधिक वाचा</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.registerBtn} onPress={handleRegister} >
                <Text style={styles.btnText }>नोंदणी करा</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Modal for scheme details */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView>
              <Text style={styles.modalTitle}>{selectedScheme?.title}</Text>
              <Text style={styles.modalDetails}>{selectedScheme?.details}</Text>
            </ScrollView>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.btnText}>बंद करा</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f8e9', padding: 16 },
  header: {
    fontSize: 24,
    color: '#2e7d32',
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    borderColor: '#c5e1a5',
    borderWidth: 1,
  },
  title: { fontSize: 18, fontWeight: 'bold', color: '#33691e' },
  summary: { marginTop: 6, color: '#555' },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  moreBtn: {
    backgroundColor: '#aed581',
    padding: 10,
    borderRadius: 6,
  },
  registerBtn: {
    backgroundColor: '#43a047',
    padding: 10,
    borderRadius: 6,
  },
  btnText: { color: '#fff', fontWeight: 'bold' },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#33691e',
    marginBottom: 10,
  },
  modalDetails: {
    fontSize: 16,
    color: '#333',
  },
  closeBtn: {
    backgroundColor: '#607d8b',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 20,
  },
});
