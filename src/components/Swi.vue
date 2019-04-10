<template>
  <div>
    <!-- :autoplay="true" :autoplayTimeout="5000" :loop="true" -->
    <carousel :per-page="1">
      <slide v-for="image in images" :key="image.alt">
        <Card :src="image.src" :alt="image.alt" :href="image.href"/>
      </slide>
    </carousel>
    <pagination/>
  </div>
</template>

<script>
import { Carousel, Slide, Pagination } from "vue-carousel";
import PropertyM from "../assets/PMProject-update.jpg";
import Hogger from "../assets/Hogger.gif";
import Dodge from "../assets/Dodge.gif";
import Hit from "../assets/Hit.png";

import Card from "./Card.vue";

export default {
  name: "Swi",
  components: {
    Carousel,
    Slide,
    Pagination,
    Card
  },

  data() {
    return {
      images: [
        {
          src: Hogger,
          alt: "Hogger",
          href: "https://github.com/gg119/YUPOCH"
        },

        {
          src: PropertyM,
          alt: "Property Managment Website",
          href: "https://github.com/ArpMichaelB/Project-FDS"
        },
        
        {
          src: Dodge,
          alt: "Dodge",
          href: "https://github.com/gg119/Dodge"
        },
        {
          src: Hit,
          alt: "Hit",
          href: "https://github.com/gg119/Hit"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>