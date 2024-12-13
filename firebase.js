const admin = require("firebase-admin");

const serviceAccount = require("./melodate-chat-firebase-adminsdk-5dljz-95c71fcc54.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "melodatefirstbucket",
});

const db = admin.firestore();
module.exports = { db, admin };
