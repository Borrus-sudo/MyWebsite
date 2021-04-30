<template>
  <div class="about animate-bottom">
    <section class="blog">
      <h2>About me 🔥</h2>
      <p>
        Jinmay Jhaveri (a.k.a BorrisX) is a
        {{ this.currentYear - 2006 }} year old self-taught junior full stack web
        dev (P.S. soon to be senior).He is also a game dev enthusiastic and a
        Potter head. He is the founder and CEO of JCorp that primarily focuses
        on improving <abbr title="developer experience">DX</abbr> of Vue
        developers. He is a staunch believer in the tagline "Don't be Dinesh!"
      </p>
    </section>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return { currentYear: 0 };
  },
  created() {
    const date = new Date();
    this.currentYear = date.getFullYear();
    console.log("Reached here");
    const footer = document.getElementById("footer");
    console.log(footer.style.height);
  },
};
</script>


<style  scoped>
@import url("../../public/bounce-animation.css");

.about{
  margin-bottom: 14%;
}

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
abbr {
  cursor: pointer;
}
</style>
