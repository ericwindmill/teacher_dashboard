<template>
  <div class='AssignmentContainer'>
    <assignment
      v-for='(assignment, index) in assignments'
      v-show="routeid === assignment.id "  
      :routeid='routeid'
      :key='index'
      :assignment='assignment'
    ></assignment>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import Assignment from './Assignment'
export default {
  data() {
    return {
      routeid: ''
    }
  },
  components: {
    Assignment
  },
  computed: {
    ...mapGetters([
      'assignments'
    ])
  },
  watch: {
    '$route' (to, from) {
      this.routeid = to.params.assignmentid
    }
  }
}
</script>

<style>
  
</style>
