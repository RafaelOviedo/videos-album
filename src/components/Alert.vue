<template>
  <div id="deleteOptionModal">

    <div id="optionsContainer">
        <div id="textBox">
          <p id="label"><b>
            The link format must be: 
              <br>
               <u>https://www.youtube.com/watch?v=</u> + videoId
              <br>
              or
              <br>
              https://youtu.be/ + videoId
              <br>
              <br>
               For example: 
               <br>
               <u>https://www.youtube.com/watch?v=-_Yf3LhTQfw</u>
               <br>
               <u>https://youtu.be/-_Yf3LhTQfw</u>
          </b></p>
        </div>
        <div id="closeButtonBox">
          <button id="cancelButton" @click="closeModal"><b>&times;</b></button>
        </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Alert",
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
    closeModal() {
      this.$emit('closeErrorModal')
    },
  },
}
</script>

<style scoped>
#deleteOptionModal {
  display: flex;
  justify-content: center;
  align-items: flex-start;
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

#optionsContainer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  height: 35%;
  background: #fff;
  border-radius: 15px;
  border: 5px solid red;
  margin-top: 1%;
}
#textBox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
}
#label {
  font-size: 16px;
  line-height: 1.7;
}
#closeButtonBox {
  width: 10%;
  height: 100%;
}
#cancelButton {
  position: relative;
  top: -10%;
  left: 30%;
  width: 20%;
  height: 45%;
  border-radius: 7px;
  border: none;
  background: transparent;
  color: #000;
  font-size: 30px;
  cursor: pointer;
}
</style>