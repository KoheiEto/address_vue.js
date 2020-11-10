<template>

    <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
  
        <v-list-item v-for="(item, index) in items" :key="index" :to="item.url">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          
        </v-list-item>

    </v-navigation-drawer>

  



 

</template>
<script>
export default {
  /* name: 'App', */
  data() {
    return {
      drawer: false,
      items: [{ title: "ホーム", icon: "mdi-home", url: "/home" },
              { title: "連絡先一覧", icon: "mdi-menu", url: "/addresses" }
              ]
    };
  }
};
</script>