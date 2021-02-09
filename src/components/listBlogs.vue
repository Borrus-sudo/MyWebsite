<template>
  <div>
    {{ getBlogs() }}{{""}}
    <div v-if="loaded">
      <template v-for="blog in blogs">
        <section class="blog" :key="blog._id">
          <router-link :to="'post/' + blog._id">
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
  methods: {
    getBlogs() {
      bus.$emit("returnBlogs");
      bus.$on("Blogs", (data) => {
        this.blogs = data;
        this.loaded = true;
      });
    },
  }
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
  padding: 20px;
  padding-bottom: 5px;
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
