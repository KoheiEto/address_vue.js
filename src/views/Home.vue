<template>
  <v-container>
    <v-layout>
      <v-flex xs12 mt-5>
        <v-btn color="info" @click="login">Googleアカウントでログイン</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/Addresses.vue' */
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["login"]),
  },
  mounted(){
    console.log(this.$vuetify.breakpoint)
  }
};
</script>
