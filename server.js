const express = require('express');
const app = express();
const path = require('path');

// Public klasörünü dış dünyaya ve telefonlara açıyoruz
app.use(express.static(path.join(__dirname, 'public')));

// Siteye ilk girildiğinde direkt login.html açılsın
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Render ve yerel sistem için port ayarı
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Sunucu aktif, port: ${PORT}`);
});