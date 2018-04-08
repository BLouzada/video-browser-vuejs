
<template>
<div>
  <h1 v-if="isEmpty(video)">Loading..</h1>
  <div v-if="!isEmpty(video)" className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe id="youtube-video-iframe" title="youtube embed video player" className="embed-responsive-item" :src="'https://www.youtube.com/embed/' + video.id.videoId"/>
      </div>
      <div className="details">
        <div className="details-title">{{ video.snippet.title }}</div>
        <div className="details-description">{{ video.snippet.description }}</div>
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

</style>
