<template>
  <div class='AssignmentDetails'
  >
    <div class='AssignmentDetails--Tabs'
    >
      <span @click="handleShow('assignment')">Assignment</span>
      <span @click="handleShow('submissions')">Student Submission</span>
    </div>

    <section class="AssignmentDetails--Content">
      <assignment-details
        v-show="show === 'assignment'"
        :assignment='assignment'
      ></assignment-details>
      <student-submissions
        v-show="show === 'submissions'"
        :assignment='assignment'
      ></student-submissions>
    </section>
  </div>
</template>

<script>
import AssignmentDetails from './AssignmentDetails'
import StudentSubmissions from './StudentSubmissions'
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  data() {
    return {
      show: 'assignment'
    }
  },
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
    ]),
    handleShow(verb) {
      this.show = verb
      // this.show === 'assignment' ? this.show = 'submissions' : this.show = 'assignment'
    }
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