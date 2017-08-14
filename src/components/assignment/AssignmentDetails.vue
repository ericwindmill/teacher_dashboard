<template>
  <div class='AssignmentDetails'>
    <header class='AssignmentDetails--Header'>
      <h2>{{assignment.title}}</h2>
      <h4> by {{assignment.creator.first_name}} {{assignment.creator.last_name}}</h4>
    </header>
    <ul class='AssignmentDetails--Description'>
      <li> {{assignment.description}} </li>
      <li> Assigned: {{new Date(assignment.created_at).toDateString()}}</li>
      <li :class='{pastdue: assignment.past_due}'><strong> Due: {{new Date(assignment.due_at).toDateString()}}</strong></li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    assignment: {
      type: Object
    }
  }
}

</script>

<style lang='scss'>
@import "../../assets/styles/_vars.scss";
.AssignmentDetails {
  
  .AssignmentDetails--Header {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-end;
    padding: ($spacing-unit / 2) 0;

    border-bottom: 1px solid $grey;
    margin: ($spacing-unit / 2) 0;
  }

  .AssignmentDetails--Description {
    list-style: none;

    li:not(:last-child) {
      padding-bottom: $spacing-unit / 2;
      color: $ink;
    }

    &:last-child {
      color: $green;
    }

    .pastdue {
      color: $red-dark;
    }
  }
}
  
</style>
