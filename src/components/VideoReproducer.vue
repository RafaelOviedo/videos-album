<template>
  <div id="reproducerComponent">

    <div id="contentContainer">
      <div id="closeButtonContainer">
        <button id="closeReproducer" @click="closeReproducer">
          <img id="backButton" :src="backButton" alt="backButton">
          <b>Volver</b>
        </button>
      </div>

      <div id="videoContainer">
        <iframe 
          id="video" 
          :src="`https://www.youtube.com/embed/${videoId}`"
          title="YouTube video player" 
          frameborder="0"
          allowfullscreen
          ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from '../store/index'
import backButton from '../common/media/images/backbutton.jpg'

export default {
  name: "VideoReproducer",
  data() {
    return {
      backButton,
    }
  },
  methods: {
    closeReproducer() {
      store.commit('toggleReproducer');
    },
  },
  computed: {
    ...mapState(["videoId"])
  },
}
</script>

<style scoped>
#reproducerComponent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: softlyAppear 0.6s ease-in-out;
}
#contentContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8vh;
  left: 0;
  width: 100%;
  height: 92vh;
  opacity: 1;
  z-index: 2;
  background: #f2f2f2;
}

#closeButtonContainer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
  height: 10%;
}
#closeReproducer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 50%;
  border-radius: 7px;
  border: 1px solid #1469e6;
  background: #f2f2f2;
  color: #1469e6;
  font-size: 15px;
  cursor: pointer;
}
#backButton {
  width: 15%;
  height: 65%;
}

#videoContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 75%;
}
#video {
  width: 70%;
  height: 85%;
}
</style>