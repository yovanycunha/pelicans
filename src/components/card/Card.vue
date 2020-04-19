<template>
  <div class="card">
    <CardContent class="content" v-bind:posterUrl="posterUrl" />
    <CardTitle>{{title}}</CardTitle>
  </div>
</template>

<script>
import CardContent from "./CardContent";
import CardButton from "./CardButton";
import {CardTitle} from './CardTitle';

export default {
  name: "Card",
  props: {
    posterUrl: String,
    title: String
  },
  components: {
    CardContent,
    CardButton,
    CardTitle
  }
};
</script>

<style>
.card {
  display: inline-block;
  margin: 0.5rem;
  width: 25rem;
  height: 42rem;
  position: relative;
  transition: all 1.5s;
}

.title {
  content: 'lol'
}
</style>