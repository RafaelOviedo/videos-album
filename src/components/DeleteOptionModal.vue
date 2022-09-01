<template>
  <div id="deleteOptionModal">

    <div id="optionsContainer">
      <div id="labelContainer">
        <div id="textBox">
          <p id="label"><b>¿Are you sure you want to delete this video?</b></p>
        </div>
        <div id="closeButtonBox">
          <button id="cancelButton" @click="closeModal"><b>&times;</b></button>
        </div>
      </div>
      <div id="buttonsContainer">
        <div id="leftEmptyBox"></div>
        <div id="buttonsBox">
          <button id="whiteCancelButton" @click="closeModal"><b>Cancel</b></button>
          <button id="deleteButton" @click="deleteVideo(item.data.items[0].id)"><b>Delete</b></button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "DeleteOptionModal",
  props: {
    item: Object,
  },
  data() {
    return {}
  },
  methods: {
    async deleteVideo(elementId) {
      let AWSendpoint = 'https://9f36sdoad4.execute-api.us-east-1.amazonaws.com/videos';
      let response = await axios.get(AWSendpoint)
      let databaseInfo = response.data
      
      for (let i = 0; i < databaseInfo.length; i++) {
        if(databaseInfo[i].videoId === `https://www.youtube.com/watch?v=${elementId}` || databaseInfo[i].videoId === `https://youtu.be/${elementId}`) {
          await axios.delete(AWSendpoint, { 
            data: {
                videoId: databaseInfo[i].videoId
            }
          })
        }
      }
    },
    closeModal() {
      this.$emit('closeDeleteModal')
    },
  },
}
</script>

<style scoped>
#deleteOptionModal {
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

#optionsContainer {
  width: 45%;
  height: 30%;
  background: #fff;
  border-radius: 15px;
}
#labelContainer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50%;
}
#textBox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
}
#label {
  font-size: 17px;
}
#closeButtonBox {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 40%;
  height: 100%;
}
#cancelButton {
  width: 20%;
  height: 45%;
  border-radius: 7px;
  border: none;
  background: transparent;
  color: #000;
  font-size: 30px;
  cursor: pointer;
}

#buttonsContainer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50%;
}
#leftEmptyBox {
  width: 40%;
  height: 100%;
}
#buttonsBox {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 60%;
  height: 100%;
}
#whiteCancelButton {
  width: 45%;
  height: 35%;
  border-radius: 7px;
  border: 1px solid #1469e6;
  background: #fff;
  color: #1469e6;
  font-size: 13px;
  cursor: pointer;
}
#deleteButton {
  width: 45%;
  height: 35%;
  border-radius: 7px;
  border: none;
  background: #1469e6;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
}
</style>