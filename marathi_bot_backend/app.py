from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from langdetect import detect
from deep_translator import GoogleTranslator
from gtts import gTTS
import os
import openai

app = Flask(__name__)
CORS(app)

# Set your OpenAI API key here or use environment variable
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    query = data.get('query', '')

    try:
        detected_lang = detect(query)

        if detected_lang != 'en':
            translated_query = GoogleTranslator(source=detected_lang, target='en').translate(query)
        else:
            translated_query = query

        # Call OpenAI API to get AI response
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=f"You are a helpful assistant for farmers. Answer the query: {translated_query}",
            max_tokens=150,
            n=1,
            stop=None,
            temperature=0.7,
        )
        response_en = response.choices[0].text.strip()

        # Translate to Marathi
        response_mr = GoogleTranslator(source='en', target='mr').translate(response_en)

        # Convert Marathi reply to voice
        tts = gTTS(text=response_mr, lang='mr')
        tts.save("response.mp3")

        return jsonify({ 'reply': response_mr })

    except Exception as e:
        print("Error:", e)
        return jsonify({ 'reply': 'क्षमस्व, काही त्रुटी आली आहे.' })

@app.route('/voice', methods=['GET'])
def voice_reply():
    try:
        return send_file("response.mp3", mimetype="audio/mpeg")
    except:
        return "Voice file not found", 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
