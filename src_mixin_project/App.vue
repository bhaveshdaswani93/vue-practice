<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ dummyText | reverseText }}</p>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->

                <p>{{ dummyText | countString }}</p>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>{{ reverseTextComputed }}</p>
                <p>{{ calCulateWordLength }}</p>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    import { WordMixin } from "./WordMixin";
    export default {
        mixins:[WordMixin],
        // data(){
        //     return {
        //         dummyText:"hello world"
        //     }
        // },
        // filters:{
        //     reverseText(value) {
        //         console.log(value);
        //         console.log(typeof value);
        //         return value.split('').reverse().join('')
        //     }
        // },
        // computed:{
        //     reverseTextComputed(){
        //         return this.dummyText.split('').reverse().join('')
        //     },
        //     calCulateWordLength() {
        //         return `${this.dummyText} (${this.dummyText.length})`
        //     }
        // }
    }
</script>

<style>
</style>
