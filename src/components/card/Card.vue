<template>
  <div class="card">
    <CardTitle>{{title}}</CardTitle>
    <FrontCard class="card-front" v-bind:posterUrl="posterUrl" />
    <CardBack class="card-back">
      <div class="btn-bar">
        <ul>
          <li>
            <CardButton class="btn" v-on:click="addNewFav">
              <font-awesome-icon icon="heart" />
            </CardButton>
          </li>
          <li>
            <CardButton class="btn">
              <font-awesome-icon icon="list-ul" />
            </CardButton>
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
import { getShowById } from "@/services/ApiService.js";
import { mapMutations, mapActions } from 'vuex';

export default {
  name: "Card",
  props: {
    posterUrl: String,
    title: String,
    imdbID: String
  },
  components: {
    FrontCard,
    CardButton,
    CardTitle,
    CardBack
  },
  methods: {
    ...mapMutations(["ADD_TO_FAV"]),
    ...mapActions(["addToFavorites"]),
    addNewFav: function () {
      getShowById(this.imdbID)
        .then(result => this.addToFavorites(result))
    }
  },
};
</script>

<style>
.card {
  display: inline-block;
  width:100%;
  height: inherit;
  position: relative;
}


.btn {
  width: 7rem;
  height: 7rem;
  font-size: 3rem;
}

.card:hover .card-front {
  filter: blur(.5rem);
}

.card:hover .card-back {
  animation: moveUp .5s ease-in-out;
  opacity: 1;
}


@keyframes moveUp {
  0% {
    opacity: 0;
    transform: translateY(20rem);
  }

  80% {
    transform: translateY(-1rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>