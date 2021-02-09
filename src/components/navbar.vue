<template>
  <div>
    <ul id="nav">
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/about" exact>About </router-link></li>
      <li><router-link to="/about" exact>Quick Polls</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style scoped>
ul {
  list-style-type: none;
  text-align: left;
  display: flex;
}
li {
  margin: 0 10px;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
#nav {
  background: rgb(68, 108, 169);
  width: 100%;
}
.router-link-active {
  color: rgb(249, 236, 136);
}
</style>