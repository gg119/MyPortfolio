<template>
  <div class="contacts">
    <div>
      <a href="https://www.linkedin.com/in/geon-gayles-912490128/" alt="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
      <h4>LinkedIn</h4>
    </div>
    <div>
      <a href="https://github.com/gg119" alt="Github">
        <i class="fab fa-github-square"></i>
      </a>
      <h4>Github</h4>
    </div>

    <div>
      <a href="mailto:geon.gayles@gmail.com" alt="Email">
        <i class="fas fa-envelope"></i>
      </a>
      <h4>Email</h4>
    </div>

    <div>
      <a href="https://drive.google.com/open?id=10DmqP3dv2CpiMeZRTGbgmQ-_6EOeLbS1" alt="Resume">
        <i class="fas fa-file"></i>
      </a>
      <h4>Resume</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  title: "Contact - Geon",

  data() {
    return {
      title: "Contact"
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
      { name: "description", content: "Geon's Contact Page", id: "desc" },
      {name:"keywords", content:"geon,gayles, geon gayles, personal website, vue website, vuejs website, geon portfolio"}// id to replace intead of create element
    ]
  }
};
</script>

<style scoped>
.svg-inline--fa {
  width: 10rem;
  height: 10rem;
  padding: 2rem 2rem 0 2rem;
}

a {
  text-decoration: none;
  color: #2c3e50;
}

.contacts {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>