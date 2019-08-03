<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <hr>
                <app-counter></app-counter>
                <hr>
                <app-counter-async></app-counter-async>
                <hr>
                <input type="text" v-model="valueForInput">
                {{ valueForInput }}
               
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import CounterAsync from "./components/CounterAsync.vue";

    export default {
        components: {
            appCounter: Counter,
            appResult: Result,
            appCounterAsync:CounterAsync
        },
        computed:{
            valueForInput: {
                get() {
                    return this.$store.getters.getInputValue;
                },
                set(value) {
                    this.$store.dispatch('changeInputValueAction',value)    
                }
                
            },
            // directState() {
            //     return this.$store.state.counterModule.counter;
            // }
        },
        methods:{
            changeValue($event) {
                this.$store.dispatch('changeInputValueAction',$event.target.value)
            }
        }
    }
</script>

