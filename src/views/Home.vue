<template>
  <div class="home">
    <keep-alive include="listBlogs">
      <list-blogs />
    </keep-alive>
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
</style>