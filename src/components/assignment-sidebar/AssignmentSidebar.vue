<template>
  <div class='AssignmentSidebar--Container'>
    <h3>Assignments </h3>
    <dl>
        <assignment-list-items
          v-for='(assignment, index) in assignments'
          :key='index'
          :assignment='assignment' 
        ></assignment-list-items>
      </router-link>
    </dl>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import AssignmentListItems from './AssignmentListItems'
export default {
  computed: {
    ...mapGetters([
      'assignments'
    ])
  },
  methods: {
    ...mapActions([
      'requestAssignments'
    ])
  },
  created () {
    this.requestAssignments()
  },
  components: {
    AssignmentListItems
  }
}
</script>

<style>
  
</style>
