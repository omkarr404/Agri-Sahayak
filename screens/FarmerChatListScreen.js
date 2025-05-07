import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const dummyFarmers = [
  { id: '1', name: 'रामु शेतकरी' },
  { id: '2', name: 'गजानन शेतकरी' },
  { id: '3', name: 'सखाराम शेतकरी' },
  { id: '4', name: 'मोहन शेतकरी' },
];

export default function FarmerChatListScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>शेतकरी निवडा</Text>
      <FlatList
        data={dummyFarmers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('FarmerChat', { farmer: item })}

          >
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>➕ नवीन शेतकरी जोडा</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, color: '#2e7d32' },
  card: {
    padding: 15,
    backgroundColor: '#f1f8e9',
    marginBottom: 10,
    borderRadius: 10,
  },
  name: { fontSize: 18, color: '#33691e' },
  addButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#aed581',
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: { color: '#1b5e20', fontWeight: 'bold' },
});
