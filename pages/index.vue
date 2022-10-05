<template>
  <div>
      
      <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex  class="d-flex pa-3" xs12 sm3 offset-sm v-for="mf in mf_list" :value="mf.id" :key="mf.id">
              <v-card id="card" elevation="4"   @click="$router.push(`/${mf.schemeCode}`)"  align="center">
        <v-card-subtitle class="font-weight-medium black-text">
          Scheme Name : <br/> {{mf.schemeName}} <br/> 
        </v-card-subtitle>
        <v-card-subtitle>
          Scheme Code : <br/> {{mf.schemeCode}}
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
    ...mapGetters(["mf_list"])
  },

  methods: {
    ...mapActions(['get_mf_list']),
  },
  data() {
    return {
      schemecode: []
    }
  },
  created () {
    this.get_mf_list()
  }
}


</script>
<style scoped>
  #card{
    transition: all 0.3s ease;
    border-radius: 15px;
  }
#card:hover{
  transform: scale(1.1);
}
</style>
