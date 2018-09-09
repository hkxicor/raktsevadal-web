var firebase = require('firebase/app');
require('firebase/database');

const config = {
    apiKey: "AIzaSyAdwsI45ifN5WcqTzlNVE-BDI786CCPX-M",
    authDomain: "rakt-sevadal.firebaseapp.com",
    databaseURL: "https://rakt-sevadal.firebaseio.com",
    projectId: "rakt-sevadal",
    storageBucket: "rakt-sevadal.appspot.com",
    messagingSenderId: "309376145491"
};


firebase.initializeApp(config);

export default firebase;