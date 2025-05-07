// screens/KissanChatBotScreen.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function KissanChatBotScreen() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://kissan.ai/chat' }}
        style={styles.webview}
        startInLoadingState={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
