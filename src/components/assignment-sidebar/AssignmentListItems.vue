<template>
  <router-link 
    active-class='AssignmentListItem--active'  
    :to="{name: 'Assignment', params: {assignmentid: assignment.title.split(' ').join('-')}}" 
  >
    <div class='AssignmentSidebar--ListItem' >
    <dt>{{assignment.title}}</dt>
    <dd>due {{new Date(assignment.due_at).toDateString()}}</dd>
    </div>
  </router-link>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  props: {
    assignment: {
      type: Object
    }
  },
}
</script>

<style lang='scss'>
@import "../../assets/styles/_vars.scss";
  .AssignmentSidebar--ListItem {
    border: 1px solid $ink;
  }
  
</style>
