<template>
<div class='Home--Container'>
  <assignment-sidebar class='Home--Nav'></assignment-sidebar>
  <assignments-container class='Home--Content'></assignments-container>
</div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import AssignmentSidebar from './assignment-sidebar/AssignmentSidebar'
import AssignmentsContainer from './assignment/AssignmentsContainer'
export default {
  methods: {
    ...mapActions([
      'requestAssignments'
    ])
  },
  components: {
    AssignmentSidebar,
    AssignmentsContainer
  }
}
</script>

<style lang='scss'>
@import '../assets/styles/_vars.scss';

.Home--Container {
  display: flex;
  justify-content: space-between;
}

.Home--Nav {
  max-width: 250px;
  flex: 1 2;
  height: max-content;
}

.Home--Content {
  flex: 1 1;
  max-width: 75%;
  max-height: 75vh;
  overflow-y: scroll;
  margin-left: $spacing-unit;
}
  
</style>
