var config = {
    apiKey: "AIzaSyBoHuRSqFvoYhhgZlm0Hvbr8KCSHSqC7F8",
    authDomain: "reviens2-239ca.firebaseapp.com",
    databaseURL: "https://reviens2-239ca.firebaseio.com",
    projectId: "reviens2-239ca",
    storageBucket: "reviens2-239ca.appspot.com",
    messagingSenderId: "434928585529"
  };
  firebase.initializeApp(config);
  var database=firebase.database();
  var Creds=document.getElementById("Credits");
  var UserID=document.getElementById("userid");
  function writeUserData()
  {   var userRef=firebase.database().ref('users/'+UserID.value);
        userRef.update({'credits':parseInt(Creds.value,10)}); 
        alert("Successful");
  }