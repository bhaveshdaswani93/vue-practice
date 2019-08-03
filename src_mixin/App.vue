<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ filterData | toUpperCaseFilter | to-lowercase }}</p>
                <p>{{ filterData }}</p>
                <input type="text" v-model="searchText">
                <ul>
                    <li v-for="fruit in computedFruit " v-bind:key="fruit">{{fruit}}</li>
                </ul>
            </div>
        </div>
        <hr>
        <app-fruits></app-fruits>
    </div>
</template>

<script>
    import Fruits from "./components/Fruits";
    import { FruitMixinConst } from "./FruitMixin";
    export default {
        mixins:[FruitMixinConst],
        data() {
            return {
                filterData:"Hello There",
            }
        },
        components:{
            appFruits:Fruits
        },
        filters:{
            toUpperCaseFilter(value) {
                return value.toUpperCase();
            },
            filterFruit(fruits) {
                return fruits;
            }
        },
        created(){
            console.log('created from app');
        }   
    }
</script>

<style>

</style>
