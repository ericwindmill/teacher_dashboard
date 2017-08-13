<template>
  <div class='StudentSubmissions'>
    <p> Student Submissions </p>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  props: {
    assignment: {
      type: Object
    }
  },
  methods: {
    ...mapActions([
      'requestSubmissions'
    ])
  }
}
</script>

<style>
  
</style>
