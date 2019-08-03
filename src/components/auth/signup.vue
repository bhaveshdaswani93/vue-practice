<template>
  <div id="signup">
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input" :class="{invalid:$v.email.$error}">
          <label for="email">Mail</label>
          <input
                  type="email"
                  id="email"
                  @blur="$v.email.$touch()"
                  v-model="email">
                  <p v-if="!$v.email.em">Enter Email is invalid</p>
                  <p v-if="!$v.email.req">Email is required</p>
        </div>
        <!-- {{ $v.email }} -->
        <div class="input" :class="{invalid:$v.age.$error}">
          <label for="age">Your Age</label>
          <input
                  type="number"
                  id="age"
                  @blur="$v.age.$touch()"
                  v-model.number="age">
                  <p v-if="!$v.age.minValue">Min age required is {{ $v.age.$params.minValue.min }}</p>
                  <p v-if="!$v.age.required">Age is reqired</p>
        </div>
        <div class="input" :class="{invalid:$v.password.$error}">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  v-model="$v.password.$model">
                  
        </div>
        <div class="input" :class="{invalid:$v.confirmPassword.$error}">
          <label for="confirm-password">Confirm Password</label>
          <input
                  type="password"
                  id="confirm-password"
                  v-model="$v.confirmPassword.$model">
        </div>
        <div class="input">
          <label for="country">Country</label>
          <select id="country" v-model="country">
            <option value="usa">USA</option>
            <option value="india">India</option>
            <option value="uk">UK</option>
            <option value="germany">Germany</option>
          </select>
        </div>
        <div class="hobbies">
          <h3>Add some Hobbies</h3>
          <button @click="onAddHobby" type="button">Add Hobby</button>
          <div class="hobby-list">
            <div
                    class="input"
                    v-for="(hobbyInput, index) in hobbyInputs"
                    :key="hobbyInput.id"
                    :class="{invalid:$v.hobbyInputs.$each[index].value.$error}"
                    >
              <label :for="hobbyInput.id">Hobby #{{ index }}</label>
              <input
                      type="text"
                      :id="hobbyInput.id"
                      v-model="hobbyInput.value"
                      @blur="$v.hobbyInputs.$each[index].value.$touch()"
                      >
              <button @click="onDeleteHobby(hobbyInput.id)" type="button">X</button>
              <p v-if="!$v.hobbyInputs.$each[index].value.required">Input Field is required</p>
              <p v-if="!$v.hobbyInputs.$each[index].value.minLen">Min length should be:{{ $v.hobbyInputs.$each[index].value.$params.minLen.min }}</p>
            </div>
          </div>
          <p v-if="$v.hobbyInputs.$invalid">Please Provide proper hobby</p>
        </div>
        <!-- {{ $v.hobbyInputs }} -->
        <div class="input inline" :class="{invalid:$v.terms.$error}">
          <input type="checkbox" id="terms" @change="$v.terms.$touch()" v-model="terms" >
          <label for="terms">Accept Terms of Use</label>
          

        </div>
        <div class="submit">
          <button type="submit" :disabled="$v.$invalid">Submit</button>
          <!-- {{$v}} -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import { required, email, minValue, sameAs, minLength, requiredUnless } from 'vuelidate/lib/validators'
import { setTimeout } from 'timers';
  export default {
    data () {
      return {
        email: '',
        age: null,
        password: '',
        confirmPassword: '',
        country: 'usa',
        hobbyInputs: [],
        terms: false
      }
    },
    validations:{
      email:{
        req:required,
        em:email,
        asyncEmail(email) {
          if(email === '') return true;
         return  axios.get(`/users.json?orderBy=\"email\"&equalTo=\"${email}\"`)
          .then(res=>{
            console.log(res)
            return Object.keys(res.data).length === 0;
          }).catch(err=>console.log(err))
          // return true
        }
      },
      age:{
        required,
        minValue:minValue(18)
        
      },
      password:{
        required,
        minLen:minLength(6)
      },
      confirmPassword:{
        sameAsOth:sameAs('password')
      },
      terms:{
        required(value,vm) {
          return vm.country === 'germany'?true:value;
        },
        
      },
      hobbyInputs:{
        minLen:minLength(2),
        required,
        $each:{
          value:{
            required,
            minLen:minLength(8)
          }
        }
      }

    },
    methods: {
      onAddHobby () {
        const newHobby = {
          id: Math.random() * Math.random() * 1000,
          value: ''
        }
        this.hobbyInputs.push(newHobby)
      },
      onDeleteHobby (id) {
        this.hobbyInputs = this.hobbyInputs.filter(hobby => hobby.id !== id)
      },
      onSubmit () {
        const formData = {
          email: this.email,
          age: this.age,
          password: this.password,
          confirmPassword: this.confirmPassword,
          country: this.country,
          hobbies: this.hobbyInputs.map(hobby => hobby.value),
          terms: this.terms
        }
        console.log(formData)
        this.$store.dispatch('signUp',formData)
        // axios.post('/users.json',formData)
        // .then(res => console.log(res))
        // .catch(err => console.log(err))
      }
    }
  }
</script>

<style scoped>
  
  .signup-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input.inline label {
    display: inline;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
  }

  .input select {
    border: 1px solid #ccc;
    font: inherit;
  }

  .hobbies button {
    border: 1px solid #521751;
    background: #521751;
    color: white;
    padding: 6px;
    font: inherit;
    cursor: pointer;
  }

  .hobbies button:hover,
  .hobbies button:active {
    background-color: #8d4288;
  }

  .hobbies input {
    width: 90%;
  }

  .submit button {
    border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #521751;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }
  .invalid input {
    background-color:#d68989;

  }
  .invalid label {
    color:#d68989;
    /* background-color:#a8d689; */
  }
</style>