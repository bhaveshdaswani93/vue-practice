<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded id: {{ $route.params.id }}</p>
        <router-link tag="button" class="btn btn-primary" :to="{name:'userEdit',params:{id:$route.params.id},query:{locale:'en',q:100},hash:'#data'}

        " >Edit User</router-link>
    </div>
</template>

<script>
export default {
    beforeRouteEnter(to,from,next) {
        console.log('inside component');
        if(false) {
            // alert("not allowed");
            next(false);
        } else {
            next();
        }
    }
}
</script>
