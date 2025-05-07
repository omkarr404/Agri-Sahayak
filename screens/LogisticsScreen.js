import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const logisticsData = [
  {
    id: '1',
    name: 'गाव ट्रान्सपोर्ट सेवा',
    contact: '९८२३००१२३४',
    capacity: '१० टन',
    price: '₹५००/किमी',
  },
  {
    id: '2',
    name: 'शेती माल वाहतूक',
    contact: '९४२३००५६७८',
    capacity: '५ टन',
    price: '₹३००/किमी',
  },
  {
    id: '3',
    name: 'जलद ट्रान्सपोर्ट',
    contact: '९८१२३४५६७८',
    capacity: '२० टन',
    price: '₹७५०/किमी',
  },
];

export default function LogisticsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>वाहतूक सेवा</Text>

      <FlatList
        data={logisticsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>संपर्क: {item.contact}</Text>
            <Text>क्षमता: {item.capacity}</Text>
            <Text>दर: {item.price}</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                Alert.alert(
                  'बुकिंग यशस्वी!',
                  'तुमची सेवा यशस्वीरित्या बुक झाली आहे.',
                  [
                    { text: 'ठीक आहे', style: 'cancel' },
                    {
                      text: 'सेवा ट्रॅक करा',
                      onPress: () => navigation.navigate('TrackService'),
                    },
                  ],
                  { cancelable: true }
                )
              }
            >
              <Text style={styles.buttonText}>बुक करा</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('ServiceHistory')}
              style={styles.modalButton}
            >
              <Text style={styles.modalButtonText}>सेवा पूर्ण करा आणि अभिप्राय द्या</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* ✅ Separated Service History Button at Bottom */}
      <TouchableOpacity
        onPress={() => navigation.navigate('ServiceHistory')}
        style={styles.historyButton}
      >
        <Text style={styles.historyButtonText}>📜 सेवा इतिहास</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f8e9',
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: '#2e7d32',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    borderColor: '#c5e1a5',
    borderWidth: 1,
  },
  name: {
    fontSize: 18,
    color: '#33691e',
    fontWeight: 'bold',
    marginBottom: 6,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#43a047',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalButton: {
    marginTop: 8,
    backgroundColor: '#aed581',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#1b5e20',
    fontWeight: 'bold',
  },
  historyButton: {
    marginTop: 20,
    backgroundColor: '#dcedc8',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  historyButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#33691e',
  },
});
