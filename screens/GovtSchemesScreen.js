import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const schemes = [
  { id: '1', name: 'प्रधानमंत्री किसान योजना', benefit: '₹6000 वार्षिक' },
  { id: '2', name: 'पिक विमा योजना', benefit: 'नुकसान भरपाई' },
  { id: '3', name: 'मृदा आरोग्य कार्ड', benefit: 'माती परीक्षण व सल्ला' },
];

export default function GovtSchemesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>सरकारी योजना</Text>
      <FlatList
        data={schemes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>फायदा: {item.benefit}</Text>
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
    backgroundColor: '#fff3e0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: { fontSize: 18, fontWeight: '600' },
});
