<template>
  <div>
    <ul id="nav">
      <li @click="$router.push({ name: 'Home' })" class="left-part left-part-1">
        <img
          src="https://cdn.discordapp.com/attachments/794776655763341312/795237122721710090/unknown.png"
          alt=""
          class="favicon"
        />
      </li>
      <li @click="$router.push({ name: 'Home' })" class="left-part left-part-2">
        JDevBlog
      </li>
      <li class="break"></li>
      <li class="link"><router-link to="/" exact>Home</router-link></li>
      <li class="link"><router-link to="/about" exact>About </router-link></li>
      <li class="link">
        <router-link disable to="/1dcube.io">1dCube</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style scoped>
#nav {
  display: flex;
  background: rgb(68, 108, 169);
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  font-family: Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif !important;
  height: 6.5%;
  height: fit-content;
  list-style-type: none;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
}

.left-part:hover {
  cursor: pointer;
}
.left-part-1 {
  margin: 0px;
  margin-left: 10px;
}
.left-part-2 {
  margin-right: 55%;
  font-size: 2rem;
  margin-bottom: 0.9%;
}
.link {
  margin-top: 0.5%;
}
.link:hover {
  font-size: 2rem;
}
.favicon {
  width: 25px;
  height: 25px;
  margin: 0px 0px;
  padding: 0px;
  padding-top: 6px;
  border-radius: 50%;
}
.break {
  height: 0px;
}
.router-link-active {
  border-bottom: 2px solid white;
}
li {
  margin: 0 10px;
  color: #fff;
}
a {
  color: #fff;
  font-size: 1.25rem;
  font-weight: 400;
  text-decoration: none;
}
@media screen and (max-width: 824px) {
  .break {
    width: 100%;
  }
  .left-part {
    margin: 0px;
  }
  #nav {
    justify-content: center;
    font-size: 0.5rem !important;
  }
}
</style>