<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>

      <v-flex xs 12>
        <v-card>
          <v-card-text>
            <div slot="header" class="text-center">
              <span>連絡先一覧</span>
            </div>
            <v-flex xs 12 mt-3 justify-center>
              <v-data-table :headers="headers" :items="addresses">
                <template v-slot:[`item.action`]="{ item }">
                <!-- <template v-slot:item.action="{ item }"> -->
                  <router-link 
                    :to="{ 
                      name: 'address_edit', 
                      params: {address_id: item.id},
                      }">
                    <v-icon small class="mr-2">mdi-pencil</v-icon>
                  </router-link>
                  <v-icon small class="mr-2" @click="deleteConfirm(item.id)">mdi-delete</v-icon>
                </template>               
              </v-data-table>
            </v-flex>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 mt-5 mr-5 text-right>
        <router-link :to="{ name: 'address_edit' }">
          <v-btn color="info">連絡先追加</v-btn>
        </router-link>
      </v-flex>
    
    </v-layout>
  </v-container>
</template>


<script>
import { mapActions } from 'vuex';
export default {
  async created () {
    //await this.showAddresses();
    this.addresses = this.$store.state.addresses;
  },
  data() {
    return {
      headers: [
        { text: "名前", value: "name" },
        { text: "電話番号", value: "tel" },
        { text: "メールアドレス", value: "email" },
        { text: "住所", value: "address" },
        { text: "", value: "action" },
      ],
      addresses: [],
    };
  },

 /*  async created() {
    await this.showAddresses();
    this.addresses = this.$store.state.addresses;
  }, */

  methods: {
    deleteConfirm(id) {
      if(confirm("削除していいですか?")) {
        this.deleteAddress({ id });
      }
    },
    ...mapActions(["showAddresses" ,"deleteAddress"]),
  },
};
</script>

<style scoped lang="scss">
</style>