// screens/AddProductScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

export default function AddProductScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleImagePick = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('परवानगी नाकारली', 'गॅलरी परवानगी आवश्यक आहे!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleAddProduct = () => {
    if (!name || !price || !description || !image) {
      Alert.alert('चूक', 'कृपया सर्व माहिती भरा आणि प्रतिमा जोडा');
      return;
    }

    // Simulate product addition
    Alert.alert('यशस्वी!', 'उत्पन्न यशस्वीरित्या जोडले गेले.');
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>नवीन उत्पन्न जोडा</Text>

      <TouchableOpacity style={styles.imagePicker} onPress={handleImagePick}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text style={styles.imageText}>प्रतिमा निवडा</Text>
        )}
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="उत्पन्नाचे नाव"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="किंमत (उदा. १५००)"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="उत्पन्नाचे वर्णन"
        value={description}
        multiline
        numberOfLines={4}
        onChangeText={setDescription}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
        <Text style={styles.buttonText}>उत्पन्न जोडा</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f1f8e9',
    flexGrow: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#c5e1a5',
  },
  imagePicker: {
    backgroundColor: '#e0f2f1',
    borderRadius: 10,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#a5d6a7',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  imageText: {
    color: '#2e7d32',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2e7d32',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
