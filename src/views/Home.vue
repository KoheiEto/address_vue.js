<template>
<v-container>

  <v-row>

    <v-col cols="">
    <SaleGraph />
    </v-col>

    <v-col cols="">
    <SaleGraph />
    </v-col>

    <v-col cols="">
    <SaleGraph />
    </v-col>

    <v-col cols="">
    <SaleGraph />
    </v-col>

    <v-col cols="">
    <SaleGraph />
    </v-col>

    <v-col cols="">
    <SaleGraph />
    </v-col>

    <v-col cols="">
    <SaleGraph />
    </v-col>

    <v-col cols="">
    <SaleGraph />
    </v-col>

    <v-col cols="">
    <SaleGraph />
    </v-col>

    <v-col cols="">
    <SaleGraph />
    </v-col>

    <v-col cols="">
    <SaleGraph />
    </v-col>

    <v-col cols="">
    <SaleGraph />
    </v-col>

    

  </v-row>

</v-container> 
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/Addresses.vue' */
import SaleGraph from '../components/SaleGraph'

export default {
  name: 'Home',
  components: {
    SaleGraph
  },
  mounted(){
    console.log(this.$vuetify.breakpoint)
  }
};
</script>
