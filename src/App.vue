<template>
  <div id="app">
    <nav-bar />
    <h3 class="title">JDevBlog</h3>
    <router-view />
  </div>
</template>

<script>
import navbar from "./components/navbar";
import { bus } from "./main";
export default {
  name: "App",
  components: {
    "nav-bar": navbar,
  },
  data() {
    return {
      blogs: [],
    };
  },
  methods: {
    giveBlogs() {
      bus.$emit("blogs", this.blogs);
    },
  },
  watch: {
    blogs(val) {
      bus.$emit("blogs", val);
    },
  },
  async created() {
    const response = await fetch("https://jdev.glitch.me/post/getPost/");
    const json = await response.json();
    const message = await json;
    this.blogs.push(...message);
    this.blogs.sort((a, b) => {
      return a.time.toUpperCase() >= b.time.toUpperCase() ? -1 : 1;
    });
    bus.$on("fetchblogs", () => {
      bus.$emit("blogs", this.blogs);
    });
    bus.$on("fetchblogsp", () => {
      bus.$emit("blog", this.blogs);
    });
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.title {
  text-align: center;
  font-family: StardewValleyFont;
  color: rgb(252, 183, 9);
  font-size: 10vw;
  margin-bottom: 10px;
  margin-top: 20px;
}
</style>
