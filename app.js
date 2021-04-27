const firebase = require("firebase")

var firebaseConfig = {
  apiKey: "AIzaSyDXr41FV883TLzqYti0N_e_3VyR6UGixcg",
  authDomain: "cc8-farmmanagement.firebaseapp.com",
  projectId: "cc8-farmmanagement",
  storageBucket: "cc8-farmmanagement.appspot.com",
  messagingSenderId: "13624068870",
  appId: "1:13624068870:web:595ccc8239726615cbac87",
  measurementId: "G-L2B1Q0K3ND",
}
firebase.initializeApp(firebaseConfig)
// firebase.analytics()
console.log(firebase)
