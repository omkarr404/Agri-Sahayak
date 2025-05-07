import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { logisticsHistory } from '../data/logisticsHistory';

export default function ServiceHistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>सेवेचा इतिहास</Text>
      <FlatList
        data={logisticsHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.label}>वाहन: <Text style={styles.value}>{item.vehicle}</Text></Text>
            <Text style={styles.label}>प्रवास: <Text style={styles.value}>{item.from} ते {item.to}</Text></Text>
            <Text style={styles.label}>तारीख: <Text style={styles.value}>{item.date}</Text></Text>
            <Text style={styles.label}>स्थिती: <Text style={styles.value}>{item.status}</Text></Text>
            <Text style={styles.label}>अभिप्राय: <Text style={styles.value}>{item.feedback}</Text></Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#2e7d32', marginBottom: 16 },
  card: {
    backgroundColor: '#f1f8e9',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  label: { fontWeight: 'bold', color: '#33691e' },
  value: { fontWeight: 'normal' },
});
