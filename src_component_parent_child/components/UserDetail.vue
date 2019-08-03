<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Name: {{userName}}</p>
        <p>UserAge:{{userAge}}</p>
        <button @click="changeUserName">Edit Name</button>
        <button @click="editParentUserName()">Edit Name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';
    export default {
        props:{
            userName:{
                required:true,
                type:String
            },
            editParentUserName:{
                type:Function
            },
            userAge:{
                type:Number
            }
        },
        methods:{
            changeUserName(){
                this.userName="hello";
                this.$emit('userValueChange',this.userName)
            },
            
        },
        created(){
            eventBus.$on('ageChanged',(data)=>{
                this.userAge = data;
            })
        }
    }
    
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
