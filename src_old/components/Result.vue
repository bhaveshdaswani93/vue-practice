<template>
    <div>
        <p>Counter is: {{ counter }}</p>
        <p>Counter clicks: {{ counterClick }}</p>
    </div>
    
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
    //    computed:{
    //        counter() {
    //            return this.$store.getters.doubleCounter;
    //        },
    //        counterClick() {
    //            return this.$store.getters.getCounterClick;
    //        }
    //    }
        computed:{
            ...mapGetters('counterModule',{
                counter:'doubleCounter',
                counterClick:'getCounterClick'
                }
            ),
            customComp(){
                return '123'
            }
        }
    }
</script>