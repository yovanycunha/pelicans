<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul>
      <li v-for="(show, index) in searchedList" :key="index">
          <Card v-bind:posterUrl="show.Poster"/>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Card from '@/components/card/Card.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      search: ''
    }
  },
  computed: {
    ...mapState([
      'searchedList'
    ])
  },
  components: {
    HelloWorld,
    Card
  }
}
</script>

<style>
  li {
    list-style: none;
    display: inline-block;
  }
</style>
