import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false, //drawerを管理する宣言
    addresses: [] //連絡先を保存する配列
  },
  mutations: {
    toggleSideMenu(state) {
      //stateのdrawerの値を反転
      state.drawer = !state.drawer; 
    },
    //連絡先をstateのaddressに追加する
    addAddress (state, address) {
      state.addresses.push(address)
    }
  },
  actions: {
    toggleSideMenu({ commit }) {
      commit("toggleSideMenu"); //mutationsのtoggleSideMenuを呼び出し
    },
    //連絡先追加のmutationsを呼び出す
    addAddress ({ commit }, address) {
      commit('addAddress', address)
    }
  }
  /* modules: {
  } */
})
