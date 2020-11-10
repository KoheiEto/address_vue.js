<template>
  <v-app>
    
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <!-- onでtogggleSideMenuメソッドを呼び出し -->
      <v-toolbar-title>マイアドレス帳</v-toolbar-title>
      <v-spacer></v-spacer>
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
/* SideNav単一ファイルコンポーネントのインポート */
import SideNav from './components/SideNav';
import {  } from "vuex";

export default {
  name: 'App',
  components: {
    SideNav, /* 使用するためにコンポーネントに追加 */
  },

  data: () => ({
    //
  }),
  methods: {
    toggleSideMenu: function() {
      this.$store.commit("toggleSideMenu");
    }
  }
};
</script>
