import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    this.db = app.firestore();

    this.auth.useDeviceLanguage();
    this.googleProvider = new app.auth.GoogleAuthProvider();
  }

  createUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();

  // how does it respond if there's no email matching in the system
  passwordReset = (email) => this.auth.sendPasswordResetEmail(email);

  passwordUpdate = (password) => this.auth.currentUser.updatePassword(password);

  /* SIGN IN WITH AUTH PROVIDERS */
  signInWithPopup = (authProvider) => {
    let provider = "";

    switch (authProvider) {
      case "google":
        provider = this.googleProvider;
        break;

      default:
        provider = null;
        break;
    }

    if (provider) {
      return this.auth.signInWithPopup(provider);
    }
  };

  createBurger = (ingredients, name, price) =>
    this.db.collection("menu").doc(name).set({
      ingredients,
      name,
      price,
    });
}

export default Firebase;
