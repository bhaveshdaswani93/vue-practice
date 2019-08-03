<template>
    <div>
        <button class="btn btn-primary" @click="increaseCounter(6)">Increment</button>
        <button class="btn btn-primary" @click="decreaseCounter(3)">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from "vuex";
    export default {
        // methods: {
        //     increment() {
        //         console.log('increment');
        //         // this.$store.state.counter+=1;
        //         this.$store.commit('increaseCounter');
        //         // this.$emit('updated', 1);
        //     },
        //     decrement() {
        //         console.log('decrement');
        //         this.$store.commit('decreaseCounter');
        //         // this.$store.state.counter-=1;
        //     }
        // }

        methods: {
            // ...mapActions(['increaseCounter','decreaseCounter']),
            increaseCounter(payload) {
                this.$store.dispatch('counterModule/incrementAction',payload);
            },
            decreaseCounter(payload) {
                this.$store.dispatch('counterModule/decrementAction',payload);
            }

        }
        
        
        
    }
</script>