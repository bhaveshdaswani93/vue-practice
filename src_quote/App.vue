<template>
    <div class="container">
        <app-header
            :currentNumberOfQuote="currentNumberOfQuote"
            :maxQuote="maxQuote"
        ></app-header>
        <app-add-quote
            :currentNumberOfQuote="currentNumberOfQuote"
            :maxQuote="maxQuote"
            :quotes="quotes"
        ></app-add-quote>
        <app-quotes
            :quotes="quotes"
        ></app-quotes>
    </div>
</template>

<script>
    import AddQuote from "./components/AddQuote.vue";
    import Quotes from "./components/Quotes.vue";
    export default {
        data(){
            return {
                maxQuote:10,
                quotes:[
                    'This is the intial quotes'
                ]
            }
        },
        components:{
          appAddQuote:AddQuote,
          appQuotes:Quotes
        },
        computed:{
            currentNumberOfQuote(){
                return this.quotes.length;
            }
        }
    }
</script>

<style>
</style>
