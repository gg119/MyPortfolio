<template>
  <div>
     
      <div class="card">
        <a :href="href">
        <img :src="src" :alt="alt" style="width:100% " /> 
        <div class="container">
          <h4><b>{{alt}}</b></h4> 
          
        </div>
        </a>
      </div>
    
  </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            src: String,
            alt: String,
            href: String
        }

    }
</script>

<style scoped>
a {
  text-decoration: none;
  color: #2c3e50;
}
.card {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 45%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  
  
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (max-width: 768px){
        .card {
            width: 80%;
        }
    }
</style>