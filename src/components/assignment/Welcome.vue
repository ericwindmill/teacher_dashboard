<template>
  <div class='Dashboard--Home'>
    <h2> Welcome Back, Teach!</h2>
    <p> {{new Date().toDateString() }} </p>
    <p> There are currently {{assignments.length}} open assignments </p>
    <p> Click here to add a new assignmet </p>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'assignments'
    ])
  }
}
</script>

<style>
  
</style>
