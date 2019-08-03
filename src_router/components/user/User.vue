<template>
    <div>
        <h1>The User Page</h1>
        <!-- <p>Currently Loaded Id: {{ hello }}</p> -->
        <button @click="goToHome()" class="btn btn-primart">Go To Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

    // data() {
    //     return {
    //         id:this.$route.params.id
    //     }
    // },
    methods:{
        goToHome(){
            this.$router.push({name:'home'})
        }
    },
    // watch:{
    //     '$route'(to,from){
    //         this.id = to.params.id;
    //     }
    // }
}
</script>
