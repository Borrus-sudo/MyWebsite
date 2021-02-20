<template>
  <div>
    <div v-if="loaded">
      <template v-for="blog in blogs">
        <section class="blog" :key="blog._id">
          <router-link :to="'post/' + blog._id">
            <span class="additionals">⭐{{ blog.star }}</span>
            <article v-html="blog.message.slice(0, 100) + '(...)'"></article
          ></router-link>
        </section>
      </template>
    </div>
    <div v-else>Loading</div>
  </div>
</template>

<script>
import { bus } from "../main";
export default {
  name: "listBlogs",
  data() {
    return {
      blogs: [],
      loaded: false,
    };
  },
  async created() {
    const response = await fetch("https://jdev.glitch.me/post/getPost/");
    const json = await response.json();
    const message = await json;
    this.blogs.push(...message);
    this.blogs.sort((a, b) => {
      return a.time.toUpperCase() >= b.time.toUpperCase() ? -1 : 1;
    });
    this.loaded = true;
    bus.$on("fetchblogsp", () => {
      bus.$emit("blog", this.blogs);
    });
  },
};
</script>

<style scoped>
.blog {
  border: 4px solid rgb(177, 78, 5);
  border-radius: 7.5px;
  margin-bottom: 30px;
  max-width: 800px;
  color: rgb(86, 18, 0) !important;
  background-color: rgb(255, 255, 204);
  font-size: small;
  text-align: left;
  text-decoration: solid;
  text-transform: none;
  margin: 10px auto;
  padding: 30px;
  padding-bottom: 5px;
  content: translateY(-5%);
}
.additionals {
  margin: 0px;
  margin-left: 98.5%;
  padding: 0px;
  text-align: right;
}
article > h1 {
  color: rgb(102, 51, 0);
  text-decoration: solid;
  font-size: 32px;
}
a,
u {
  text-decoration: none !important;
}
article {
  color: rgb(102, 51, 0) !important;
}
</style>
