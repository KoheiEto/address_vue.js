import Vue from 'vue'
import Vuex from 'vuex'

import firebase from 'firebase'


Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    login_user: null, //ユーザ情報を保持するため
    drawer: false, //drawerを管理する宣言
    addresses: [] //連絡先を保存する配列
  },
  mutations: {
    setLoginUser (state, user) {
      state.login_user = user  // ログインユーザ情報をstateのlogin_userにセット
    },
    deleteLoginUser (state) {
      state.login_user = null  //ログインユーザ情報(stateのlogin_user)を空にする
    },
    showAddresses(state, payload) {
      state.addresses = payload;
      console.log("mutation =" + this.state.addresses);
    },
    toggleSideMenu(state) {
      //stateのdrawerの値を反転
      state.drawer = !state.drawer
    },
    //連絡先をstateのaddressに追加する
    addAddress (state, {id, address}) {
      address.id = id;
      state.addresses.push(address);
      
      
    },
    deleteAddress (state, {id}) {
      const index = state.addresses.findIndex(address => address.id === id)
      state.addresses.splice(index,1)
    }
  },
  actions: {
    setLoginUser ({ commit }, user) {
      commit('setLoginUser', user)  //mutationのログインユーザを呼び出し
    },
    login () {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(google_auth_provider);  //ログイン画面表示
    },
    logout () {
      firebase.auth().signOut() //ログアウト処理
    },
    deleteLoginUser ({ commit }) {
      commit('deleteLoginUser')  //mutationのログインユーザ情報削除の呼び出し
    },
    toggleSideMenu({ commit }) {
      commit("toggleSideMenu"); //mutationsのtoggleSideMenuを呼び出し
    },
    //Firestoreからデータの取得
    fetchAddresses ({ getters, commit }) {
      firebase
        .firestore()
        .collection(`users/${getters.uid}/addresses`)
        
        .get()
        .then(snapshot =>  {
          
          snapshot.forEach(doc => 
             commit('addAddress', { id: doc.id, address: doc.data() }))
        })
   },
   //連絡先追加のmutationsを呼び出す(firestoreデータ保存(登録))
   addAddress({ getters, commit }, address) {
    console.log('ok');
     if (getters.uid) {
       firebase
        .firestore()
        .collection(`users/${getters.uid}/addresses`)
        .add(address)
        .then((doc) => {
          commit("addAddress", {id: doc.id, address });
        });
     }
   },
   //更新
   updateAddress({getters, commit}, {id, address}) {
    if(getters.uid) {
      firebase
        .firestore()
        .collection(`users/${getters.uid}/addresses`)
        .doc(id)
        .update(address)
        .then(() => {
          commit("updateAddress", {id, address});
        });
    }
   },
   //削除
   deleteAddress ({getters,commit}, {id}) {
     if(getters.uid) {
       firebase
       .firestore()
       .collection(`users/${getters.uid}/addresses`)
       .doc(id)
       .delete()
       .then(() => {
         commit('deleteAddress', {id})
       })
     }
   }
   //axiosで連絡先一覧表示
   /* showAddresses ({getters,commit}) {
   } */
  },
  getters: {
    userName: state => state.login_user ? state.login_user.displayName:'',
    photoURL: state => state.login_user ? state.login_user.photoURL:'',
    uid: (state) => (state.login_user ? state.login_user.uid : null),
    getAddressById: (state) => (id) =>
      state.addAddresses.find((address) => address.id === id),
  },
});
