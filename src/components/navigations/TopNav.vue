<template>
  <div class='TopNav'>
    <router-link
      to='/'
    >
      <h1>Edmodo Dashboard</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang='scss'>
@import "../../assets/styles/_vars.scss";

.TopNav {
  min-height: 100px;
  padding: 20px;
  h1 {
    color: $blue;
  }
}
</style>
