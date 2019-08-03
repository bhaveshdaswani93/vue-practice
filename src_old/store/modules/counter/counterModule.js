import {actions} from "./actions";
const state = {
  counter: 5
}

const getters = {
  doubleCounter (state) {
    return state.counter * 2
  },
  getCounterClick (state) {
    return (state.counter * 2) + ' clicks'
  }
}

const mutations = {
  increaseCounter (state, by) {
    state.counter += by
  },
  decreaseCounter (state, by) {
    state.counter -= by
  }
}



export default {
  state,
  getters,
  mutations,
  actions
}
