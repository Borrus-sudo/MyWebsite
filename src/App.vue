<template>
  <div id="app">
    <app-navbar />
    <h3 class="title">JDevBlog</h3>
    <keep-alive name="Home">
      <router-view />
    </keep-alive>
    <app-footer />
  </div>
</template>

<script>
import navbar from "./components/navbar";
import footer from "./components/footer";
export default {
  name: "App",
  components: {
    "app-navbar": navbar,
    "app-footer":footer,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
.title {
  display: block;
  color: rgb(252, 183, 9);
  font-family: TitleFont;
  font-weight: 550;
  font-size: 6rem;
  letter-spacing: 1px;
  z-index: -1;
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
