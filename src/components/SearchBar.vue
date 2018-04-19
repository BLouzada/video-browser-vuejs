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
      term: 'reactjs'
    }
  },
  methods: {
    inputTermChange: _.debounce(function (event) {
      this.$emit('termChange', { term: this.term })
    }, 300)
  },
  beforeMount () {
    this.$emit('termChange', { term: this.term })
  }
}
</script>

<style scoped>
.search-bar {
  margin: 20px;
  text-align: center;
}

.search-bar input {
  width: 75%;
}
</style>
