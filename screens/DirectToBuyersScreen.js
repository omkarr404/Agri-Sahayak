// screens/DirectToBuyersScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const dummyListings = [
  {
    id: '1',
    name: 'Fresh Tomatoes',
    price: 25,
    image: require('../assets/tomato.jpg'),
    location: 'Pune',
    unit: '₹/kg',
  },
  {
    id: '2',
    name: 'Organic Onions',
    price: 30,
    image: require('../assets/onion.jpg'),
    location: 'Nashik',
    unit: '₹/kg',
  },
];

export default function DirectToBuyersScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ProduceDetail', { produce: item })}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price} {item.unit}</Text>
      <Text style={styles.location}>{item.location}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>उत्पन्न थेट खरेदीसाठी</Text>
      <FlatList
        data={dummyListings}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 12 },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
  },
  image: { width: '100%', height: 160, borderRadius: 8 },
  name: { fontSize: 18, fontWeight: '600', marginTop: 10 },
  price: { fontSize: 16, color: '#2e7d32', marginTop: 4 },
  location: { fontSize: 14, color: 'gray', marginTop: 2 },
});
