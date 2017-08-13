<template>
  <div class='StudentSubmission'
    @click='changeShow(submission.id)'
  >
    <dt>
      <img :src="submission.creator.avatars.small" />
      <h3>{{submission.creator.first_name}} {{submission.creator.last_name}}</h3>
      <sub>Username: {{submission.creator.username}}</sub>
      <sub>ID: {{submission.creator.id}}</sub>
      <icon v-show="submission.status !== 'not_graded'" class='QuestionComplete' name='check-circle'></icon>
      <icon v-show="submission.status === 'not_graded'" class='QuestionIncomplete' name='circle'></icon>
    </dt>
    <dd v-show='submission.id === show'>
      {{submission.content}}
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
      show: false
    }
  },
  methods: {
    changeShow(id) {
      if (this.show === id) {
        this.show = false
      } else {
        this.show = id
      }
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
