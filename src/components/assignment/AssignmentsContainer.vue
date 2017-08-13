<template>
  <div class='AssignmentContainer'>
    <assignment
      v-for='(assignment, index) in assignments'
      v-show="routeTitle === assignment.title.split(' ').join('-')"  
      :routeTitle='routeTitle'
      :routeId='routeId'
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
      routeTitle: '',
      routeId: 0
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
      this.routeTitle = to.params.assignmentid
      this.routeId = to.params.id
      console.log(to)
    }
  }
}
</script>

<style>
  
</style>
