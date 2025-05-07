import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const dummyProduce = [
  {
    id: '1',
    name: 'रामू पाटील',
    product: 'टोमॅटो',
    quantity: '500 किलो',
    price: '₹15 प्रति किलो',
    location: 'नाशिक',
    image: require('../assets/tomato.jpg'),
  },
  {
    id: '2',
    name: 'सुमित जाधव',
    product: 'बटाटे',
    quantity: '800 किलो',
    price: '₹10 प्रति किलो',
    location: 'सातारा',
    image: require('../assets/potato.jpg'),
  },
  {
    id: '3',
    name: 'गीता शिंदे',
    product: 'प्याज',
    quantity: '300 किलो',
    price: '₹12 प्रति किलो',
    location: 'अमरावती',
    image: require('../assets/onion.jpg'),
  },
];

const products = ['टोमॅटो', 'बटाटे', 'प्याज'];
const locations = ['नाशिक', 'सातारा', 'अमरावती'];

export default function MarketListingsScreen() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const filteredData = dummyProduce.filter((item) => {
    return (
      (!selectedProduct || item.product === selectedProduct) &&
      (!selectedLocation || item.location === selectedLocation)
    );
  });

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🧺 बाजारातील उपलब्ध पिके</Text>

      <View style={styles.filters}>
        <RNPickerSelect
          onValueChange={(value) => setSelectedProduct(value)}
          items={products.map((p) => ({ label: p, value: p }))}
          placeholder={{ label: 'पिक निवडा', value: null }}
          style={pickerStyle}
        />
        <RNPickerSelect
          onValueChange={(value) => setSelectedLocation(value)}
          items={locations.map((l) => ({ label: l, value: l }))}
          placeholder={{ label: 'जिल्हा निवडा', value: null }}
          style={pickerStyle}
        />
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.details}>
                <Text style={styles.name}>👨‍🌾 {item.name}</Text>
                <Text>पिक: {item.product}</Text>
                <Text>प्रमाण: {item.quantity}</Text>
                <Text>दर: {item.price}</Text>
                <Text>ठिकाण: {item.location}</Text>
          
                <TouchableOpacity
                  style={styles.interestButton}
                  onPress={() => alert(`आपली रूची ${item.name} यांच्याकडे पाठवली गेली आहे!`)}
                >
                  <Text style={styles.interestButtonText}>रुची व्यक्त करा</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          
        ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>माहिती सापडली नाही.</Text>}
      />
    </View>
  );
}

const pickerStyle = {
  inputIOS: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  inputAndroid: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f8e9',
    padding: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#33691e',
    marginBottom: 10,
  },
  filters: {
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  interestButton: {
    marginTop: 10,
    backgroundColor: '#4caf50',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  interestButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  
});
