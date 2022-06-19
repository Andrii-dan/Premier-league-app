// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDF3nZ0C02Bc-UZ5H13agwzu2xm87D-tMI',
	authDomain: 'premier-league-app-d1a5b.firebaseapp.com',
	projectId: 'premier-league-app-d1a5b',
	storageBucket: 'premier-league-app-d1a5b.appspot.com',
	messagingSenderId: '711738819988',
	appId: '1:711738819988:web:0207ea1f112eb7fcd4fb81',
	measurementId: 'G-6YK67055D2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();
