<template>
  <div>
    <NavBar />
    <transition name="fade">
    <VideoReproducer v-if="isReproducerOpen"/>
    </transition>
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import VideoReproducer from './components/VideoReproducer.vue'
import store from './store/index'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    NavBar,
    VideoReproducer
  },
  data() {
    return {}
  },
  created() {
    store.dispatch('getVideos')
  },
  computed: {
    ...mapState(["isReproducerOpen"]),
  },
}
</script>

<style>
#app {
  font-family: Poppins, Avenir, Helvetica, Arial, sans-serif;
}
</style>
