import { createStore } from "vuex";
import axios from "axios";
const apiKeyVar = process.env.VUE_APP_YOUTUBE_API_KEY;

const store = createStore({
    state: {
        videos: [],
        videoId: '',
        isReproducerOpen: false,
    },

    mutations: {
        setVideos(state, payload) {
            state.videos = payload;
        },
        setVideoId(state, payload) {
            state.videoId = payload;
        },
        toggleReproducer(state) {
            state.isReproducerOpen = !state.isReproducerOpen;
        },
    },

    actions: {
        async getVideos({ commit }) {
            let response = await axios.get('https://9f36sdoad4.execute-api.us-east-1.amazonaws.com/videos')

            let youtubeElements = []

            for (let i = 0; i < response.data.length; i++) {
                let ids = response.data[i].videoId.slice(-11, response.data[i].videoId.length)
                youtubeElements.push(await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${ids}&key=${apiKeyVar}&part=snippet`))
            }
                commit('setVideos', youtubeElements)
        },
        toggleReproducer({ commit }) {
            commit('toggleReproducer')
        },
        setVideoId({ commit }, payload) {
            commit('setVideoId', payload)
        },
    },

    getters: {},
    
    modules: {}
});

export default store;