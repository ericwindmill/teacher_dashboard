<template>
<div>
  <h1>Teacher's Dashboard</h1>
  <button @click='requestAssignments'> Hit API </button>
</div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'requestAssignments'
    ])
  }
}
</script>

<style>
  
</style>
