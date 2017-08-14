<template>
  <form class='NewAssignment' @submit.prevent='handleNewAssignment'>
    <h3>New Assignment</h3>
    <input type='text' placeholder='Title' v-model='newAssignment.title' required/>
    <textarea placeholder='Description' class='NewAssignment--Textarea' v-model='newAssignment.description'></textarea>
    <div id='DueDetails'>
      <label for='due_at'>
        Due: 
        <input type='date' id='due_at' placeholder="Due Date" v-model='newAssignment.due_at' />
      </label>
      <label for='lock_after_due'>
        <input type='checkbox' id='lock_after_due' name='lock_after_due' v-model='newAssignment.lock_after_due' value='true' />
        Lock After Due?
      </label>
    </div>
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

<style lang='scss'>
@import "../../assets/styles/_vars.scss";
.NewAssignment {
  > * {
    width: 80%;
    margin: 5px 0;
    display: block;
    margin: 7.5px auto;
  }

  > #DueDetails {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

}

.NewAssignment--Textarea {
  width: 80%;
  height: 300px;
}
</style>
