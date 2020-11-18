<template>
  <v-contanier text-xs-center>
    <v-col row wrap jutify-center>
      
      <v-row xs12 class="text-center">
        <h1>連絡先編集</h1>
      </v-row>

      <v-row xs12 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
              <v-text-field v-model="address.name" label="名前"></v-text-field>
              <v-text-field v-model="address.tel" label="電話番号"></v-text-field>
              <v-text-field v-model="address.email" label="メールアドレス"></v-text-field>
              <v-text-field v-model="address.address" label="住所"></v-text-field>
              <div class="text-center">
                <v-btn @click="$router.push({ name:'addresses' })">キャンセル</v-btn>
                <v-btn color="info" class="ml-2" @click="submit">保存</v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-row> 
    </v-col>
  </v-contanier>
</template>

<script>
import { mapActions } from 'vuex';

/* export default {
  created() {
    const address = this.$store.getters.getAddressById(
      this.$route.params.address_id
    );
    if (address) {
      this.address = address;
    }
  },
  data() {
    return {
      address: {}
    }
  },
  methods: {
    async submit() {
      if (this.$route.params.address_id) {
        this.updateAddress({
          id: this.$route.params.address_id,
          address: this.address,
        });
      } else {
        await this.addAddress(this.address);
      }
      this.$router.push({ name: "addresses" });
      this.address = {};
    },
    ...mapActions(["addAddress", "updateAddress"])
  },
} */

export default {
  created () {
    if (!this.$route.params.address_id) return
    const address = this.$store.getters.getAddressById(this.$route.params.address_id)
    if (address) {
      this.address = address
    } else {
      this.$router.push({ name: 'addresses' })
    }
  },
  data () {
    return {
      address: {}
    }
  },
  methods: {
    submit () {
      if (this.$route.params.address_id) {
        this.updateAddress({ id: this.$route.params.address_id, address: this.address })
      } else {
        this.addAddress(this.address)
      }
      this.$router.push({ name: 'addresses' })
      this.address = {}
    },
    ...mapActions(['addAddress', 'updateAddress'])
  }
}
</script>