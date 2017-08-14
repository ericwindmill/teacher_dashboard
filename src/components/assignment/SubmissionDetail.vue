<template>
  <div class='StudentSubmission'
  >
    <dt @click='changeShow(submission.id)'>
      <img :src="submission.creator.avatars.small" />
      <h3>{{submission.creator.first_name}} {{submission.creator.last_name}}</h3>
      <sub>Username: {{submission.creator.username}}</sub>
      <sub>ID: {{submission.creator.id}}</sub>
      <h4 v-show="submission.status !== 'not_graded'">{{submission.status}}</h4>
      <icon v-show="submission.status !== 'not_graded'" class='QuestionComplete' name='check-circle'></icon>
      <icon v-show="submission.status === 'not_graded'" class='QuestionIncomplete' name='circle'></icon>
      <icon v-show="submission.id !== show" class='open-icon' name="chevron-down"></icon> 
      <icon v-show="submission.id === show" class='close-icon' name="times"></icon> 
    </dt>
    <dd v-show='submission.id === show'>
      <p>{{submission.content}}</p>
      <form 
        @submit.prevent='handleGrade'
        class='StudentSubmission--GradeForm'>
        <input id='grade' type='text' v-model='grade' placeholder='Grade' />
        <button type='submit' id='submitButton'>Add Grade</button>
      </form>
    </dd>
  </div>
</template>

<script>
export default {
  props: {
    submission: {
      type: Object
    },
    graded: {
      type: String
    }
  },
  data() {
    return {
      show: false,
      grade: ''
    }
  },
  methods: {
    changeShow(id) {
      if (this.show === id) {
        this.show = false
      } else {
        this.show = id
      }
    },
    handleGrade(e){
      this.submission.status = this.grade.toUpperCase().trim()
    }
  }
}
</script>

<style lang='scss'>
@import "../../assets/styles/_vars.scss";
.StudentSubmission {
  border: 1px solid $grey-light;
}
  
</style>
