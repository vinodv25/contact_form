// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBVk69uUHSQPLmj0bCiatFWedLvkZp-fn4",
    authDomain: "contact-form-12461.firebaseapp.com",
    databaseURL: "https://contact-form-12461.firebaseio.com",
    projectId: "contact-form-12461",
    storageBucket: "",
    messagingSenderId: "499371071854"
  };
  firebase.initializeApp(config);

//reference messages collection
var messagesRef = firbase.database().ref();

//Listen for form submit
document.getElementById('contactform').addEventListener('submit',submitform);

//submit form

function submitform(e){
    e.preventDefault();
    
    //get all values
    var name = getInputval('name');
    var name = getInputval('company');
    var name = getInputval('email');
    var name = getInputval('phone');
    var name = getInputval('message');
    
    //save message
    savemessage(name,company,email,phone,message);
    
    
}

// function to get form values
function getInputval(id){
    return document.getElementById(id).value;
}

// save messages to firebase

function savemessage(name,company,email,phone,message){
    var newmessageref = messagesRef.push();
    newmessageref.set({
        name:name,
        company:company,
        email:email,
        phone:phone,
        message:message
    });
    
}