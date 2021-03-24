<template>
  <div class="blog">
    <h3>404 Page Not Found</h3>
    <section>
      The page you requested was not found.
      <br />
      <span
        style="
          cursor: pointer;
          text-decoration: underline;
          color: rgb(12, 240, 255);
        "
        @click="$router.push({ name: 'Home' })"
      >
        Go back to the home page</span
      >
    </section>
  </div>
</template>

<script>
export default {
  name: "404Page",
};
</script>

<style>
.blog {
  border: 4px solid rgb(177, 78, 5);
  border-radius: 7.5px;
  margin-bottom: 30px;
  max-width: 700px;
  color: rgb(86, 18, 0);
  background-color: rgb(255, 255, 204);
  font-size: small;
  text-align: left;
  text-decoration: solid;
  text-transform: none;
  margin: 0px auto;
  padding: 20px;
  padding-bottom: 5px;
}
.blog > h2 {
  text-align: center;
}
</style>