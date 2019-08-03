<template>
    <div class="col-sm-3" @click="deleteQuote" >
        <slot></slot>
    </div>
</template>
<script>
export default {
    props:['serverIndex'],
    methods:{
        deleteQuote(){
            this.$emit('serverDelete',this.serverIndex);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: rgb(66, 66, 66);
        color:#fff;
        padding: 50px;
    }
    div:hover {
        background-color: #ec6464d8;
        cursor: pointer;
    }

</style>
