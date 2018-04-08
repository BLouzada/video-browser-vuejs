<template>
  <div id="app">
    <img src="./assets/logo.png">
    <SearchBar @termChange="handleTerm"/>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'
import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyCbwLwNN-h4LUgIALLOY38_xaQj0Nq_i4Q'

const searchYtVideos = function (term) {
  return YTSearch({ key: API_KEY, term }, function (videos) {
    return videos
  })
}
searchYtVideos('surfboards')
export default {
  name: 'App',
  data () {
    return {
      videos: []
    }
  },
  components: {
    SearchBar
  },
  methods: {
    handleTerm: function (payload) {
      this.videos = searchYtVideos(payload.term)
    }
  }
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
