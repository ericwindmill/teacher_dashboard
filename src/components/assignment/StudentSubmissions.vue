<template>
  <div class='StudentSubmissions'>
    <div
     v-show='submissions.length === 0'
    >
      <p class='StudentSubmissions--none'>No submissions yet.</p>
    </div>
    <submission-detail
      v-for="(submission, index) in submissions"
      :submission='submission'
      :key='index'
    >
    </submission-detail>
    
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import SubmissionDetail from './SubmissionDetail'
export default {
  props: {
    assignment: {
      type: Object
    }
  },
  computed: {
    ...mapGetters([
      'submissions'
    ])
  },
  components: {
    SubmissionDetail
  }
}
</script>

<style lang='scss'>
@import "../../assets/styles/_vars.scss";

.StudentSubmissions {
  margin-top: $spacing-unit;
}

.StudentSubmissions--none {
  color: $red-dark;
}
  
</style>
