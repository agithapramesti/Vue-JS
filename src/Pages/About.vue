<template>
<div>
	<div>
		<h1>{{ msg }}
		</h1>
		
	</div>
	<div>
		Data A: {{dataA}}
	</div>
	<div>
		Data B: {{dataB}}
	</div>
	<div>
		Data C: {{dataC}}
	</div>
	<input type="text" v-model="dataB">

</div>
</template>

<script>
  export default{
    name: 'About',
    data () {
      return {
        msg: 'Hello i am gegessi',
        dataA: 'A',
        dataB: 'B'
      }
    },
    computed: {
      dataC: function(){
        return `${this.dataA} ${this.dataB}`
      }
    }
  }
  
</script>

<style scoped>

</style>