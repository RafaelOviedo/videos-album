<template>
  <div id="videoCard">
    <div id="imageContainer"> 
      <img id="thumbImage" :src="item.data.items[0].snippet.thumbnails.high.url" alt="thumb" @click="openModal">
      <button id="deleteButton" @click="deleteVideo(item.data.items[0].id)">X</button>
      
      <transition name="fade">
      <VideoDetailModal :item="item" v-if="isModalOpen"/>
      </transition>
    </div>
  </div>
</template>

<script>
import store from '../store/index'
import axios from 'axios'
import VideoDetailModal from './VideoDetailModal.vue'
import { mapState } from 'vuex'

export default {
  name: "VideoCard",
  components: {
    VideoDetailModal
  },
  props: {
    item: Object,
  },
  data() {
    return {}
  },
  methods: {
    async deleteVideo(elementId) {
        await axios.delete('https://9f36sdoad4.execute-api.us-east-1.amazonaws.com/videos', { 
            data: {
                videoId: `https://www.youtube.com/watch?v=${elementId}`
            }
        })
    },
    openModal() {
      store.commit('toggleModal')
    },
  },
  computed: {
    ...mapState(['isModalOpen'])
  }
}
</script>

<style scoped>
#videoCard {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 30%;
  height: 30%;
}

#imageContainer {
  width: 80%;
  height: 100%;
  cursor: pointer;
}
#thumbImage {
  width: 100%;
  height: 100%;
}
#deleteButton {
    position: relative;
    bottom: 90%;
    left: 85%;
    cursor: pointer;
    background: #000;
    color: #fff;
}

#videoDetailLink {
    width: 80px;
    height: 80px;
}
</style>