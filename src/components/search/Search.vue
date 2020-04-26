<template>
  <div class="input-field">
    <form @submit.prevent="searchShow">
      <Check class="check" type="checkbox" id="search-toggle"/>
      <label for="search-toggle">
        <span >
          <font-awesome-icon class="icn" icon="search"  />
        </span>
      </label>
      <Input class="inpt" placeholder="Search here ..." v-model="search"/>
    </form>
  </div>
</template>

<script>
import { Input } from './Search';
import { Check } from "./Collapse";
import { getData } from "@/services/ApiService";
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  name: "Search",
  components: {
      Input,
      Check
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
      getData(this.search).then(result => {
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
  transition: all .4s;
}

.check:checked {
  transform: scaleX(10);
}

.check:checked~.inpt{
  opacity: 1;
  animation: appear 1s ease-in-out;
}


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

}

</style>
