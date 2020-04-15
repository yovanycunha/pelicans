<template>
    <div class="card">
        <CardContent v-bind:posterUrl="posterUrl" />
        <CardButton primary/>
    </div>
</template>

<script>
import CardContent from './CardContent';
import CardButton  from "./CardButton";

export default {
    name:'Card',
    props: {
        posterUrl: String,
        btnColor: String
    },
    components: {
        CardContent,
        CardButton
    }
}
</script>

<style>
    .card{
        display: inline-block;
        margin: .5rem;
        width: 25rem;
        height: 37rem;
    }

    .card:hover{
        filter: blur(.3rem);
    }

</style>