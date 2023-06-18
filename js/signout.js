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

  auth.onAuthStateChanged(function (user){
    if (user){
        var email = user.email;
        var user = document.getElementById("user");
        var text = document.createTextNode(email);
        user.appendChild(text);
        console.log(user);

        // is signed in
    } 
    else {
        alert("user not authenticated, kindly login or signup");
        window.location = "index.html";
    }
  });

//   logout function

let signOutButton = document.getElementById("signout");
signOutButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("logout clicked");
    auth.signOut();
    alert("signed out");
    window.location = "index.html";
})