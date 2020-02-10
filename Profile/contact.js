let firebaseConfig = {
    apiKey: 'AIzaSyDTYb6f-ASy8ND95sP4JpKhDe-fkh3b2n4',
    authDomain: 'localhost',
    projectId: 'ContactForm',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();