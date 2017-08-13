<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import TopNav from './components/navigations/TopNav'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'app',
  components: {
    TopNav
  }
}
</script>

<style lang='scss'>
@import "assets/styles/_vars.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $ink;
  padding: 0 $spacing-unit * 1.5;
}
  
</style>
