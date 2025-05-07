// screens/TransactionScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const transactions = [
  {
    id: '1',
    product: 'टोमॅटो',
    quantity: '१०० किलो',
    price: '₹1500',
    buyer: 'श्री. पाटील',
    date: '१० एप्रिल २०२५',
  },
  {
    id: '2',
    product: 'बटाटा',
    quantity: '५० किलो',
    price: '₹800',
    buyer: 'श्री. देशमुख',
    date: '९ एप्रिल २०२५',
  },
  {
    id: '3',
    product: 'वांगी',
    quantity: '३० किलो',
    price: '₹600',
    buyer: 'श्री. जोशी',
    date: '८ एप्रिल २०२५',
  },
];

export default function TransactionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>व्यवहार इतिहास</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.product} ({item.quantity})</Text>
            <Text style={styles.text}>किंमत: {item.price}</Text>
            <Text style={styles.text}>खरेदीदार: {item.buyer}</Text>
            <Text style={styles.text}>तारीख: {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f8e9',
    padding: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2e7d32',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#388e3c',
    marginBottom: 4,
  },
  text: {
    fontSize: 15,
    color: '#333',
  },
});
