
<template>
  <ul class="col-md-4 list-group">
    <VideoListItem :video="selectedVideo"/>
    <VideoListItem v-for="video in notSelectedVideos" :video="video" :key="video.etag" @click.native="videoSelected(video)"/>
  </ul>
</template>

<script>
import VideoListItem from './VideoListItem'
export default {
  name: 'VideoList',
  props: ['videos',
    'selectedVideo'],
  components: {
    VideoListItem
  },
  computed: {
    notSelectedVideos: function () {
      return this.videos.filter(video => video.etag !== this.selectedVideo.etag)
    }
  },
  methods: {
    videoSelected: function (video) {
      this.$emit('videoSelected', { video: video })
    }
  }
}
</script>

<style scoped>

</style>
