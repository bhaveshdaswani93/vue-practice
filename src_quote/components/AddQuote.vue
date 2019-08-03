<template>
    <div class="row">
        <textarea ref="quotetext" name="quotetext" id="" cols="30" rows="10"></textarea>
        <button @click="addQuote">addQuote</button>
        </div>
    </div>   
</template>

<script>
export default {
    props:['currentNumberOfQuote','maxQuote','quotes'],
    methods:{
        addQuote(){
            if(this.currentNumberOfQuote >= this.maxQuote)
            {
                alert('Max Quote reached');
                return;
            }
            let quote = this.$refs.quotetext.value;
            // console.log(quote.value);
            this.quotes.push(quote);

        }
   }
}
</script>

<style>

</style>


