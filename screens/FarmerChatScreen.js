import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function FarmerChatScreen({ route }) {
  const { farmer } = route.params || { farmer: { name: 'शेतकरी' } };
  const [messages, setMessages] = useState([
    {id: '1', sender: 'शेतकरी', text: 'नमस्कार! तुम्हाला कसे आहे?', time: '10:00 AM'},
    {id: '2', sender: 'तुम्ही', text: 'नमस्कार! मी ठीक आहे.', time: '10:01 AM'},
  ]);
  const [input, setInput] = useState('');

  const currentUser = 'तुम्ही';

  const sendMessage = () => {
    if (!input) return;
    const newMsg = {
      id: Date.now().toString(),
      sender: currentUser,
      text: input,
      time: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{farmer?.name} सोबत संवाद</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 10 }}
        renderItem={({ item }) => (
          <View
            style={[
              styles.message,
              {
                alignSelf: item.sender === currentUser ? 'flex-end' : 'flex-start',
                backgroundColor: item.sender === currentUser ? '#dcedc8' : '#fff9c4',
              },
            ]}
          >
            <Text style={styles.sender}>{item.sender}</Text>
            <Text>{item.text}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
      />
      <View style={styles.inputRow}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="संदेश टाका"
          style={styles.input}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendBtn}>
          <Text style={{ color: '#fff' }}>पाठवा</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2e7d32',
    textAlign: 'center',
  },
  message: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
    maxWidth: '75%',
  },
  sender: { fontWeight: 'bold', fontSize: 12 },
  time: { fontSize: 10, color: '#666' },
  inputRow: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f1f8e9',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#c5e1a5',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  sendBtn: {
    backgroundColor: '#43a047',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
});
