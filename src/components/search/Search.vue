<template>
  <div class="input-field">
    <form @submit.prevent="searchShow">
      <input class="check" type="checkbox" id="search-toggle"/>
      <Input class="inpt" placeholder="Search here ..." v-model="search"/>
      <label for="search-toggle">
        <span >
          <font-awesome-icon class="icn" icon="search"  />
        </span>
      </label>
    </form>
  </div>
</template>

<script>
import { Input } from './Search';
import { getShowByTitle } from "@/services/ApiService";
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  name: "Search",
  components: {
      Input
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    ...mapState(["searchedList"])
  },
  methods: {
    ...mapMutations(["SEARCH_LIST"]),
    ...mapActions(["addToSearchedList"]),
    searchShow: function() {
      getShowByTitle(this.search).then(result => {
        this.addToSearchedList(result);
      });
    }
  }
};
</script>

<style>
.input-field {
  background-color: #232c23;
  padding: 1rem 3rem;
  margin-bottom: 3rem;
  transition: all .4s;
}

.icn {
  font-size: 1.7rem;
  color: #fafafa;
  padding: 1rem 1rem 0 1rem;
}

.check {
  display: none;
  transition: all .5s;
}

.check:checked~.inpt{
  opacity: 1;
  animation: appear .5s ease-in-out;
}

/* 
@keyframes appear {
  0% {
    opacity: 0;
    width: 0;
  }
  80% {
    width: 31rem;
  }
  100% {
    opacity: 1;
    width: 30rem;
  }

} */

</style>
