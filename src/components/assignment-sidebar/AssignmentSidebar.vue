<template>
  <div class='AssignmentSidebar--Container'>
    <h3>Assignments</h3>
    <dl class='AssignmentSidebar--List'>
        <assignment-list-items
          v-for='(assignment, index) in assignments'
          :key='index'
          :assignment='assignment' 
        ></assignment-list-items>
      </router-link>
    </dl>
    <modal 
        v-show="showModal"
        :action='modalAction'
        :submitButton='modalSubmit'
        :modalType='modalType'
        @close="showModal=false"
    ></modal>
    <button 
      id="show-modal" 
      @click="showModal=true"
    >
      New Assignment
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import AssignmentListItems from './AssignmentListItems'
import modal from '../ui/modal'
export default {
  data(){
    return {
      modalAction: () => {
         this.showModal = !this.showModal
      },
      showModal: false,
      modalSubmit: 'Add Assignment',
      modalType: 'new assignment'
    }
  },
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
    AssignmentListItems,
    modal
  }
}
</script>

<style lang='scss'>
@import "../../assets/styles/_vars.scss";
  .AssignmentSidebar--Container {
     @include component
  }
</style>
