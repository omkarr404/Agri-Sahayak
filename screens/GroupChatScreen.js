// screens/GroupChatScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const dummyUsers = {
  farmer1: 'रामु शेतकरी',
  farmer2: 'गजानन शेतकरी',
  farmer3: 'सखाराम शेतकरी',
  farmer4: 'मोहन शेतकरी',
};

const dummyGroups = [
  {
    id: 'group1',
    name: 'प्याज उत्पादक गट',
    users: ['farmer1', 'farmer2'],
  },
  {
    id: 'group2',
    name: 'टोमॅटो विक्रेते गट',
    users: ['farmer3', 'farmer4'],
  },
  {
    id: 'group3',
    name: 'सेंद्रिय शेती गट',
    users: ['farmer1', 'farmer3', 'farmer4'],
  },
];

export default function GroupChatScreen({ route }) {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Simulate a logged-in user (use login screen later)
  const currentUser = 'farmer1';

  const sendMessage = () => {
    if (!input) return;
    const newMsg = {
      id: Date.now().toString(),
      user: currentUser,
      text: input,
      time: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput('');
  };

  const renderGroupList = () => (
    <FlatList
      data={dummyGroups}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.groupCard}
          onPress={() => setSelectedGroup(item)}
        >
          <Text style={styles.groupName}>{item.name}</Text>
          <Text style={styles.groupUsers}>सदस्य: {item.users.map(u => dummyUsers[u]).join(', ')}</Text>
        </TouchableOpacity>
      )}
    />
  );

  const renderChatView = () => (
    <View style={{ flex: 1 }}>
      <Text style={styles.groupTitle}>{selectedGroup.name}</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 10 }}
        renderItem={({ item }) => (
          <View
            style={[styles.message, {
              alignSelf: item.user === currentUser ? 'flex-end' : 'flex-start',
              backgroundColor: item.user === currentUser ? '#c8e6c9' : '#e0e0e0',
            }]}
          >
            <Text style={styles.msgUser}>{dummyUsers[item.user]}</Text>
            <Text>{item.text}</Text>
            <Text style={styles.msgTime}>{item.time}</Text>
          </View>
        )}
      />
      <View style={styles.inputRow}>
        <TextInput
          placeholder="आपला संदेश टाका"
          value={input}
          onChangeText={setInput}
          style={styles.input}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendBtn}>
          <Text style={{ color: 'white' }}>पाठवा</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {!selectedGroup ? renderGroupList() : renderChatView()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  groupCard: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f1f8e9',
    marginBottom: 10,
  },
  groupName: { fontSize: 18, fontWeight: 'bold', color: '#33691e' },
  groupUsers: { color: '#757575' },
  groupTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#2e7d32' },
  message: {
    padding: 8,
    borderRadius: 10,
    marginBottom: 5,
    maxWidth: '80%',
  },
  msgUser: { fontWeight: 'bold', fontSize: 12 },
  msgTime: { fontSize: 10, color: '#666' },
  inputRow: { flexDirection: 'row', alignItems: 'center', padding: 5 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
  },
  sendBtn: {
    backgroundColor: '#43a047',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
});