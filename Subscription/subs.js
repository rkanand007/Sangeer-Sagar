const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCB1xQiWBwh5S-B9TKRdmcLvG-j5T9EaLg",
  authDomain: "sangeet-sagar.firebaseapp.com",
  projectId: "sangeet-sagar",
  storageBucket: "sangeet-sagar.appspot.com",
  messagingSenderId: "613511719960",
  appId: "1:613511719960:web:beb6a696d2033d2b46e76d",
  measurementId: "G-194TGSNLW9",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

//-----------Signup Function-----------------

const Signup = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessageElement = document.getElementById("error-message");
  console.log(email, password);

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed UP
      document.write("You are Signed Up");
      console.log(result);
      // ...
    })
    .catch((error) => {
      // Handle sign-in errors
      console.error("Sign-in error:", error.code, error.message);
      // Display error message to the user
      errorMessageElement.textContent =
        "Invalid email or password. Please try again.";
      errorMessageElement.style.display = "block"; // Show error messag
      // ..
    });
};

//-----------SignIn Function-----------------

const SignIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessageElement = document.getElementById("error-message");
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      console.log("Signed in successfully:", result);
      window.location.href = "Subs-Platform/index.html";
      // ...
    })
    .catch((error) => {
      // Handle sign-in errors
      console.error("Sign-in error:", error.code, error.message);
      // Display error message to the user
      errorMessageElement.textContent =
        "Invalid email or password. Please try again.";
      errorMessageElement.style.display = "block"; // Show error message
    });
};
