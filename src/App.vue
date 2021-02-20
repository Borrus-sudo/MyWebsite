<template>
  <div id="app">
    <nav-bar />
    <h3 class="title">JDevBlog</h3>
    <keep-alive include="listBlogs">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import navbar from "./components/navbar";
export default {
  name: "App",
  components: {
    "nav-bar": navbar,
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
