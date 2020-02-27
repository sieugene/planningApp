import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCEDT5KPNlo2Z-qOu6hoj3nW8ARN0ntSqY",
    authDomain: "sieugene-planning.firebaseapp.com",
    databaseURL: "https://sieugene-planning.firebaseio.com",
    projectId: "sieugene-planning",
    storageBucket: "sieugene-planning.appspot.com",
    messagingSenderId: "679197090771",
    appId: "1:679197090771:web:f892063d70d56d62f8c526",
    measurementId: "G-K7MM95J0QW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
firebase.firestore().settings({
    timestampsInSnapshots: true
})



export default firebase