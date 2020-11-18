import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'

import firebase from 'firebase'
Vue.config.productionTip = false


Vue.use(axios)

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDuk67LFMviwXXQK6RnN_WkLUlh85Xvl_4",
    authDomain: "my-vue-project-d0c43.firebaseapp.com",
    databaseURL: "https://my-vue-project-d0c43.firebaseio.com",
    projectId: "my-vue-project-d0c43",
    storageBucket: "my-vue-project-d0c43.appspot.com",
    messagingSenderId: "562287494656",
    appId: "1:562287494656:web:25735d37b7a5883f5abae5",
    measurementId: "G-BFX8KHLE1J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
