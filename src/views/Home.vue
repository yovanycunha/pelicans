<template>
  <div class="home">
    <Search/>
    <Container/>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/search/Search.vue';
import Card from "@/components/card/Card.vue";
import Container from "@/components/container/Container.vue";

import { mapState } from "vuex";

export default {
  name: "Home",

  computed: {
    ...mapState(["searchedList"])
  },
  components: {
    Search,
    Card,
    Container
  }
};
</script>

<style>

li {
  list-style: none;
  display: inline-block;
}

</style>
