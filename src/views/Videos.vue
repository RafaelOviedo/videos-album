<template>
  <div>
    <div id="videosPage">
      <div id="formContainer">
        <p id="inputLabel"><b>Add new video</b></p>
        <form id="textInputContainer">
          <input id="searchInput" type="text" v-model="inputText" placeholder="Add">
          <button id="addButton" @click.prevent="addVideo"><b>Add</b></button>
        </form>
      </div>
      
      <div id="spinner" v-if="isLoading" class="spinner"></div>

      <div id="videosContainer">
          <VideoCard :item="item" v-for="(item) in videos.slice(numOfPage, numOfPage + 6)" :key="item.data.items[0].id"/>
      </div>

      <transition name="fade">
      <Alert v-if="isErrorModalOpen" @closeErrorModal="closeErrorModal"/>
      </transition>

      <div id="prevNextCButtonsContainer">
        <button 
          class="leftAndRightButtons"
          @click="previousPage" 
          :disabled="numOfPage === 0"
        >&#8592;</button>
        <button
          class="leftAndRightButtons"
          @click="nextPage" 
          :disabled="numOfPage === videos.length - 2"
        >&#8594;</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import VideoCard from '../components/VideoCard';
import Alert from '../components/Alert';
import store from '../store/index'
import axios from 'axios'

export default {
  name: "Videos",
  components: {
    VideoCard,
    Alert
  },
  data() {
    return {
      inputText: '',
      isLoading: false,
      numOfPage: 0,
      videosPerPage: 0,
      isErrorModalOpen: false,
    }
  },
  mounted() {
    this.videosPerPage = this.videos.length - 6;
  },
  updated() {
    this.videosPerPage = this.videos.length - 6;
  },
  watch: {
    videos() {
        store.dispatch('getVideos')
    }
  },
  methods: {
    async addVideo() {
      let AWSendpoint = 'https://9f36sdoad4.execute-api.us-east-1.amazonaws.com/videos';
      let baseUrl = 'https://www.youtube.com/watch?v=';
      let baseUrl2 = 'https://youtu.be/';
      let input = this.inputText;

        if(!input.includes(baseUrl) || !input.includes(baseUrl2)) {
            this.isErrorModalOpen = true,

            this.inputText = ''
        }

        if(input.includes(baseUrl) && input.length >= 43) {
            this.isErrorModalOpen = false
            input = input.replace(input, input.slice(0, 43))

            this.isLoading = true;
            await axios.post(AWSendpoint, { videoId: input })
            this.isLoading = false;
            
            this.inputText = ''
        }

        if(input.includes(baseUrl2) && input.length >= 28) {
            this.isErrorModalOpen = false
            input = input.replace(input, input.slice(0, 28))

            this.isLoading = true;
            await axios.post(AWSendpoint, { videoId: input })
            this.isLoading = false;
            
            this.inputText = ''
        }
    },
    previousPage() {
      if (this.numOfPage > 0) {
          this.numOfPage = this.numOfPage - 2;
      }
    },
    nextPage() {
      if (this.numOfPage < this.videosPerPage) {
          this.numOfPage = this.numOfPage + 2;
      }
    },
    closeErrorModal() {
      this.isErrorModalOpen = false;
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
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8vh;
  left: 0;
  width: 100vw;
  height: 92vh;
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
  height: 50%;
}
#inputLabel {
  font-size: 18px;
  margin: 5px;
  color: #000;
}
#searchInput {
  width: 70%;
  height: 90%;
  border: 1px solid #7B7B7B;
  border-radius: 5px 0 0 5px;
}
#addButton {
  width: 30%;
  height: 100%;
  color: #fff;
  background: #1469e6;
  border-radius: 0 5px 5px 0;
  border: none;
  cursor: pointer;
}

#videosContainer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 50vw;
  height: 70%;
}

#prevNextCButtonsContainer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 15%;
  height: 5%;
}
.leftAndRightButtons {
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 30px;
}
#spinner {
  top: 85%;
  left: 90%;
}
</style>