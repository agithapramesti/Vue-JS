<template>
  <div class="links">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/learn">Learn</router-link>
    <router-link to="/learn-apl">Learn Api</router-link>
    <router-link to="/loop-test">Looping Test</router-link>
  </div>
</template>

<script>
  export default{
    name: 'LinkTutorial',
    data () {
      return {
        msg: 'Hello i am gegessi'
      }
    }
  }
</script>

<style scoped>

</style>