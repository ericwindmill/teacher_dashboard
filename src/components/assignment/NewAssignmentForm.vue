<template>
  <form @submit.prevent='handleNewAssignment'>
    <input type='text' placeholder='Title' v-model='newAssignment.title' required/>
    <textarea placeholder='Description' v-model='newAssignment.description'></textarea>
    <input type='date' placeholder="Due Date" v-model='newAssignment.due_at' />
    <label for='lock_after_due'>Lock After Due?</label>
    <input type='checkbox' name='lock_after_due' v-model='newAssignment.lock_after_due' value='true' />
    <button type='submit'>Add Assignment</button>
  </form>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  props: {
    action: {type: Function}
  },
  computed: {
    ...mapGetters([
      'newAssignment'
    ])
  }, 
  methods: {
    ...mapActions([
      'addAssignment'
    ]),
    handleNewAssignment: async function () {
      let assignment = await {
        title: this.newAssignment.title,
        description: this.newAssignment.description,
        created_at: new Date().toUTCString(),
        creator: {
          first_name: 'Nicola',
          id: 73240722,
          last_name: 'Tesla',
        },
        due_at: this.newAssignment.due_at,
        id: Math.round((Math.random() * 10000) * (Math.random() * 10000)),
        lock_after_due: this.newAssignment.lock_after_due
      }
      await this.addAssignment(assignment)

      this.action()
    }
  }
}
</script>

<style>


</style>
