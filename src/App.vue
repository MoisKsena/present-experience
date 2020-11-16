<template>
  <div id="app">
    <div class="pages-wrapper">
      <Header/><Social/>
    </div>
    
    <router-view></router-view>
    <footer>
      <Footer />
    </footer>
    
   
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Social from './components/Social.vue'

import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Header,
    Social,
    Footer
  }
}

</script>

<style lang="scss" scoped>
  @import './assets/scss/main';
  @import './assets/scss/fonts';
</style>
