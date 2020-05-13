const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://project-lend-an-arm.firebaseio.com",
});
const db = admin.firestore();

module.exports = { admin, db };
