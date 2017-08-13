<template>
  <div class='AssignmentDetails'
  >
    <assignment-details
      :assignment='assignment'
    ></assignment-details>
    <student-submissions
      :assignment='assignment'
    ></student-submissions>
  </div>
</template>

<script>
import AssignmentDetails from './AssignmentDetails'
import StudentSubmissions from './StudentSubmissions'
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  props: {
    assignment: {
      type: Object
    }
  },
  components: {
    AssignmentDetails,
    StudentSubmissions
  },
  methods: {
    ...mapActions([
      'requestSubmissions'
    ])
  },
  watch: {
    'routeid' (to, from) {
      // console.log(to)
      // console.log(this.routeid === this.assignment.id)
    }
  },
  created () {
    this.requestSubmissions(this.assignment.id)
  }
}

</script>

<style>
  
</style>