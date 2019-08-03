<template>
    <div>
        <div v-if="!server">
            <p>Please Select server.</p>
        </div>
        <div v-else>
            <p>
                Server Id: {{ server.id }}
            </p>
            <p>
                Server Status: {{ server.status }}
            </p>
            <button @click="changeStatusToNormal">Change Status to Normal</button>
        </div>
        
        
    </div>

</template>

<script>
    import { serverBus } from "../../main";
    export default {
        data(){
            return {
                server:null
            }
        },
        methods:{
            changeStatusToNormal($event) {
                console.log($event);
                this.server.status = 'normal';
            }
            
        },
        created(){
            serverBus.$on('serverClick',(server)=>{
                this.server = server;
            })
        }
    }
</script>

<style>

</style>
