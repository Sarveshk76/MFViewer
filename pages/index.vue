<template>
  <div>

    <v-container fluid grid-list-sm>
      <v-card class="searchBar" justify="center">
        <v-list-item-content>
          <v-text-field class="centered-input " v-model="searchTerm" placeholder="Search" @change="searchFunds">
          </v-text-field>
          {{this.$store.state.args}}
          <v-icon color="#009B81">mdi-magnify</v-icon>
        </v-list-item-content>
      </v-card>
      <v-layout row wrap>

        <v-flex class="d-flex pa-3" xs12 sm3 offset-sm v-for="mf in mf_list" :value="mf.id" :key="mf.id">

          <v-card id="card" elevation="4" @click="$router.push(`/${mf.schemeCode}`)" align="center">
            <v-icon large
      color="teal lighten-2" id="icon">mdi-finance</v-icon>
            <v-card-subtitle class="font-weight-medium teal--text ">
              <br /> {{mf.schemeName}} <br />
            </v-card-subtitle>
            <v-card-subtitle class="font-weight-medium black--text">
              <br /> {{mf.schemeCode}}
            </v-card-subtitle>
            <v-spacer />
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>



  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters(["mf_list"]),
  },

  methods: {
    ...mapActions(['get_mf_list']),
    searchFunds(e) {
      console.log('searching: ' + this.searchTerm)
      this.mf_list = this.get_mf_list(this.searchTerm)
    }
  },
  data() {
    return {
      schemecode: [],
      searchTerm: '',
    }
  },
  created() {
    this.get_mf_list()
  }
}


</script>
<style scoped>
  
#card {
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  border-radius: 15px;
}

#card:hover {
  transform: scale(1.1);
}

.searchBar {
  width: 100%;
  margin: auto;
  margin-bottom: 20px;
  border-radius: 15px;
}
.v-text-field >>> .v-input__slot::before  { border-color:#009B81 !important; }
.centered-input>>>input {
  text-align: center
}
</style>
