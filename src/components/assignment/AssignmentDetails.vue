<template>
  <div class='AssignmentDetails'>
    <h2>Assignment: {{assignment.title}}</h2>
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

<style>
  
</style>
