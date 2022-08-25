<template>
  <div id="videoDetailModal">

    <div id="videoDetailContainer">
      <div id="buttonContainer">
        <button id="closeModal" @click="closeModal">&times;</button>
      </div>

      <div id="modalContent">
        <div id="leftContainer">
          <img id="thumbImage" :src="item.data.items[0].snippet.thumbnails.high.url" alt="thumb" @click="openReproducer">
          <img id="playImage" src="https://w7.pngwing.com/pngs/566/248/png-transparent-computer-icons-youtube-play-button-button-angle-text-triangle.png" alt="play" @click="openReproducer">
        </div>

        <div id="rightContainer">
          <h1 id="videoTitle">{{ item.data.items[0].snippet.title }}</h1>
          <div id="descriptionContainer">
            <p>{{ item.data.items[0].snippet.description }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '../store/index'

export default {
  name: "VideoDetailModal",
  props: {
    item: Object,
  },
  data() {
    return {}
  },
  methods: {
    closeModal() {
      this.$emit('closeDetailModal')
    },
    openReproducer() {
      store.commit('toggleReproducer')
    },
  },
  computed: {
    ...mapState(["videoDetail"]),
  },
}
</script>

<style scoped>
#videoDetailModal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0vh;
  left: 0;
  width: 100%;
  height: 92vh;
  background: rgba(0, 0, 0, 0.5);
  animation: softlyAppear 0.6s ease-in-out;
  z-index: 1;
  cursor: default;
}

#buttonContainer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 10%;
}
#closeModal {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 30px;
  border-radius: 3px;
  border: none;
  background: transparent;
  color: #000;
  font-size: 40px;
  cursor: pointer;
}

#modalContent {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90%;
}
#leftContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 100%;
}
#thumbImage {
  width: 80%;
  height: 50%;
  cursor: pointer;
}
#playImage {
  position: absolute;
  top: 48%;
  left: 31%;
  width: 5%;
  height: 11%;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
}
#rightContainer {
  width: 55%;
  height: 100%;
}
#videoTitle {
  font-size: 20px;
  text-align: center;
}
#descriptionContainer {
  width: 100%;
  height: 70%;
  overflow: scroll;
}
#descriptionContainer::-webkit-scrollbar {
  display: none;
}

#videoDetailContainer {
  width: 55%;
  height: 65%;
  background: #fff;
  border-radius: 15px;
}
#video {
  width: 70%;
  height: 85%;
}
</style>