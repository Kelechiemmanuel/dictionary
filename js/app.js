

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC3J_hXvJrDvxqGqWUox0rISF8e5EkNo7M",
    authDomain: "authorization-656e2.firebaseapp.com",
    projectId: "authorization-656e2",
    storageBucket: "authorization-656e2.appspot.com",
    messagingSenderId: "737137239615",
    appId: "1:737137239615:web:e2363ae09d957676eafa8a"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

//   signup function
let signUpButton = document.getElementById("signup");
signUpButton.addEventListener("click", (e) =>{
    // prevent default form submission behaviour
    e.preventDefault();
    console.log("clicked");

    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");

    auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) =>{
        location.reload();
        alert("user signed up successful");

        // signed in

        var user = userCredential.user;
        console.log("user, user.email");
    })

    .catch((error) =>{
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error code", errorCode);
        console.log("error message", errorMessage);
        alert(errorMessage);
    })
});

// SIGNIN FUNCTION
let signInButton = document.getElementById("signin");
signInButton.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("sign in clicked");

    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");

    auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) =>{
        var user = userCredential.user;
        console.log("user", user.email);
        window.location = "home.html";
    })

    .catch((error) =>{
        var errorCode = error.code;
        var errorMessage = error.message
        alert(errorMessage);
    })
});