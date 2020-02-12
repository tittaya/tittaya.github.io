console.log("contact.js");

var firebaseConfig = {
    apiKey: "AIzaSyDjz4UL_TbjWLbJxVb0DMJkXWreb7rGzbQ",
    authDomain: 'localhost',
    databaseURL: "https://contactform-data.firebaseio.com",
    projectId: "contactform-data",
    storageBucket: "contactform-data.appspot.com",
    messagingSenderId: "211454956778",
    appId: "1:211454956778:web:9a13f88bef4a741435b393"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const data = firebase.firestore();
const contactList = document.getElementById("contact-list");

let docID = '';


//function for render contact list
function renderContact(doc){
    //let li = document.createElement('li');
    let table = $('tbody')[0];
    let row = table.insertRow(-1);
    let firstCell = row.insertCell(0);
    let secoundCell = row.insertCell(1);
    let thirdCell = row.insertCell(2);
    let fourthCell = row.insertCell(3);
    let fifthCell = row.insertCell(4);

    firstCell.textContent = doc.data().FirstName;
    secoundCell.textContent = doc.data().LastName;
    thirdCell.textContent = doc.data().Gender;

    let str = doc.data().Email;
    let emailSensored = '';
    let i = 0;
    i = str.indexOf('@');
    let endIndex = i;
    let startIndex = i+1
    emailSensored = str.slice(0,1) + str.slice(1, endIndex).replace(/./g, 'x') +'@'+ str.slice(startIndex).replace(/./g, 'x');
    fourthCell.textContent = emailSensored;

    //let cross = document.createElement('div');
    fifthCell.textContent = 'X';
    fifthCell.setAttribute('type','button');
    fifthCell.addEventListener('click', (e)=>{
        e.stopPropagation();
        data.collection('users').doc(docID).delete();
    })
}

//render contact list
data.collection("users").get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>{
        //console.log(doc.data())
        
        renderContact(doc);
    });
});

const form = document.getElementById("contact-form");
let reset = document.getElementById("reset-button");

//save data to firebase
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if((form.firstName.value != '') && (form.lastName.value != '') && (form.email.value != '') 
        && (form.gender.value != '') && (form.detail.value != '')){
            data.collection("users").add({
                FirstName: form.firstName.value,
                LastName:  form.lastName.value,
                Email: form.email.value,
                Gender: form.gender.value,
                Detail: form.detail.value
            })
            .then(function(docRef){
                console.log("Document written with ID: ", docRef.id);
                docID = docRef.id
            })
            //console.log(sensorEmail(form.email.value));
            form.firstName.value = '';
            form.lastName.value = '';
            form.email.value = '';
            form.gender.value = 'Male';
            form.detail.value  = '';
            
    }else{
       if((form.firstName.value === '') && (form.lastName.value != '') && (form.email.value != '') 
            && (form.gender.value != '') && (form.detail.value != '')){
                alert('Please enter your first name.');
            }else{
                if((form.firstName.value != '') && (form.lastName.value === '') && (form.email.value != '') 
                    && (form.gender.value != '') && (form.detail.value != '')){
                        alert('Please enter your last name.');
                    }else{
                        if((form.firstName.value != '') && (form.lastName.value != '') && (form.email.value === '') 
                            && (form.gender.value != '') && (form.detail.value != '')){
                                alert('Please enter your E-mail.');
                            }else{
                                if((form.firstName.value != '') && (form.lastName.value != '') && (form.email.value != '') 
                                    && (form.gender.value === '') && (form.detail.value != '')){
                                        alert('Please select your gender');
                                    }else{
                                        if((form.firstName.value != '') && (form.lastName.value != '') && (form.email.value != '') 
                                            && (form.gender.value != '') && (form.detail.value === '')){
                                                alert('Please enter detail.');
                                            }else{
                                                alert('Please fill in every section of the form.');
                                            }
                                    }
                            }
                    }
            }
    }
    
})

// function sensorEmail(str){
//     let i = 0;
//     i = str.indexOf('@');
//     let endIndex = i;
//     return  str.slice(0,1) + str.slice(1, endIndex).replace(/./g, 'x') + str.slice(endIndex);
// }

//delete data
function deleteData(doc){

}

//reset
reset.addEventListener('click', function(){
    form.firstName.value = '';
    form.lastName.value = '';
    form.email.value = '';
    form.gender.value = 'Male';
    form.detail.value  = '';
});



