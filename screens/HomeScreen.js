// screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const features = [
  { label: 'उत्पन्न यादी', screen: 'ProduceListing', icon: require('../assets/produce.png') },
  { label: 'व्यवहार व्यवस्थापन', screen: 'Transaction', icon: require('../assets/transaction.png') },
  { label: 'हवामान', screen: 'DemandForecast', icon: require('../assets/forecast.png') },
  { label: 'गट विक्री', screen: 'GroupSelling', icon: require('../assets/group.png') },
  { label: 'बाजार भाव तपासा', screen: 'MarketPrices', icon: require('../assets/market_price.jpg') },
  { label: 'वाहतूक सेवा', screen: 'Logistics', icon: require('../assets/logistics.png') },
  {label: 'चॅटबॉट', screen: 'Chatbot', icon: require('../assets/voice.png') },
  { label: 'ऑफलाइन मोड', screen: 'OfflineMode', icon: require('../assets/offline.png') },
  { label: 'बाजार भाव सूचना', screen: 'MarketAlerts', icon: require('../assets/alert.png') },
  { label: 'योजना माहिती', screen: 'GovtSchemes', icon: require('../assets/schemes.png') },
  { label: 'शेतकरी ते शेतकरी', screen: 'FarmerTrade', icon: require('../assets/farmer.png') },
  { label: 'किंमत बोलणी', screen: 'PriceNegotiation', icon: require('../assets/negotiation.png') },
  { label: 'ट्रस्ट प्रणाली', screen: 'TrustSystem', icon: require('../assets/trust.png') },
  { label: 'थेट खरेदीदार', screen: 'DirectToBuyers', icon: require('../assets/direct_buyer.jpg') },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>🙏 शेतकरी अ‍ॅपमध्ये आपले स्वागत आहे!</Text>
      <FlatList
        data={features}
        keyExtractor={(item) => item.screen}
        numColumns={2}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Image source={item.icon} style={styles.icon} />
            <Text style={styles.label}>{item.label}</Text>
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
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#2e7d32',
  },
  grid: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 10,
    margin: 8,
    alignItems: 'center',
    width: '45%',
    elevation: 3,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
});
