<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>{{ username }}</p>
        <button @click="changeUserName">Change User Name</button>

        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                    :userName="username"
                    @userValueChange="username=$event"
                    :editParentUserName="editParentUserName"
                    :userAge="age"
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                :userAge="age"
                @ageChanged="age=$event"
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data() {
            return {
                username:"weight",
                age:27
            }
        },
        methods:{
            changeUserName() {
                this.username="height";
            },
            editParentUserName() {
                this.username="change from child";
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
