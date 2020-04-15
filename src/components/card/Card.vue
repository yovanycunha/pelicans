<template>
    <div class="card">
        <CardContent/>
        <CardButton>butão</CardButton>
        <CardButton>butão</CardButton>
        <CardButton>butão</CardButton>
    </div>
</template>

<script>
import {CardContent} from './CardContent';
import { CardButton } from "./CardButton";

export default {
    name:'Card',
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
    }
</style>