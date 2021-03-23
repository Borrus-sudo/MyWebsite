<template>
  <div class="home animate-bottom">
    <list-blogs />
  </div>
</template>

<script>
import listBlogs from "../components/listBlogs";
export default {
  name: "Home",
  components: {
    "list-blogs": listBlogs,
  },
};
</script>
<style scoped>
@import url("../../public/bounce-animation.css");
.home {
  padding: 0px;
  margin: 0px;
}
</style>