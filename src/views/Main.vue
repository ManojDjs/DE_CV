<template>
  <div class="Main sm:m-0 lg:ml-1 lg:mr-1">
    <div
      class="mt-6 max-w-screen flex align-items-center justify-content-center"
    >
      <Nav></Nav>
    </div>
    <div class="border-round mt-6 md:mt-0">
      <Profile></Profile>
    </div>
    <div class="pb-2 border-round">
      <Work></Work>
    </div>
    <div class="pb-2 border-round">
      <Services></Services>
    </div>
    <div class="pb-2 border-round">
      <Leetcode></Leetcode>
    </div>

    <div>
      <Project_Detail></Project_Detail>
    </div>
    <!-- <div class="pb-2" id="landing">
      <Landing></Landing>
    </div> -->
    <!-- <div class="pb-2 border-round"> -->
    <Footer></Footer>
    <!-- </div> -->
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
import Profile from "@/components/Profile.vue";
import Work from "@/components/work.vue";
import Services from "@/components/Services.vue";
import Leetcode from "@/components/Leetcode.vue";
import Landing from "@/components/Landing.vue";
import Footer from "@/components/Footer.vue";
import Project_Detail from "@/components/Project_Detail.vue";

export default {
  name: "HomeView",
  components: {
    Nav,
    Profile,
    Work,
    Services,
    Leetcode,
    Landing,
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