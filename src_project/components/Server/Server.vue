<template>
<li class="list-group-item" @click="serverClick">
    <p>Server Id:{{ server.id }}</p>
</li>
</template>

<script>
    import { serverBus } from "../../main";
    export default {
        props:['server'],
        methods:{
            serverClick(){
                serverBus.$emit('serverClick',this.server)
            }
        }
    }
</script>


<style scoped>
    li {
        cursor: pointer;
    }
</style>