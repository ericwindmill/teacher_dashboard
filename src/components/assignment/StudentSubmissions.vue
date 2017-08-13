<template>
  <div class='StudentSubmissions'>
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
  methods: {
    ...mapActions([
      'requestSubmissions'
    ])
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

<style>
  
</style>
