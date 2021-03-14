<template>
  <div>
    {{ callForBlog() }}
    <section v-if="loaded" class="blog">
      <article v-html="blog.message"></article>
      <span class="creds">
        <button
          v-if="!starred.includes(blog._id)"
          @click="addStar(blog._id)"
          class="blogButton"
        >
          <b> Star my post</b>
        </button>
        <button v-else @click="removeStar(blog._id)" class="blogButton">
          <b> Unstar my post</b>
        </button>
        <h5 style="word-wrap: break-word; font-size: 15px; margin: 0px">
          {{ blog.time }}
        </h5>
      </span>
    </section>
    <section v-else>Loading</section>
  </div>
</template>

<script>
import { bus } from "../main";
export default {
  data() {
    return {
      blog: {},
      starred: [],
      baseURL: "https://jdev.glitch.me/",
      loaded: false,
    };
  },
  methods: {
    async addStar(id) {
      this.blog.stars++;
      this.starred.push(id.trim());
      localStorage.setItem("starredPosts", this.starred.toString());
      await fetch(`${this.baseURL}post/addStar/${id.trim()}`);
    },
    async removeStar(id) {
      this.blog.stars--;
      this.starred.splice(this.starred.indexOf(id), 1);
      localStorage.setItem("starredPosts", this.starred.toString());
      await fetch(`${this.baseURL}post/removeStar/${id.trim()}`);
    },
    callForBlog() {
      if (localStorage.hasOwnProperty("starredPosts")) {
        this.starred = localStorage.getItem("starredPosts").split(",");
      }
      bus.$emit("fetchblogsp");
    },
  },
  created() {
    bus.$on("blog", (data) => {
      const blogs = data.filter((elem) => elem._id === this.$route.params.id);
      // const ids = data.forEach((elem) => elem._id);
      this.blog = blogs[0];
      // this.ids = ids;
      this.loaded = true;
    });
  },
};
</script>

<style scoped>
.blog {
  border: 4px solid rgb(177, 78, 5);
  border-radius: 7.5px;
  margin-bottom: 30px;
  max-width: 700px;
  background-color: rgb(255,255,204);
  font-size: larger;
  text-align: left;
  text-decoration: solid;
  text-transform: none;
  margin: 10px auto;
  padding: 0px 20px;
  padding-bottom: 5px;
  word-wrap: break-word;
}
article > h1 {
  font-size: 10px;
}

.creds > h5 {
  font-size: 3.1vw;
  padding: none;
  margin: none;
  word-wrap: break-word;
}
.blogButton {
  background-color: rgb(177, 78, 5);
  color: black;
  font-family: inherit;
  text-align: center;
}
</style>