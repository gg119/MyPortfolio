<template>
  <div>
    <div id="nav">
      <router-link class="nav-btn" to="/">Home</router-link>
      <router-link class="nav-btn" to="/about">About</router-link>
      <router-link class="nav-btn" to="/Contact">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: space-evenly;
  background: rgba(45, 45, 45, 0.98);
  padding: 10px;
}

.nav-btn {
  color: white;
  text-decoration: none;
  font-family: "Exo 2", sans-serif;
}
</style>