<template>
  <div class="Footer">
    <div class="bg-indigo-50 px-4 py-8 md:px-6 lg:px-8">
      <div class="flex flex-column lg:flex-row">
        <div class="flex-1 pr-0 lg:pr-5 mb-5 lg:mb-0">
          <div
            class="
              font-bold
              text-5xl text-indigo-800
              mb-7
              md:text-left
              text-center
            "
          >
            My Freelancing profile
          </div>
          <div
            class="
              font-medium
              text-2xl text-indigo-800
              mb-3
              md:text-left
              text-center
            "
          >
            We help you grow
          </div>
          <p
            class="
              text-gray-600
              font-medium
              text-xl
              mt-0
              mb-7
              line-height-3
              md:text-left
              text-center
            "
          >
            A Uk based Data Scientist/Engineer serving the clients around the
            World for more than four years holding expertise in python, Pyspark,
            Pandas, data visualization and ML-Ops i.e. Tableau and Power BI. I
            have developed a lot of web scrapers, data visualizations, data
            analysis programs, SQL queries and ML codes using python. My goal is
            to provide you solutions your problems at one place.
          </p>
          <div class="flex align-items-center">
            <span class="text-indigo-800 font-bold mr-3">TRUSTED BY</span
            ><i class="text-indigo-600 pi pi-google mr-2"></i
            ><i class="text-indigo-600 pi pi-apple mr-2"></i
            ><i class="text-indigo-600 pi pi-microsoft"></i>
          </div>
        </div>
        <div class="flex-1">
          <div class="flex flex-wrap">
            <div class="w-full lg:w-6 p-3">
              <div
                class="p-3"
                style="
                  background: linear-gradient(
                    rgba(66, 66, 66, 0.9) 0%,
                    rgba(66, 66, 66, 0.63) 100%
                  );
                  min-height: 150px;
                  border-radius: 10px;
                "
              >
                <span class="text-indigo-800 font-bold text-5xl">4+</span>
                <p class="mt-3 mb-0 font-medium text-xl text-400">
                  Years of Experience
                </p>
              </div>
            </div>
            <div class="w-full lg:w-6 p-3">
              <div
                class="p-3"
                style="
                  background: linear-gradient(
                    rgba(66, 66, 66, 0.9) 0%,
                    rgba(66, 66, 66, 0.63) 100%
                  );
                  min-height: 150px;
                  border-radius: 10px;
                "
              >
                <span class="text-indigo-800 font-bold text-5xl"
                  >{{ repo_c }}+</span
                >
                <p class="mt-3 mb-0 font-medium text-xl text-400">Projects</p>
              </div>
            </div>
            <div class="w-full lg:w-6 p-3">
              <div
                class="p-3"
                style="
                  background: linear-gradient(
                    rgba(66, 66, 66, 0.9) 0%,
                    rgba(66, 66, 66, 0.63) 100%
                  );
                  min-height: 150px;
                  border-radius: 10px;
                "
              >
                <span class="text-indigo-800 font-bold text-5xl">7+</span>
                <p class="mt-3 mb-0 font-medium text-xl text-400">Awards</p>
              </div>
            </div>
            <div class="w-full lg:w-6 p-3">
              <div
                class="p-3 bg-indigo-500 border-round"
                style="min-height: 150px"
              >
                <i class="pi pi-globe text-6xl text-indigo-100"></i
                ><button
                  class="
                    p-button p-component
                    block
                    mt-5
                    p-button-warning
                    white-space-nowrap
                  "
                  @click="scrollToTop()"
                  type="button"
                  aria-label="Learn More"
                >
                  <!----><span
                    class="pi pi-arrow-right p-button-icon p-button-icon-left"
                  ></span
                  ><span class="p-button-label">Learn More</span
                  ><!----><span class="p-ink" role="presentation"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!---->
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