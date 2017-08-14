<template>
  <div class='StudentSubmission'
  >
    <dt 
      class='Student'
      @click='changeShow(submission.id)'>
      <div class='Student--Header'>
        <div class='Student--Name'>
          <icon v-show="submission.status !== 'not_graded'" class='QuestionComplete' name='check-circle'></icon>
          <icon v-show="submission.status === 'not_graded'" class='QuestionIncomplete' name='circle'></icon>
          <img :src="submission.creator.avatars.small" />
          <h3>{{submission.creator.first_name}} {{submission.creator.last_name}}</h3>
        </div>
        <span class='Student--Meta'>
          <sub>Username: {{submission.creator.username}}</sub>
          <sub>ID: {{submission.creator.id}}</sub>
        </span>
        <h4 v-show="submission.status !== 'not_graded'">Grade: {{submission.status}}</h4>
      </div>
      <icon v-show="submission.id !== show" class='open-icon' name="chevron-down"></icon> 
      <icon v-show="submission.id === show" class='close-icon' name="times"></icon>
    </dt>
    <dd class='Student--SubmissionContent' v-show='submission.id === show'>
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
  border: 1px solid $grey;
  padding: $spacing-unit / 2;
}

.Student {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .Student--Header  {
    .Student--Name {
      display: flex;
      align-items: center;
      
      > * {
        margin:0 10px;
      }

    }
  }

  .Student--Meta {
    display: flex;
    justify-content: space-around;
  }
}

.Student--SubmissionContent {
  border-top: 1px solid $grey;
  padding: $spacing-unit 0;
  margin: $spacing-unit / 2;
  p {
    padding-bottom: $spacing-unit;
  }
}

// Grade Status Icons 
.QuestionIncomplete {
  color: $red-dark;
}

.QuestionComplete {
  color: $green;
}

.open-icon {
  color: $teal;
}

.close-icon {
  color: $red;
}
  
</style>
