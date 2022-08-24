import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        videos: [],
    },

    mutations: {
        setVideos(state, payload) {
            state.videos = payload;
        },
    },

    actions: {
        async getVideos({ commit }) {
            const apiKeyVar = process.env.VUE_APP_YOUTUBE_API_KEY3;

            let response = await axios.get('https://9f36sdoad4.execute-api.us-east-1.amazonaws.com/videos')

            let youtubeElements = []

            for (let i = 0; i < response.data.length; i++) {
                let ids = response.data[i].videoId.slice(-11, response.data[i].videoId.length)
                youtubeElements.push(await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${ids}&key=${apiKeyVar}&part=snippet`))
            }

                commit('setVideos', youtubeElements)
        },
    },

    getters: {},
    
    modules: {}
});

export default store;