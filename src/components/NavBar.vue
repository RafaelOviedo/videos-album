<template>
  <div>
    <nav class="navBar">
      <div id="logoContainer">
        <router-link id="navbarTitle" :to="{ name: 'VideosPage' }"><b>Videos Album Technical Test</b></router-link>
      </div>
      
      <ul id="itemsBox">
        <router-link class="listItem" :to="{ name: 'VideosPage' }">Videos</router-link>
        <router-link class="listItem" :to="{ name: 'AboutPage' }">About</router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
    }
  },
}
</script>

<style scoped>
.navBar {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 8vh;
    background: #1469e6;
    z-index: 2;
}

#logoContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 100%;
}
#navbarTitle {
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
}

#itemsBox {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 20%;
    height: 100%;
}

.listItem {
    text-decoration: none;
    color: #fff;
}
</style>