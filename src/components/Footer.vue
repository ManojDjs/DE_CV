<template>
  <div class="Footer">
    <div class="px-4 py-8 md:px-6 lg:px-8 bg-indigo-800 border-round">
      <div class="text-700 text-center">
        <div class="text-yellow-600 font-bold mb-3 text-xl">
          <i class="pi pi-github"></i>&nbsp;POWERED BY @MANOJDJS
        </div>
        <div class="text-900 font-bold md:text-5xl text-2xl mb-4">
          Join Me For Colloboration
        </div>

        <Button
          label="Join Now"
          icon="pi pi-megaphone"
          class="
            font-bold
            px-5
            py-3
            p-button-raised p-button-rounded
            white-space-nowrap
          "
          @click="scrollToTop()"
        ></Button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      username: "ManojDjs",
      status: "success",
      message: "retrieved",
      repo_c: 40,
    };
  },
  methods: {
    get_git() {
      this.username == "ManojDjs";
      console.log(this.username);
      axios.get(this.social.Git + this.social.Git_user).then((resp) => {
        console.log(resp.data);
        this.repo_c = resp.data["public_repos"];
      });
    },
    scroll(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    },
    get_pypi() {
      axios.get("https://pypi.org/simple/").then((resp) => {
        console.log(resp.data);
      });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },

  created() {
    this.get_git();
    // this.get_pypi()
  },
  computed: {
    ...mapState(["leetcode", "social"]),
  },
};
</script>