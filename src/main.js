import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCns4RT7JBWe0tcLmvxubLYe0JJfxnTTzw",
  authDomain: "vue-firebase-ad486.firebaseapp.com",
  projectId: "vue-firebase-ad486",
  storageBucket: "vue-firebase-ad486.appspot.com",
  messagingSenderId: "354269659313",
  appId: "1:354269659313:web:99517d1aeff2a8bcdce290",
};

firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .mount("#app");
