<template>
  <div class="home">
    <HelloWorld/>
    <Container/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Card from "@/components/card/Card.vue";
import Container from "@/components/container/Container.vue";

import { mapState } from "vuex";

export default {
  name: "Home",

  computed: {
    ...mapState(["searchedList"])
  },
  components: {
    HelloWorld,
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
