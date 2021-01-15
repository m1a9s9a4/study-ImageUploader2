import firebase from 'firebase/app';
import "firebase/storage";
import config from './.runtimeconfig.json'


const firebaseConfig = {
    apiKey: config.imageuploader.apikey,
    authDomain: config.imageuploader.authdomain,
    projectId: config.imageuploader.projectid,
    storageBucket: config.imageuploader.storagebucket,
    messagingSenderId: config.imageuploader.messagingsenderid,
    appId: config.imageuploader.appid,
    measurementId: config.imageuploader.measurementid
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage,
    firebase as default
}