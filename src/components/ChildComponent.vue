<template>
  <div class="child-component">
    <div>
      <h1>Hey I am a Child Component</h1>
    </div>

    <div>
      {{ someProps }}
    </div>

    <div>
      <button v-on:click="handleClick"> Click me </button>
    </div>
    <br>
  </div>
</template>

<script>
  export default{
    name: 'child-component',
    props: {
      someProps: {
        Type: String,
        defaults:''
      }
    },
    data() {
      return{
        msg:'Hello Ms. Gege'
      }
    },
    methods:{
      handleClick(){
        this.$emit('clickMe','I pass param ya!')
      }
    }
  }
  
</script>

<style scoped>

</style>