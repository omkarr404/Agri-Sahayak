// components/VoiceInputWebView.js
import React from 'react';
import { WebView } from 'react-native-webview';

const VoiceInputWebView = ({ onResult }) => {
  const htmlContent = `
    <html>
      <body>
        <script>
          const recognition = new webkitSpeechRecognition();
          recognition.lang = 'mr-IN';
          recognition.interimResults = false;
          recognition.onresult = function(event) {
            const text = event.results[0][0].transcript;
            window.ReactNativeWebView.postMessage(text);
          };
          recognition.start();
        </script>
      </body>
    </html>
  `;

  return (
    <WebView
      originWhitelist={['*']}
      source={{ html: htmlContent }}
      onMessage={(event) => {
        onResult(event.nativeEvent.data);
      }}
    />
  );
};

export default VoiceInputWebView;
