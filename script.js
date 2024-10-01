const apiKey = 'YOUR_GOOGLE_CLOUD_API_KEY';
const text = 'Hello, world!';
const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    q: text,
    target: 'hi', // Target language code for Hindi
  }),
})
  .then(response => response.json())
  .then(data => {
    const translatedText = data.data.translations[0].translatedText;
    const translateElement = document.getElementById('translateElement');
    translateElement.innerHTML = translatedText;
  })
  .catch(error => console.error('Error:', error));
