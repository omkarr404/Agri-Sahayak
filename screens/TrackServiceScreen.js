// screens/TrackServiceScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const trackingSteps = [
  'सेवा गोडाऊनवर पोहचली आहे',
  'सेवा रस्त्यावर आहे',
  'सेवा आपल्या गावात पोहचली आहे',
  'सेवा शेताजवळ पोहचली आहे',
  'सेवा पोहचली ✅',
];

export default function TrackServiceScreen() {
  const [step, setStep] = useState(0);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev < trackingSteps.length - 1 ? prev + 1 : prev));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ट्रॅक सेवा</Text>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/684/684908.png' }}
        style={styles.image}
      />
      <Text style={styles.status}>{trackingSteps[step]}</Text>

      {step < trackingSteps.length - 1 && (
        <Text style={styles.eta}>अनुमानित वेळ: {45 - step * 10} मिनिटे</Text>
      )}

      {step === trackingSteps.length - 1 && !submitted && (
        <View style={styles.feedbackContainer}>
          <Text style={styles.completeText}>सेवा पूर्ण झाली आहे 🎉</Text>
          <Text style={styles.feedbackLabel}>कृपया आपली प्रतिक्रिया द्या:</Text>
          
          <View style={styles.stars}>
            {[1, 2, 3, 4, 5].map((num) => (
              <TouchableOpacity key={num} onPress={() => setRating(num)}>
                <Text style={[styles.star, rating >= num && styles.selectedStar]}>★</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TextInput
            placeholder="तुमची प्रतिक्रिया इथे लिहा..."
            style={styles.input}
            multiline
            value={feedback}
            onChangeText={setFeedback}
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>प्रतिक्रिया सबमिट करा</Text>
          </TouchableOpacity>
        </View>
      )}

      {submitted && (
        <View style={styles.thankyou}>
          <Text style={styles.thankyouText}>🙏 धन्यवाद! आपल्या प्रतिसादाबद्दल आभार.</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#2e7d32', marginBottom: 20 },
  image: { width: 120, height: 120, marginBottom: 20 },
  status: { fontSize: 18, marginBottom: 10, color: '#33691e', textAlign: 'center' },
  eta: { fontSize: 16, color: '#558b2f' },
  feedbackContainer: { marginTop: 20, padding: 15, width: '90%' },
  completeText: { fontSize: 20, fontWeight: 'bold', color: '#33691e', marginBottom: 10, textAlign: 'center' },
  feedbackLabel: { fontSize: 16, marginBottom: 5 },
  stars: { flexDirection: 'row', justifyContent: 'center', marginBottom: 10 },
  star: { fontSize: 30, color: '#ccc', marginHorizontal: 5 },
  selectedStar: { color: '#fbc02d' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    height: 100,
    marginBottom: 15,
    backgroundColor: '#f9fbe7',
  },
  button: {
    backgroundColor: '#689f38',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  thankyou: { marginTop: 20 },
  thankyouText: { fontSize: 18, color: '#388e3c', textAlign: 'center' },
});
