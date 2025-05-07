// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

// const districts = ['पुणे', 'नाशिक', 'मुंबई', 'सिंधुदुर्ग', 'सांगली', 'रत्नागिरी'];

// export default function MarketPricesScreen() {
//   const [selectedDistrict, setSelectedDistrict] = useState('');
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [prices, setPrices] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const apiKey = '579b464db66ec23bdd0000012fec62e884a6458a76167c8012b139b7';

//   const fetchMarketPrices = async (district) => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         `https://api.data.gov.in/resource/f9b8b50a-d215-41ac-bc2b-08f3cbf36a4e?api-key=${apiKey}&format=json&filters[district]=${district}`
//       );
//       const data = await response.json();
//       if (data && data.records) {
//         setPrices(data.records);
//       } else {
//         setPrices([]);
//       }
//     } catch (error) {
//       console.error('API error:', error);
//       setPrices([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (selectedDistrict) {
//       fetchMarketPrices(selectedDistrict);
//     }
//   }, [selectedDistrict]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>जिल्हा निवडा</Text>

//       <TouchableOpacity
//         onPress={() => setShowDropdown(!showDropdown)}
//         style={styles.dropdownButton}
//       >
//         <Text style={styles.dropdownButtonText}>
//           {selectedDistrict ? selectedDistrict : 'जिल्हा निवडा'}
//         </Text>
//       </TouchableOpacity>

//       {showDropdown && (
//         <View style={styles.dropdown}>
//           {districts.map((district) => (
//             <TouchableOpacity
//               key={district}
//               onPress={() => {
//                 setSelectedDistrict(district);
//                 setShowDropdown(false);
//               }}
//               style={styles.dropdownItem}
//             >
//               <Text>{district}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       )}

//       <Text style={styles.title}>बाजार भाव</Text>

//       {loading ? (
//         <ActivityIndicator size="large" color="#388e3c" />
//       ) : (
//         <FlatList
//           data={prices}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({ item }) => (
//             <View style={styles.card}>
//               <Text style={styles.crop}>{item.commodity || 'माहिती नाही'}</Text>
//               <Text>बाजार: {item.market || '---'}</Text>
//               <Text>किंमत: ₹{item.modal_price || '---'}</Text>
//               <Text>तारीख: {item.arrival_date || '---'}</Text>
//             </View>
//           )}
//           ListEmptyComponent={
//             <Text style={styles.noData}>या जिल्ह्यासाठी सध्या माहिती उपलब्ध नाही.</Text>
//           }
//         />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, backgroundColor: '#f1f8e9' },
//   header: { fontSize: 18, color: '#2e7d32', fontWeight: 'bold', marginBottom: 10 },
//   dropdownButton: {
//     backgroundColor: '#aed581',
//     padding: 12,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   dropdownButtonText: { color: '#1b5e20', fontWeight: 'bold' },
//   dropdown: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     marginBottom: 10,
//     borderColor: '#c5e1a5',
//     borderWidth: 1,
//   },
//   dropdownItem: {
//     padding: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   title: { fontSize: 20, fontWeight: 'bold', color: '#33691e', marginBottom: 10 },
//   card: {
//     backgroundColor: '#ffffff',
//     padding: 12,
//     marginBottom: 10,
//     borderRadius: 10,
//     borderColor: '#c5e1a5',
//     borderWidth: 1,
//   },
//   crop: { fontSize: 16, fontWeight: 'bold', color: '#388e3c' },
//   noData: { marginTop: 20, textAlign: 'center', color: '#757575' },
// });


import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Modal, Pressable } from 'react-native';

const districtWiseData = {
  'पुणे': [
    { crop: 'कांदा', price: '₹1800 / क्विंटल' },
    { crop: 'टोमॅटो', price: '₹1200 / क्विंटल' },
  ],
  'नाशिक': [
    { crop: 'द्राक्षे', price: '₹3000 / क्विंटल' },
    { crop: 'कांदा', price: '₹1700 / क्विंटल' },
  ],
  'औरंगाबाद': [
    { crop: 'गहू', price: '₹2100 / क्विंटल' },
    { crop: 'ज्वारी', price: '₹1900 / क्विंटल' },
  ],
  'सातारा': [
    { crop: 'बटाटा', price: '₹1400 / क्विंटल' },
    { crop: 'टोमॅटो', price: '₹1300 / क्विंटल' },
  ],
  'सोलापूर': [
    { crop: 'बाजरी', price: '₹2000 / क्विंटल' },
    { crop: 'हरभरा', price: '₹2400 / क्विंटल' },
  ],
  'मुंबई': [
    { crop: 'फळे (केळी)', price: '₹2800 / क्विंटल' },
    { crop: 'फळे (संत्री)', price: '₹2500 / क्विंटल' },
  ],
  'सिंधुदुर्ग': [
    { crop: 'आंबा', price: '₹5000 / क्विंटल' },
    { crop: 'काजू', price: '₹6000 / क्विंटल' },
  ],
  'सांगली': [
    { crop: 'ऊस', price: '₹2200 / क्विंटल' },
    { crop: 'द्राक्षे', price: '₹3100 / क्विंटल' },
  ],
  'रत्नागिरी': [
    { crop: 'आंबा', price: '₹5200 / क्विंटल' },
    { crop: 'नारळ', price: '₹2300 / क्विंटल' },
  ],
};

const districts = Object.keys(districtWiseData);

export default function MarketPriceScreen() {
  const [selectedDistrict, setSelectedDistrict] = useState('पुणे');
  const [modalVisible, setModalVisible] = useState(false);

  const crops = districtWiseData[selectedDistrict];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>बाजारभाव (जिल्ह्यानुसार)</Text>

      <TouchableOpacity style={styles.dropdown} onPress={() => setModalVisible(true)}>
        <Text style={styles.dropdownText}>{selectedDistrict}</Text>
      </TouchableOpacity>

      <FlatList
        data={crops}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.crop}>{item.crop}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />

      {/* Custom Dropdown Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>जिल्हा निवडा</Text>
            {districts.map((district, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  setSelectedDistrict(district);
                  setModalVisible(false);
                }}
                style={styles.modalItem}
              >
                <Text style={styles.modalItemText}>{district}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f1f8e9' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#2e7d32', marginBottom: 10 },
  dropdown: {
    backgroundColor: '#dcedc8',
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: 'center',
  },
  dropdownText: { fontSize: 18, color: '#33691e' },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: '#c5e1a5',
    borderWidth: 1,
  },
  crop: { fontSize: 18, fontWeight: 'bold', color: '#33691e' },
  price: { fontSize: 16, color: '#558b2f', marginTop: 4 },

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000aa',
  },
  modalContent: {
    backgroundColor: '#fff',
    margin: 30,
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 12,
    textAlign: 'center',
  },
  modalItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#c5e1a5',
  },
  modalItemText: {
    fontSize: 18,
    color: '#33691e',
    textAlign: 'center',
  },
});
