<template>
    <div>
        <button class="btn btn-primary" @click="increaseCounter({by:3,delay:2000})">Increment Async</button>
        <button class="btn btn-primary" @click="decreaseCounter({by:3,delay:2000})">Decrement Async</button>
    </div>
</template>

<script>
    import { mapActions } from "vuex";
    export default {
        methods: {
          ...mapActions('counterModule',{
              increaseCounter:'asycIncrement',
              decreaseCounter:'asycDecrement'
          }),
        }
        
        
        
    }
</script>