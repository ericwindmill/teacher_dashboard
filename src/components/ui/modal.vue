<template>
  <transition name='modal' mode='in-out'>
    <div class="modal-mask">
      <div class="modal-container">
        <button type='submit' @click='action' class="modal-default-button">
          <icon name='times'></icon>
        </button>
        <new-assignment-form
          v-show="modalType === 'new assignment'"
          :action='action'
        ></new-assignment-form>
      </div>
    </div>
  </transition>
</template>

<script>
import NewAssignmentForm from '../assignment/NewAssignmentForm'
export default {
  props: {
    action: {type: Function},
    submitButton: {type: String},
    modalType: {type: String}
  },
  components: {
    NewAssignmentForm: NewAssignmentForm
  }

}
</script>

<style>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
}

.modal-container {
    width: 300px;
    margin: 40px auto 0;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
}

</style>
