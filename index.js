import firebase from 'firebase';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
var config = {
    apiKey: "xxx",
    authDomain: "xxx",
    databaseURL: "xxx",
    projectId: "xxx",
    storageBucket: "xxx",
    messagingSenderId: "xxx"
};
console.disableYellowBox = true;
firebase.initializeApp(config);

AppRegistry.registerComponent(appName, () => App);
