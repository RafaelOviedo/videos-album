<template>
  <div id="videoCard">
    <div id="imageContainer"> 
      <img id="thumbImage" :src="item.data.items[0].snippet.thumbnails.high.url" alt="thumb" @click="openDetailModal">
      <button id="deleteButton" @click="openDeleteModal">&times;</button>
      
      <transition name="fade">
        <VideoDetailModal v-if="isDetailModalOpen" @closeDetailModal="closeDetailModal" :item="item"/>
      </transition>
      <transition name="fade">
        <DeleteOptionModal v-if="isDeleteModalOpen" @closeDeleteModal="closeDeleteModal" :item="item"/>
      </transition>
    </div>
  </div>
</template>

<script>
import store from '../store/index'
import VideoDetailModal from './VideoDetailModal.vue'
import DeleteOptionModal from './DeleteOptionModal.vue'

export default {
  name: "VideoCard",
  components: {
    VideoDetailModal,
    DeleteOptionModal
  },
  props: {
    item: Object,
  },
  data() {
    return {
      isDetailModalOpen: false,
      isDeleteModalOpen: false,
    }
  },
  methods: {
    openDetailModal() {
      let id = this.item.data.items[0].id;
      store.dispatch('setVideoId', id)
      this.isDetailModalOpen = !this.isDetailModalOpen;
    },
    openDeleteModal() {
      this.isDeleteModalOpen = !this.isDeleteModalOpen;
    },
    closeDetailModal() {
      this.isDetailModalOpen = !this.isDetailModalOpen;
    },
    closeDeleteModal() {
      this.isDeleteModalOpen = !this.isDeleteModalOpen;
    },
  },
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
    font-size: 15px;
}

#videoDetailLink {
    width: 80px;
    height: 80px;
}
</style>