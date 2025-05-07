import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import dummyGroups from '../data/dummyGroups'; // <-- Default import

export default function GroupListScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>गट निवडा</Text>

      <FlatList
        data={dummyGroups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.groupButton}
            onPress={() => navigation.navigate('GroupChat', { group: item })}
          >
            <Text style={styles.groupText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', marginTop: 20 }}>⚠️ गट माहिती मिळाली नाही!</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  groupButton: { padding: 12, backgroundColor: '#e0f2f1', marginBottom: 10, borderRadius: 8 },
  groupText: { fontSize: 16 },
});
