<template>
    <div>Loop Test
      <ul>
        <router-link v-bind:to="item.url"
          v-for="item in menus"
          v-if="item.disabled">
          {{item.label}}<br/>
        </router-link>
      </ul>
    </div>
</template>
<script>
  export default {
    name: "loop-test",
    data(){
      return{
        list: [1,2,3,4],
        menus:{
          home:{
            url:"/",
            label:"home",
            disable: false
          },
          home:{
            url:"/dashboard",
            label:"dashboard"
          },
          about:{
            url:"/about",
            label:"about"
          },
          learn:{
            url:"/learn",
            label:"learn"
          }
        }
      }
    }
  }
</script>

<style >
</style>