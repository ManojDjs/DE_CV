<template>
  <div class="Main sm:m-0 lg:ml-1 lg:mr-1">
    <div
      class="mt-6 max-w-screen flex align-items-center justify-content-center"
    >
      <Nav></Nav>
    </div>
    <div class="pb-2 border-round">
      <Aboutme></Aboutme>
    </div>
    <div class="pb-2 border-round">
      <Gitp></Gitp>
    </div>
    <div class="pb-2 border-round">
      <Project_Detail></Project_Detail>
    </div>

    <Footer></Footer>
  </div>
</template>
  <script>
import Nav from "@/components/Nav.vue";
import Aboutme from "@/components/Aboutme.vue";

import Gitp from "@/components/gitp.vue";
import Project_Detail from "@/components/Project_Detail.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Nav,
    Aboutme,
    Gitp,
    Project_Detail,
    Footer,
  },
  methods: {
    scroll(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>
  <style>
</style>