<template>
  <div class="home">
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
.home {
  padding: 0px;
  margin: 0px;
}
</style>