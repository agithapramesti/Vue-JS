<template>
<div>
	<div>
		<h1> {{ msg }} </h1>		
	</div>
	<div>
		{{dataParent}}
	</div>

	<div>
		<input type="text" v-model="dataParent" placeholder="Type"> </input>
	</div>

	<ChildComponent :someProps="dataParent" @clickMe="someMethod"> </ChildComponent>
	<br>
</div>
</template>

<script>
import ChildComponent from '@/components/ChildComponent'
  export default{
    name: 'data-binding',
    components:{ChildComponent},
    data () {
      return {
        dataParent:'Hey I am a parent data',
        
      }
    },
    methods:{
      someMethod(param){
        alert(`${param}`)
      }
    }
  }
  
</script>

<style scoped>

</style>