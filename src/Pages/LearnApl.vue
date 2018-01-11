<template>
  <div>
    <h1>Hey Let's learn Api</h1>
    <button @click="callApi">Call Api</button>
    <ul>
      <li v-for="film in films" :key="film.id">
        {{film.title}}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'

  export default{
    name: 'LearnApl',
    data(){
      return {
        films:[]
      }
    },
    methods:{
      callApi(){
        const URL = 'https://ghibliapi.herokuapp.com/films'
        axios.get(URL)
        .then(response=>{
          this.films= response.data

        })
        .catch(error=>{
          console.log(error)
        })
        console.log('call api with ', axios)
      }
    }
  }
</script>
