<template>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <button @click="fruits.push('Alphanso')">Add Data To Mixin</button>
                <input type="text" v-model="searchText">
                <ul>
                    <li v-for="fruit in computedFruit " v-bind:key="fruit">{{fruit}}</li>
                </ul>
            </div>
        </div>
</template>

<script>
    import { FruitMixinConst } from "../FruitMixin";
    export default {
        mixins:[FruitMixinConst],
        created(){
            console.log('created from fruits');
        }
        // data() {
        //     return {
        //         fruits:['Bango','Banana','Apple'],
        //         searchText:""
        //     }
        // },
        // computed: {
        //     computedFruit(){
        //         return this.fruits.filter((fruit)=>{
        //             return fruit.match(this.searchText)
        //         });
        //     }
        // }

    }
</script>

<style>

</style>
