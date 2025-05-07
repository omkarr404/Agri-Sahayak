import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const marketAlerts = [
  { id: '1', crop: 'कांदा', price: '₹18/kg', location: 'पुणे' },
  { id: '2', crop: 'टोमॅटो', price: '₹20/kg', location: 'नाशिक' },
  { id: '3', crop: 'बटाटा', price: '₹15/kg', location: 'सोलापूर' },
];

export default function MarketAlertsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>बाजार भाव सूचना</Text>
      <FlatList
        data={marketAlerts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.crop}</Text>
            <Text>किंमत: {item.price}</Text>
            <Text>ठिकाण: {item.location}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  card: {
    backgroundColor: '#e3f2fd',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: { fontSize: 18, fontWeight: '600' },
});
