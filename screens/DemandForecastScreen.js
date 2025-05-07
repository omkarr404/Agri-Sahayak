import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DemandForecastScreen() {
  // Demo weather data
  const weatherData = {
    location: 'नेरूळ',
    temperature: '३०°C',
    condition: 'सूर्यप्रकाश',
    humidity: '६५%',
    windSpeed: '१० किमी/तास',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>हवामान</Text>
      <Text style={styles.location}>{weatherData.location}</Text>
      <Text style={styles.temperature}>{weatherData.temperature}</Text>
      <Text style={styles.condition}>{weatherData.condition}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detail}>आर्द्रता: {weatherData.humidity}</Text>
        <Text style={styles.detail}>वारा वेग: {weatherData.windSpeed}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#0277BD',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  location: {
    fontSize: 22,
    color: '#01579B',
    marginBottom: 5,
  },
  temperature: {
    fontSize: 48,
    color: '#FF7043',
    fontWeight: 'bold',
  },
  condition: {
    fontSize: 20,
    color: '#00796B',
    marginVertical: 5,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 15,
  },
  detail: {
    fontSize: 16,
    color: '#004D40',
  },
});
