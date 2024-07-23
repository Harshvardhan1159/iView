const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'gs://iview-fbeeb.appspot.com', // Replace with your bucket name
});

const bucket = admin.storage().bucket();

module.exports = { bucket };
