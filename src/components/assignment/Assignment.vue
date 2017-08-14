<template>
  <div class='AssignmentDetails'
  >
    <div class='AssignmentDetails--Tabs'
    >
      <span 
        :class="{active: show === 'assignment'}"
        @click="handleShow('assignment')">Assignment
      </span>
      <span  
        :class="{active: show === 'submissions'}"
        @click="handleShow('submissions')">Student Submission
      </span>
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
      show: 'assignment',
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
  
    }
  },
  watch: {
    'routeId' (to, from) {
      this.requestSubmissions(to)
    }
  }
}

</script>

<style lang='scss'>
@import "../../assets/styles/_vars.scss";

.AssignmentDetails {
  position: relative;
  .AssignmentDetails--Tabs {
    display: flex;
    flex-direction: row wrap;
    justify-content: space-around;
    position: sticky;
    top: 0px;
    background-color: white;
    padding:  20px 0;

    & > span {
      flex: 1 1;
      padding: 10px;
      text-align: center;
      border: 1px solid $grey;
      cursor: pointer;

      &:hover {
        background: $grey-light;
      }

      &.active {
        outline: 2px solid $teal;
        outline-offset: -2px;
      }
    }
  }
}
  
</style>