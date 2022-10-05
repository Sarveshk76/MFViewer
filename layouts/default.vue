<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
    <v-spacer></v-spacer>
      <v-toolbar-title v-text="title" class="" />
      <v-spacer />
      
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>Mutual Fund Viewer &copy; {{ new Date().getFullYear() }}</span>
      <span class="spotlight">made with ❤️ by <a style="text-decoration: none; color:;" href="https://github.com/Sarveshk76">@Sarveshk76</a></span>
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
<style>
  .spotlight {
    position:absolute;
    right: 10px;
  }
</style>