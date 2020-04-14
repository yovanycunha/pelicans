<template>
  <div class="hello">
    <form @submit.prevent="searchShow">
      <input type="text" v-model="search" placeholder="Seach here..." />
    </form>
  </div>
</template>

<script>
import ApiService from '@/services/ApiService';
export default {
  name: 'HelloWorld',
  data() {
    return {
      search: ''
    }
  },
  methods: {
    searchShow: function(){
      ApiService.fetchShowsGeneric(this.search)
    },
    get: function () {
      ApiService.fetchShowsGeneric()
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
