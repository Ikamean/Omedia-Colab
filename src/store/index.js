import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    user: localStorage.getItem('userName'),
    error: '',
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, user){
      state.status = 'success'
      state.user = user
    },
    auth_error(state, error){
      state.status = 'error'
      state.error = error
    },
    logout(state){
      state.status = ''
    },
  },
  getters: {
    isLoggedIn: state => state.status,
    user: state => state.user,
    error: state => state.error
  },

  actions: {
    login({commit}, requestOptions){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        fetch("/api/login", requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result)
          const user = result.data.userName
          localStorage.setItem('userName', user)
          commit('auth_success', user)
          resolve(result)
        })
        .catch(err => {
          commit('auth_error', "Wrong credentials")
          reject(err)
        })
      })
    },
    logout({commit}){
      return new Promise((resolve) => {
        var requestOptions = {
          method: 'POST',
          body: '',
          redirect: 'follow',
          credentials: 'include',
        };
        fetch("/api/logout", requestOptions)
        .then(() => {
          commit('logout')
          localStorage.removeItem('userName')
          this.state.status = ''
          this.state.user = null
          resolve()
        })
      })
    },
  },
  modules: {
  }
})
