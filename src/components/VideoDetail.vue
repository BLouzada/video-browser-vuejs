
<template>
<div>
  <h1 id="no-video" v-if="isEmpty(video)">Loading...</h1>
  <div v-if="!isEmpty(video)" class="video-detail col-md-8">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe id="youtube-video-iframe" title="youtube embed video player" class="embed-responsive-item" :src="'https://www.youtube.com/embed/' + video.id.videoId"/>
      </div>
      <div class="details">
        <div class="details-title">{{ video.snippet.title }}</div>
        <div class="details-description">{{ video.snippet.description }}</div>
      </div>
  </div>
</div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'VideoDetail',
  props: ['video'],
  methods: {
    isEmpty (value) {
      return _.isEmpty(value)
    }
  }
}
</script>

<style scoped>
.video-detail .details {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
