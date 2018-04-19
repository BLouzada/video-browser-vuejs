<template>
  <li  v-if="video.snippet" class="list-group-item">
    <div class="video-list media">
      <div class="media-left">
        <img alt="video thumbnail" class="media-object" :src="video.snippet.thumbnails.default.url" />
      </div>
      <div class="media-body">
        <div class="media-heading">{{video.snippet.title}}</div>
      </div>
    </div>
  </li>
</template>

<script>

export default {
  name: 'VideoListItem',
  props: ['video'],
  methods: {
    videoSelected: function () {
      this.$emit('videoSelected', { video: this.video })
    }
  }
}
</script>

<style scoped>
li{
  cursor: pointer;
}
</style>
