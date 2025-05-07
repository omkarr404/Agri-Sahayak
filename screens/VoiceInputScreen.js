import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import { Audio } from 'expo-av';

const VoiceInputScreen = ({ navigation, route }) => {
  const [listening, setListening] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [audioUri, setAudioUri] = useState(null);
  const [recognizedText, setRecognizedText] = useState('');
  const soundRef = useRef(null);

  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  const playAudio = async (uri) => {
    try {
      if (soundRef.current) {
        await soundRef.current.unloadAsync();
        soundRef.current = null;
      }
      const { sound } = await Audio.Sound.createAsync({ uri });
      soundRef.current = sound;
      await sound.playAsync();
    } catch (e) {
      console.error('Error playing audio:', e);
      Alert.alert('Audio Playback Error', 'Unable to play voice reply.');
    }
  };

  const handleMessage = async (event) => {
    const voiceText = event.nativeEvent.data;
    setRecognizedText(voiceText);
    if (voiceText && !voiceText.startsWith('त्रुटी') && !voiceText.startsWith('कोणताही आवाज')) {
      setListening(false);
      setLoading(true);
      setError('');
      try {
        // Send voice text to backend chat API
        const response = await fetch('http://192.168.1.25:5000/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: voiceText }),
        });
        const data = await response.json();
        setLoading(false);
        // Fetch voice reply audio
        const voiceResponseUri = 'http://192.168.1.25:5000/voice';
        setAudioUri(voiceResponseUri);
        playAudio(voiceResponseUri);
        // Navigate to Chatbot screen with text reply
        navigation.navigate('Chatbot', { query: voiceText, reply: data.reply });
      } catch (e) {
        setLoading(false);
        setError('सर्व्हरशी कनेक्ट होण्यात अडचण आली.');
      }
    } else if (voiceText.startsWith('त्रुटी')) {
      setError(voiceText);
      setListening(false);
      setLoading(false);
    } else if (voiceText.startsWith('कोणताही आवाज')) {
      setError('कोणताही आवाज सापडला नाही. कृपया पुन्हा प्रयत्न करा.');
      setListening(false);
      setLoading(false);
    }
  };

  const restartRecognition = () => {
    setListening(true);
    setError('');
    setAudioUri(null);
    setRecognizedText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎤 तुमचा प्रश्न विचारा</Text>

      <View style={styles.webviewContainer}>
        {listening && (
          <WebView
            originWhitelist={['*']}
            javaScriptEnabled={true}
            source={{
              html: `
                <html>
                  <body>
                    <script>
                      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
                      recognition.lang = 'mr-IN';
                      recognition.interimResults = false;
                      recognition.maxAlternatives = 1;

                      recognition.onresult = function(event) {
                        const result = event.results[0][0].transcript;
                        window.ReactNativeWebView.postMessage(result);
                      };

                      recognition.onerror = function(e) {
                        window.ReactNativeWebView.postMessage("त्रुटी: " + e.error);
                      };

                      recognition.onend = function() {
                        window.ReactNativeWebView.postMessage("कोणताही आवाज सापडला नाही.");
                      };

                      recognition.start();
                    </script>
                  </body>
                </html>
              `,
            }}
            onMessage={handleMessage}
          />
        )}
        {!listening && (
          <TouchableOpacity style={styles.retryButton} onPress={restartRecognition}>
            <Text style={styles.retryText}>पुन्हा ऐका</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.statusContainer}>
        <Text style={styles.statusLabel}>Listening Status:</Text>
        <Text style={styles.statusText}>{listening ? 'Listening...' : 'Stopped'}</Text>
      </View>

      <View style={styles.recognizedTextContainer}>
        <Text style={styles.recognizedTextLabel}>Recognized Text:</Text>
        <Text style={styles.recognizedText}>{recognizedText}</Text>
      </View>

      {loading && <ActivityIndicator size="large" color="green" style={{ marginTop: 20 }} />}
      {error.length > 0 && <Text style={styles.errorText}>{error}</Text>}
      {audioUri && !loading && <Text style={styles.listening}>🔊 आवाज प्ले करत आहे...</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    color: '#333',
  },
  webviewContainer: {
    height: 100,
    width: '90%',
    backgroundColor: '#eee',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  statusLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusText: {
    fontSize: 16,
    color: 'green',
  },
  recognizedTextContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  recognizedTextLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  recognizedText: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
  listening: {
    marginTop: 20,
    fontSize: 18,
    color: 'green',
  },
  errorText: {
    marginTop: 20,
    fontSize: 16,
    color: 'red',
  },
  retryButton: {
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
  retryText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default VoiceInputScreen;
