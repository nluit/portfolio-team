const express = require('express');

const router = express.Router();
const fs = require('firebase-admin');

const serviceAccount = require('../atomic-land-250408-firebase-adminsdk-xsooh-c682b550e0.json');

fs.initializeApp({
  credential: fs.credential.cert(serviceAccount)
});
const db = fs.firestore();
const usersDb = db.collection('users');

router.get('/list', async (req, res) => {
  try {
    const data = [];
    await usersDb.get().then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        data.push(doc.data());
      });
    });
    res.json({
      statusCode: 200,
      response: data
    });
  } catch (error) {
    res.json({
      statusCode: 400,
      response: {}
    });
  }
});

module.exports = router;
