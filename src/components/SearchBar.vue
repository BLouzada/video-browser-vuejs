<template>
 <div class="search-bar">
    <input v-model="term" v-on:keydown="inputTermChange"/>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'SearchBar',
  data () {
    return {
      term: 'surfboards'
    }
  },
  methods: {
    inputTermChange: _.debounce(function (event) {
      this.$emit('termChange', { term: this.term })
    }, 300)
  }

}
</script>

<style scoped>

</style>
