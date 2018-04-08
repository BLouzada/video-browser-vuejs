<template>
  <div id="app">
    <SearchBar @termChange="handleTerm"/>
    <VideoDetail :video="selectedVideo"/>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import axios from 'axios'
const API_KEY = 'AIzaSyCbwLwNN-h4LUgIALLOY38_xaQj0Nq_i4Q'

searchYoutubeVideos('surfboards').then(videos => {
  this.videos = videos
  this.selectedVideo = this.videos[0]
  console.log('this.selectedVideo', this.selectedVideo)
})

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
    VideoDetail
  },
  methods: {
    handleTerm: function (payload) {
      searchYoutubeVideos(payload.term)
        .then(videos => {
          this.videos = videos
          this.selectedVideo = this.videos[0]
        })
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
