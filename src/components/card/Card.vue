<template>
  <div class="card">
    <FrontCard class="card-front" v-bind:posterUrl="posterUrl" />
    <CardTitle>{{title}}</CardTitle>
  </div>
</template>

<script>
import FrontCard from "./CardContent";
import CardButton from "./CardButton";
import {CardTitle} from './CardTitle';

export default {
  name: "Card",
  props: {
    posterUrl: String,
    title: String
  },
  components: {
    FrontCard,
    CardButton,
    CardTitle
  }
};
</script>

<style>
.card {
  display: inline-block;
  width:100%;
  height: inherit;
  position: relative;
}
/* 
.card:hover .card-front{
  transform: rotateY(180deg);
  opacity: 0;
} */

</style>