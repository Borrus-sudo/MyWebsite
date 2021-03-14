<template>
  <div id="app">
    <nav-bar />
    <br />
    <br />
    <h3 class="title">JDevBlog</h3>

    <keep-alive name="Home">
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
  display: block;
  color: rgb(252, 183, 9);
  font-family: TitleFont;
  font-weight: 550;
  font-size: 6rem;
  letter-spacing: 1px;
}
@media screen and (max-width: 824px) {
  .title {
    transform: translateY(35%);
  }
}
@media screen and (max-width: 280px) {
  .title {
    font-size: 4rem;
  }
}
</style>
