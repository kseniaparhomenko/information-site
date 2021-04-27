const crypto = require('crypto').randomBytes(256).toString('hex'); // Забезпечує криптографічну функціональність (хеш OpenSSL, HMAC, шифр, розшифровка, підпис та перевірка функцій)

// Export config object
module.exports = {
  uri: 'mongodb://localhost:27017/' + this.db, // БД URI and назва БД
  secret: crypto, // Cryto-created secret
  db: 'website' // Назва ДБ
}