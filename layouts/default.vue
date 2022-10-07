<template>
  <v-app dark >
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
    <v-spacer></v-spacer>
      <v-toolbar-title class="font-weight-medium teal--text" v-text="title" />
      <v-spacer />
      
    </v-app-bar>
    <v-main>
      <v-container >
        <Nuxt />
      </v-container>
    </v-main>
    
    <v-footer
      :absolute="!fixed"
      app
      height="80"
      style="display: flex; justify-content: space-between; align-items: center;"
    >
      <span class=" font-weight-medium teal--text ">Mutual Fund Viewer &copy; {{ new Date().getFullYear() }}</span>
      <span class=" ">Powered by <a class="font-weight-medium teal--text" style="text-decoration: none;" href="https://www.mfapi.in/" target="_blank">MF API</a></span>
      <span class=" ">made with ❤️ by <a class="font-weight-medium teal--text" style="text-decoration: none;" href="https://github.com/Sarveshk76">@Sarveshk76</a></span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Mutual Fund viewer'
    }
  },
  
}
</script>
<style scoped>
  .spotlight {
    position:relative;
    right: -10px;
    display: flex;
  justify-content: space-between;
  }
  .copywrite {
    position:relative;
    left: 10px;
  }
</style>