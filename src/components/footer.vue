<template>
  <footer>
    <ul
      :style="[$route.name === 'Home' ? staticPos : absolutePos]"
      class="flex-container"
    >
      <li>&copy; Copyright {{ new Date().getFullYear() }} BorrisX</li>
      <li class="break"></li>
      <li>
        <a href="https://github.com/Borrus-sudo" target="_blank">
          <img
            style="margin-right: 15px"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg=="
            alt="github icon"
          />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/BorrisX006" target="_blank">
          <img
            src="https://www.bencodezen.io//_nuxt/img/twitter.c1cc5ac.svg"
            alt="twitter icon"
          />
        </a>
      </li>
    </ul>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      staticPos: {
        position: "static",
      },
      absolutePos: {
        position: "absolute",
      },
    };
  },
};
</script>
<style scoped>
.flex-container {
  display: flex;
  background: rgb(68, 108, 169);
  bottom: 0;
  left: 0;
  right: 0;
  height: 10%;
  margin: 0px !important;
  padding: 0px !important;
  list-style-type: none;
  padding: 0px;
  margin: 0px !important;
  padding: 0px !important;
  justify-content: center;
  flex-wrap: wrap;
  height: auto !important;
}
.break {
  height: 0px;
  width: 100%;
}
img {
  height: 20px;
  padding: 0px;
  margin-bottom: 0px !important;
}
li {
  margin: 0px;
  padding: 0px;
  height: 50%;
}
</style>