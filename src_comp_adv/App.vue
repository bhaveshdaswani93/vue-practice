<template>
<div>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <div class="container">
        <button @click="selectedComponent = 'appTestSlot'"> Quote </button>
        <button @click="selectedComponent = 'appAuthor'"> Author </button>
        <button @click="selectedComponent = 'appNew'"> New </button>
        <!-- <app-test-slot>
          <h2 slot="header">{{header}}</h2>
          <p >Hello world is good quote</p>
        </app-test-slot> -->
        <keep-alive>
          <component :is="selectedComponent"></component>  
        </keep-alive>
        
    </div>
</div>
</template>

<script>
import TestSlot from "./components/TestSlot.vue";
import Author from "./components/Author.vue";
import New from "./components/New";
  export default {
    components:{
      appTestSlot:TestSlot,
      appAuthor:Author,
      appNew:New,
    },
    data() {
      return {
        header:"This is the header from parent component.",
        selectedComponent:"appTestSlot"
      }
    }
  }
</script>

<style scoped>
h2 {
        color:red;
    }
</style>
