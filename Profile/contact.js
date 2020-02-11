console.log("contact.js");  
var firebaseConfig = {
    apiKey: "AIzaSyDjz4UL_TbjWLbJxVb0DMJkXWreb7rGzbQ",
    authDomain: "contactform-data.firebaseapp.com",
    databaseURL: "https://contactform-data.firebaseio.com",
    projectId: "contactform-data",
    storageBucket: "contactform-data.appspot.com",
    messagingSenderId: "211454956778",
    appId: "1:211454956778:web:9a13f88bef4a741435b393"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let save = document.getElementById("save-button");
let reset = document.getElementById("reset-button");
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let detail = document.getElementById("detail");
let gender = " ";

reset.addEventListener('click', function(){
    firstName.value = " ";
    lastName.value = " ";
    gender.value = 1;
    detail.value = " ";
});

save.addEventListener('click', function(){
    // if(document.getElementById('gender') == 1){
    //     gender = "Male";
    // }else{
    //     if(document.getElementById('gender') == 2){
    //         gender = "Female";
    //     }else{
    //         gender = "Others";
    //     }
    // }
    db.collection("user").add({
            FirstName: "ffffffffff",
            LastName: "uuuuuuuuuu",
            //Gender: gender.value(),
        });

});