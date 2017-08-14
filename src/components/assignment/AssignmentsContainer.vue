<template>
  <div class='AssignmentContainer'>
    <welcome
      v-show='$route.fullPath === "/"'
    ></welcome>
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
import Welcome from './Welcome'
export default {
  data() {
    return {
      routeTitle: '',
      routeId: 0
    }
  },
  components: {
    Assignment,
    Welcome
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
    }
  },
  //Remount component to same assignment on page refresh
  mounted() {
    this.routeTitle = this.$route.params.assignmentid
  }
}
</script>

<style lang='scss'>
@import "../../assets/styles/_vars.scss";
.AssignmentContainer {
  @include component;
  padding: 0 25px 25px 25px;
}
  
</style>
