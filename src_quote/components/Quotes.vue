<template>
    <div class="row">
        <app-quote v-for="(quote,key) in quotes" :serverIndex="key"
            @serverDelete="deleteServer($event)" v-bind:key="key"
        >
            <p>{{quote}}</p>
        </app-quote>
    </div>
</template>
<script>
import Quote from "./Quote.vue";
export default {
    props:['quotes'],
    components:{
        appQuote:Quote
    },
    methods:{
        deleteServer(index){
            this.quotes.splice(index,1)
        }
    }
}
</script>


