<template>
  <div class='Dashboard--Home'>
    
    <h2> Welcome Back, Teach!</h2>
    <p> {{new Date().toDateString() }} </p>
    <p> There are currently {{assignments.length}} open assignments </p>
    <p> Click here to add a new assignmet </p>
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
  components: {
    modal
  }
}
</script>

<style lang='scss'>

  
// .modal {
//   transition: all .3s ease;
// }

// .modal-enter-active {
//   opacity: .5;
// }

// .modal-leave-active {
//   opacity: 0;
// }

// .modal-enter .modal-container,
// .modal-leave-active .modal-container {
//     transition: all .3s ease;
//   -webkit-transform: scale(1.1);
//   transform: scale(1.1);
// }
</style>
