<template>
  <div class='TopNav'>
    <router-link 
      tag='h1' 
      class='TopNav--Title'
      to='/'
    >
      Edmodo
    </router-link>
    <router-link
      class='TopNav--Button'
      tag='button'
      to='/'
    >
      Teacher Dashboard
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
  min-height: 50px;
  padding: 20px;
  border-bottom: 1px solid black;
  margin-bottom: 50px;
  display:flex;
  flex-flow: row wrap;
  justify-content: space-between;

  h1 {
    color: $blue;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;

    &:hover {
      color: lighten($blue, 15%);
    }
  }

  .TopNav--Button {
    height: 38px;

  }
}
</style>
