<template>
  <div class="home">
    <h1>Projects</h1>
    <Swi/> 
  </div>
</template>

<script>
// import Card from '../components/Card.vue';
import Swi from '../components/Swi.vue';
// @ is an alias to /src

export default {
  name: "home",
  components: {
    Swi,
  },
  title: "Home - Geon",
  data(){
    return{
      title: "Home"
    }
  },
    head: {
    title: function () {
      return {
        inner: this.title
      }
    },
    meta: [
      { name: 'Home', content: 'Geon\'s Home Page', id: 'home' }
    ]
  }
};
</script>
