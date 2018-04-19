<template>
  <div id="app">
    <SearchBar @termChange="handleTerm"/>
    <VideoDetail :video="selectedVideo"/>
    <VideoList :videos="videos" :selectedVideo="selectedVideo" @videoSelected="setVideoSelected"/>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import VideoList from './components/VideoList'
import axios from 'axios'
const API_KEY = 'AIzaSyCbwLwNN-h4LUgIALLOY38_xaQj0Nq_i4Q'

export default {
  name: 'App',
  data () {
    return {
      videos: [],
      selectedVideo: {}
    }
  },
  components: {
    SearchBar,
    VideoDetail,
    VideoList
  },
  methods: {
    handleTerm: function (payload) {
      searchYoutubeVideos(payload.term)
        .then(videos => {
          this.selectedVideo = videos[0]
          this.videos = videos
        })
    },
    setVideoSelected: function (payload) {
      this.selectedVideo = payload.video
    }
  }
}
function searchYoutubeVideos (term) {
  var ROOT_URL = 'https://www.googleapis.com/youtube/v3/search'
  var params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video'
  }
  return axios.get(ROOT_URL, { params: params })
    .then(response => response.data.items)
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
