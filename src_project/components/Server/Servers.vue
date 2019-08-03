<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server v-for="server in servers" v-bind:server="server"></app-server>
        </ul>
    </div>
</template>

<script>
    import ServerDetail from './ServerDetails.vue'
    import Server from "./Server.vue";
    export default {
        data(){
            return {
                servers:[
                    {id:1,status:'normal'},
                    {id:2,status:'abnormal'},
                    {id:3,status:'critical'},
                    {id:4,status:'normal'},
                ]
            }
        },
        components:{
            appServer:Server
        },
        methods:{
            updateServerStatus(status,key){
                this.servers[key].status = status;
            }
        }
        
    }
</script>

<style>

</style>
