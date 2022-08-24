<template>
  <div id="videoCard">
    <div id="imageContainer">
      <img class="thumbImage" :src="item.data.items[0].snippet.thumbnails.high.url" alt="thumb">
      <button id="deleteButton" @click="deleteVideo(item.data.items[0].id)">X</button>
      
      <!-- <button id="deleteButton">X</button> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "VideoCard",
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
    }
  },
}
</script>

<style scoped>
#videoCard {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 20%;
  height: 25%;
  /* background: #DFDFDF; */
}

#imageContainer {
  width: 80%;
  height: 100%;
  cursor: pointer;
  /* border: 2px solid black; */
}
.thumbImage {
  width: 100%;
  height: 100%;
  border: 2px solid black;
}
#deleteButton {
    position: relative;
    bottom: 100%;
    left: 85%;
    cursor: pointer;
    border: 1px solid black;
}
</style>