import Vue from 'vue'
import Vuex from 'vuex'
import axios from "./axios_cust_intance";
import globalAxios from "axios";
import router from "./router";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // localId:null,
    authToken:null,
    user:null
  },
  mutations: {
    authSuccess(state,authUser) {
      state.authToken = authUser.idToken
      // state.localId = authUser.localId
    },
    clearAuth(state) {
      state.authToken = null;
    },
    saveUser(state,user) {
      state.user = user
    }
  },
  actions: {
    logout({commit}) {
      commit('clearAuth')
      localStorage.removeItem('authToken')
      localStorage.removeItem('expiresIn')
      router.replace('/signin1')
    },
    
    signUp({commit,dispatch},userData) {
      axios.post('accounts:signUp?key=AIzaSyD4NxX0g7a7aHhMmVGyJ96Kn-SCc7JC6zA', {
        email:userData.email,
        password:userData.password,
        returnSecureToken:true
      })
        .then(res => {
          console.log(res)
          commit('authSuccess',res.data)
          dispatch('storeUser',userData)
          localStorage.setItem('authToken',res.data.idToken)
          localStorage.setItem('expiresIn', new Date().getTime() + res.data.expiresIn * 1000 )
          setTimeout(() => { dispatch('logout') }, res.data.expiresIn * 1000)
        })
        .catch(err => console.log(err))
    },
    storeUser({commit,state},user) {
      globalAxios.post(`/users.json?auth=${state.authToken}`, user)
        .then(res => {
          console.log(res),
            commit('saveUser',user);
        })
        .catch(err => console.log(err))
    },
    loginUser({ commit,dispatch }, userData) {
      axios.post('accounts:signInWithPassword?key=AIzaSyD4NxX0g7a7aHhMmVGyJ96Kn-SCc7JC6zA', {
        email: userData.email,
        password: userData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          commit('authSuccess', res.data)
          localStorage.setItem('authToken', res.data.idToken)
          localStorage.setItem('expiresIn', new Date().getTime() + res.data.expiresIn * 1000)
          setTimeout(() => { dispatch('logout') }, res.data.expiresIn * 1000)
        })
        .catch(err => console.log(err))
    },
    checkAlreadyLogin({commit}) {
      let authToken = localStorage.getItem('authToken')
      if(!authToken) {
        return;
      }
      let expiresIn = localStorage.getItem('expiresIn')
      if (expiresIn <= new Date().getTime()) {
        return;
      }
      commit('authSuccess', { idToken: authToken})
    },
    fetchUser({commit,state}) {
      globalAxios.get(`/users.json?auth=${state.authToken}`)
        .then(res => {
          let users = [];
          const data = res.data;
          for (let key in data) {
            const user = data[key];
            data.id = key
            users.push(user);
          }
          // this.email = users[0].email;
          commit('saveUser', users[0])
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  }
})