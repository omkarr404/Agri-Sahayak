import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { supabase } from '../lib/supabase';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
  
    if (error) {
      Alert.alert('Error', error.message);
    } else {
      // If user is created successfully AND email confirmation is not required:
      if (data.session) {
        await AsyncStorage.setItem('isLoggedIn', 'true');
        navigation.reset({
          index: 0,
          routes: [{ name: 'MainTabs' }],
        });
      } else {
        Alert.alert(
          'Registration Successful!',
          'Please check your email to verify your account.'
        );
        navigation.navigate('Login');
      }
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>नवीन खाते तयार करा</Text>
      <TextInput
        style={styles.input}
        placeholder="ईमेल"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="पासवर्ड"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>नोंदणी करा</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>आधीच खाते आहे? लॉगिन करा</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: '#2e7d32',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#2e7d32',
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    textAlign: 'center',
    marginTop: 20,
    color: '#1976d2',
  },
});
