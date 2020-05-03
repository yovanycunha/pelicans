<template>
  <StyledContainer>
    <Row>
        <Column :desktop="3" :tablet="4" :phone="12" v-for="(show, index) in searchedList" :key="index">
            <Card v-bind:posterUrl="show.Poster" v-bind:title="show.Title" v-bind:imdbID="show.imdbID"/>
        </Column>
    </Row>
  </StyledContainer>
</template>

<script>
import { Row } from "@/components/row/Row.js";
import Column from "@/components/column/Column.js";
import { StyledContainer } from "./Container";
import Card from '@/components/card/Card.vue';
import { mapState } from 'vuex';

export default {
  name: "Container",
  components: {
    Row,
    Column,
    StyledContainer,
    Card
  },
  computed: {
      ...mapState(["searchedList"])
  },
};
</script>

<style>
</style>