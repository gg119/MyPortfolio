<template>
  <div class="about fade-in">
    <h1>About Geon</h1>
    <h3>Welcome to my portfolio! I am a Chicago native with a strong interest for Technology.</h3>
    <h3>
      I attended Western Illinois University from 2015-2018 and graduated with a major in
      Computer Science and minor in Information Technology.
    </h3>

    <h3>I am currently working as a Software Engineer in Illinois.</h3>

    <i class="fab fa-node"></i>
    <i class="fab fa-java"></i>
    <i class="fab fa-vuejs"></i>
    <i class="fab fa-react"></i>
    <i class="fas fa-database"></i>
    <i class="fab fa-aws"></i>
  </div>
</template>

<script>
export default {
  name: "about",
  title: "About - Geon",
  data() {
    return {
      title: "About"
    };
  },
  head: {
    title: function() {
      return {
        inner: this.title
      };
    },
    meta: [
      { name: "application-name", content: "Geon's Portfolio" },
      { name: "description", content: "Geon's About Page", id: "desc" },
      {name:"keywords", content:"geon,gayles, geon gayles, personal website, vue website, vuejs website, geon portfolio"}// id to replace intead of create element
    ]
  }
};
</script>


<style scoped>
h3 {
  font-size: 2rem;
}

.fade-in {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 3s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.svg-inline--fa {
  width: 10rem;
  height: 10rem;
  padding: 2rem;
}

@media only screen and (max-width: 768px) {
  h3 {
    font-size: 1.5rem;
  }
}
</style>

