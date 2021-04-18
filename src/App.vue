<template>
  <div id="nav">
    <!-- <img alt="Vue logo" src="@/assets/logo.png" /> -->

    <router-link to="/"><h1>WHERE to WORK</h1></router-link>
    <!-- <router-link to="/about">About</router-link> -->
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
// body {
//   background-color: black;

// }
body {
    background-color: black;
    width: 800px;
    margin: 0 auto;
}
img,
svg {
  vertical-align: middle;
  width: 12%;
}

#nav {
  padding: 30px;
  display: flex;
  position: fixed;
  width: 100%;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #55e094;
    }
  }
  h1 {
    font-size: 18px;
    line-height: 3.2;
    color: #55e094;
    text-shadow: #55e094 1px 0 10px;
  }
}

// ====================================

/* Samsung Galaxy S4 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
/* Styles */
img, svg {
    vertical-align: middle;
    width: 36%;
}
}
</style>
