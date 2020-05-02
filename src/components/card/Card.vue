<template>
  <div class="card">
    <CardTitle>{{title}}</CardTitle>
    <FrontCard class="card-front" v-bind:posterUrl="posterUrl" />
    <CardBack class="card-back" v-bind:posterUrl="posterUrl">
      <div class="btn-bar">
        <ul>
          <li>
            <CardButton class="btn">Butão</CardButton>
          </li>
          <li>
            <CardButton class="btn">Butão</CardButton>
          </li>
        </ul>
      </div>
    </CardBack>
  </div>
</template>

<script>
import FrontCard from "./CardContent";
import CardBack from './CardBack';
import CardButton from "./CardButton";
import {CardTitle} from './CardTitle';

export default {
  name: "Card",
  props: {
    posterUrl: String,
    title: String,
    plot: String,
    genre: String,
    year: String,
    director: String
  },
  components: {
    FrontCard,
    CardButton,
    CardTitle,
    CardBack
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

.btn-bar {
  position: relative;
  bottom: 0;
  height: 10%;
  width: 100%;
}

.btn-bar ul li {
  display: inline;
}

.btn {
  width: 7rem;
  height: 7rem;
}

.card:hover .card-front {
  filter: blur(.5rem);
}

.card:hover .card-back {
  opacity: 1;
}

</style>