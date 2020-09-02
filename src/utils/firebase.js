import firebase from 'firebase/app';

const firebaseConfig = {
	apiKey: "AIzaSyDJlKcL5HiGQe7zJQoVzg3PvAtLDh7V4ac",
	authDomain: "chat-6764c.firebaseapp.com",
	databaseURL: "https://chat-6764c.firebaseio.com",
	projectId: "chat-6764c",
	storageBucket: "chat-6764c.appspot.com",
	messagingSenderId: "1040858870143",
	appId: "1:1040858870143:web:c20a94b6615323cc71aa4a"
};
export default firebase.initializeApp(firebaseConfig);