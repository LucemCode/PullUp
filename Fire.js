import firebase from 'firebase';

const conf = {
    apiKey: "AIzaSyBDuGgxEiMCxm4aNFJwlws-_aEWT6-9C88",
    authDomain: "pullup-eu.firebaseapp.com",
    databaseURL: "https://pullup-eu.firebaseio.com",
    projectId: "pullup-eu",
    storageBucket: "pullup-eu.appspot.com",
    messagingSenderId: "601574363047"
};

class Fire {

  static init = () => {
    firebase.initializeApp(conf);
    Fire.db = firebase.database();
    Fire.auth = firebase.auth();
    Fire.user = firebase.auth().currentUser;
  }

}

export default Fire;