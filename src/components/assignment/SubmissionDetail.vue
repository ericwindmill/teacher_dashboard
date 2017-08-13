<template>
  <div class='StudentSubmission'>
    <dt>
      <img :src="submission.creator.avatars.small" />
      <h3>{{submission.creator.first_name}} {{submission.creator.last_name}}</h3>
      <sub>Username: {{submission.creator.username}}</sub>
      <sub>ID: {{submission.creator.id}}</sub>
      <icon v-show="complete" class='QuestionComplete' name='check-circle'></icon>
      <icon v-show='!complete' class='QuestionIncomplete' name='circle'></icon>
    </dt>
    <dd>
      {{submission.content}}
    </dd>
  </div>
</template>

<script>
export default {
  data() {
    return {
      complete: false
    }
  },
  props: {
    submission: {
      type: Object
    }
  }
}
</script>

<style>
  
</style>
