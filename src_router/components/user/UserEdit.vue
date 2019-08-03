<template>
    <div>
        <h3>Edit the User</h3>
        <p>User Locale:{{ $route.query.locale }}</p>
        <p>User Analytics:{{ $route.query.q }}</p>
        <button class="btn btn-primary" @click="confirmed=true">Confirm</button>
        <div style="height:700px"></div>
        <p id="data">This is some data</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            confirmed:false
        }
    },
    beforeRouteLeave(to,from,next) {
        if(this.confirmed) {
            next();
        } else {
            if(confirm("Are you sure?")) {
                next();
            } else {
                next(false);
            }
        }
    }
}
</script>
