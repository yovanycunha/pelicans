<template>
  <div class="page">
    <form @submit.prevent="searchShow">
      <input class="input" type="text" v-model="search" placeholder="Search here ..."/>
    </form>
  </div>
</template>

<script>
import {getData} from '@/services/ApiService';
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  name: 'HelloWorld',
  components:{
  },
  data() {
    return {
      search: '',
    }
  },
  computed: {
    ...mapState([
      'searchedList'
    ])
  },
  methods: {
    ...mapMutations([
      'SEARCH_LIST'
    ]),
    ...mapActions([
      'addToSearchedList'
    ]),
    searchShow: function(){
        getData(this.search)
          .then((result) => {
            this.addToSearchedList(result)
          })
    },
  },
}
</script>

<style>
  .page{
    background-color: #f5f5f5;
    padding: 1rem 0;
    width: 95vw;
  }

  .input{
    padding-left: 1rem;
    border: none;
    height: 3rem;
    margin: auto;
  }

</style>
