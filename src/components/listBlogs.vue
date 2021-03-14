<template>
  <div>
    <div v-if="loaded">
      <template v-for="blog in blogs">
        <section class="blog" :key="blog._id">
          <router-link
            style="margin: 0px; padding: 0px"
            :to="'/post/' + blog._id"
          >
            <span class="additionals">⭐{{ blog.star }}</span>
            <article
              class="content"
              v-html="blog.message.split('</h5>')[0] + '(...)'"
            ></article
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
  border: 4px solid maroon;
  border-radius: 7.5px;
  margin-bottom: 30px;
  max-width: 650px;
  max-height: 150px;
  background-color: rgb(255,255,204);
  font-size: small;
  text-align: left;
  text-decoration: solid;
  text-transform: none;
  margin: 10px 7.5%;
  padding: 15px !important;
  padding-bottom: 0px !important;
  padding-top: 0px !important;
  content: translateY(-5%);
  display: grid;
}
.title {
  padding: 0px !important;
  margin: 0px !important;
}
.additionals {
  display: inline;
  margin: 0px;
  margin-left: 94%;
  padding: 0px;
}

.content {
  margin: 0px;
  padding: 0px;
}
article > h1 {
  font-size: 32px;
  margin: 0px;
}
a,
u {
  text-decoration: none !important;
}
article {
  color: rgb(87, 23, 12) !important;
}
@media screen and (max-width: 440px) {
  .additionals {
    margin-left: 92%;
  }
}
@media screen and (max-width: 280px) {
  .blog {
    margin: 10px auto;
  }
}
</style>
