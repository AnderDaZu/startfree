import { createStore } from 'vuex'

export default createStore({
  state: {
    // para guardar información
    nombre: 'Anderson',
    apellido: 'Dazu'
  },
  getters: {
    // para obtener información, definir métodos
    getFullName: (state) => {
      return `${state.nombre} ${state.apellido}`
    },
    fullNameSize: (state, getters) => {
      return getters.getFullName.length
    },
    nombreSize(state){
      return state.nombre.length
    },
    apellidoSize(state){
      return state.apellido.length
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
