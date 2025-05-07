// screens/ProduceListingScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const dummyProduce = [
  {
    id: '1',
    name: 'टोमॅटो',
    price: 1500,
    image: require('../assets/tomato.jpg'),
    description: 'ताजे आणि सेंद्रिय टोमॅटो.',
  },
  {
    id: '2',
    name: 'बटाटा',
    price: 1000,
    image: require('../assets/potato.jpg'),
    description: 'नवीन पिकवलेले बटाटे.',
  },
];

export default function ProduceListingScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>उत्पन्न यादी</Text>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddProduct')}
      >
        <Text style={styles.addButtonText}>➕ उत्पन्न जोडा</Text>
      </TouchableOpacity>

      <FlatList
        data={dummyProduce}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('ProduceDetail', { produce: item })}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>₹{item.price}</Text>
            
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f5e9',
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#2e7d32',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#43a047',
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    elevation: 2,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#2e7d32',
  },
});
