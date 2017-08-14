<template>
  <router-link 
    active-class='AssignmentListItem--active'
    tag='div'
    :to="{name: 'Assignment', params: {assignmentid: assignment.title.split(' ').join('-'), id: assignment.id}}" 
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
    color: ink;
    border: 2px solid $grey-dark;
    padding: 10px;
    cursor: pointer;
    display:flex;
    flex-direction: column;

    &:hover {
      background: $grey-light;
    }

    
  }


  .AssignmentListItem--active {
    .AssignmentSidebar--ListItem {
      outline: 2px solid $teal;
      outline-offset: -2px;
    }
  }
  
</style>
