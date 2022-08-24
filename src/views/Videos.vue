<template>
  <div>
    <div id="videosPage">
      <div id="formContainer">
        <p id="inputLabel"><b>Añadir un nuevo video</b></p>
        <form id="textInputContainer">
          <input id="searchInput" type="text" v-model="inputText" placeholder="Añadir">
          <button id="addButton" @click.prevent="addVideo"><b>Añadir</b></button>
        </form>
      </div>
      
      <div id="videosContainer">
          <VideoCard :item="item" v-for="(item, idx) in videos" :key="idx"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import VideoCard from '../components/VideoCard';
import store from '../store/index'
import axios from 'axios'

export default {
  name: "Videos",
  components: {
    VideoCard
  },
  data() {
    return {
      inputText: '',
      mockData: [1, 2],
    }
  },
  watch: {
    videos() {
        store.dispatch('getVideos')
    }
  },
  methods: {
      async addVideo() {
        console.log("INPUT TEXT", this.inputText)
            await axios.post('https://9f36sdoad4.execute-api.us-east-1.amazonaws.com/videos', { 
                videoId: this.inputText
            })
            
            this.inputText = ''
        },
  },
  computed: {
    ...mapState(["videos"]),
  }
}
</script>

<style scoped>
#videosPage {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 8vh;
  left: 0;
  width: 100vw;
  height: 89vh;
  background: #f2f2f2;
}
#formContainer {
  width: 45%;
  height: 10%;
  margin-top: 2%;
}
#textInputContainer {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
}
#inputLabel {
  font-size: 18px;
  margin: 5px;
  color: #000;
}
#searchInput {
  width: 70%;
  height: 45%;
  border: 1px solid #7B7B7B;
  border-radius: 5px 0 0 5px;
}
#addButton {
  width: 30%;
  height: 51%;
  color: #fff;
  background: #1469e6;
  border-radius: 0 5px 5px 0;
  border: none;
}

#videosContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 85%;
}
</style>