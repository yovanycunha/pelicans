<template>
  <div class="card">
    <CardTitle>{{title}}</CardTitle>
    <!-- <FrontCard class="card-front" v-bind:posterUrl="posterUrl" /> -->
    <CardBack v-bind:posterUrl="posterUrl">
      <ul>
        <li>
          Plot: After saving Xandar from Ronan's wrath, the Guardians are now recognized as heroes. Now the team must help their leader Star Lord (Chris Pratt) uncover the truth behind his true heritage. Along the way, old foes turn to allies and betrayal is blooming. And the Guardians find that they are up against a devastating new menace who is out to rule the galaxy.
        </li>
        <li>
          Ano: 1990 
        </li>
        <li>
          Gênero: Comédia
        </li>
        <li>
          Diretor: James Gun
        </li>
      </ul>
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
    title: String
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
  position: absolute;
  bottom: 0;
  height: 10%;
  width: 100%;
}

.btn-bar ul li {
  display: inline;
}

.btn {
  width: 45%;
  
}
/* 
.card:hover .card-front{
  transform: rotateY(180deg);
  opacity: 0;
} */
/* 
.card:hover .card-front {
  filter: blur(.5rem);
} */

</style>