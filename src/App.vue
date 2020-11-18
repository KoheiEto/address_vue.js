<template>
  <v-app>
    
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <!-- onでtogggleSideMenuメソッドを呼び出し -->
      <v-toolbar-title>マイアドレス帳</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$store.state.login_user">
        <v-btn text @click="logout">ログアウト</v-btn> <!-- ログアウトボタンを追加 -->
      </v-toolbar-items>
    </v-app-bar>
    
    <sideNav /><!-- sideNavコンポーネントを指定 -->
    <v-content>
      <v-container fluid fill-height allign-start>
        <router-view /><!-- viewのコンポーネントを指定 -->
      </v-container>
    </v-content>
  
  </v-app>
</template>

<script>
import firebase from 'firebase'
/* SideNav単一ファイルコンポーネントのインポート */
import SideNav from './components/SideNav';
import { mapActions } from "vuex";

export default {
  name: 'App',
  components: {
    SideNav, /* 使用するためにコンポーネントに追加 */
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => { 
      if (user) {
        this.setLoginUser(user); //ログインユーザ情報をセット
        this.fetchAddresses()
        if(this.$router.currentRoute.name === "home") {
          this.$router.push({ name: "addresses" }, () => {});
        }
      } else {
        this.deleteLoginUser()  //ログインユーザ情報を削除
        this.$router.push({ name: "home" }, () => {});
      }
    })
  },
  data: () => ({
    //
  }),
  methods: {

    ...mapActions([
      'toggleSideMenu',
      'setLoginUser',
      'logout',
      'deleteLoginUser',
      'fetchAddresses']),
    
    toggleSideMenu: function() {
      this.$store.commit("toggleSideMenu");
    }
    
  }
};
</script>