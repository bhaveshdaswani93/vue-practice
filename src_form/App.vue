<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-bind:value="userDetail.email" 
                                v-on:input="userDetail.email = $event.target.value"
                                >
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input

                                type="password"
                                id="password"
                                class="form-control"
                                v-model.lazy="userDetail.password"
                                >
                    </div>
                    <p>{{ userDetail.password }}</p>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model="userDetail.age"

                                >
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="message"
                            ></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="sendMail"
                                    > Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"
                                    v-model="sendMail"
                                    > Send Infomail
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="gender"
                                > Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="gender"
                                > Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select
                            id="priority"
                            class="form-control"
                            v-model="selectedPriority"
                            >
                        <option :selected="priority === 'medium'" v-for="priority in priorities" v-bind:key="priority">{{priority}}</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                   <app-switch
                        v-model="switchValue"
                   ></app-switch>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            @click.prevent="submit"
                            >Submit!
                            
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail:{{ userDetail.email }}</p>
                        <p>Password:{{ userDetail.password }}</p>
                        <p>Age:{{ userDetail.age }}</p>
                        <p style="white-space:pre">Message: {{ message }} </p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="item in sendMail" v-bind:key="item">
                                {{item}}
                            </li>
                        </ul>
                        <p>Gender:{{ gender }}</p>
                        <p>Priority: {{ selectedPriority }} </p>
                        <p>Switched: {{ switchValue }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Switch from "./components/Switch.vue";
    export default {
        data(){
            return {
                userDetail:{
                    email:'',
                    password:'',
                    age:27
                },
                message:"This is the default message",
                sendMail:[],
                gender:'Male',
                priorities:['high','medium','low'],
                selectedPriority:"high",
                switchValue:true,
                submitted:false
            }
        },
        methods:{
          submit(){
            this.submitted = true;
          }  
        },
        components:{
            appSwitch:Switch
        }
    }
</script>

<style>

</style>
