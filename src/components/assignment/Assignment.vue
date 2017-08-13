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
    },
    routeId: {
      type: Number
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
    'routeId' (to, from) {
      this.requestSubmissions(to)
    }
  }
}

</script>

<style>
  
</style>