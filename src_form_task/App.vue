<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <!-- <div class="form-group">
                        <label for="fullname">Fullname</label>
                        <input
                                type="text"
                                id="fullname"
                                class="form-control"
                                v-model="fullname"
                                >
                    </div> -->
                    <app-full-name v-model="userName"></app-full-name>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="email"
                                >
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input

                                type="password"
                                id="password"
                                class="form-control"
                                v-model="password"
                                >
                    </div>
                    <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    Store Data
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Yes"
                                v-model="storeData"
                                > Yes
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="No"
                                v-model="storeData"
                                > No
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            @click.prevent="submit"
                            >Submit!
                            
                    </button>
                </div>
            </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name:{{fullname}} </p>
                        <p>Mail:{{email}} </p>
                        <p>Password:{{password}} </p>
                        <p>Store in Database?:{{storeData}} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from "./components/Fullname.vue";
    export default {
        data(){
            return {
                userName:{
                    firstName:'',
                    lastName:''
                },
                // fullname:'',
                email:'',
                password:'',
                storeData:'Yes',
                isSubmitted:false
            }
        },
        components:{
            appFullName:FullName
        },
        computed:{
            fullname(){
                return this.userName.firstName+' '+this.userName.lastName
            }
        },
        methods:{
            submit(){
                this.isSubmitted = true;
            }
        }
    }
</script>

<style>
</style>
