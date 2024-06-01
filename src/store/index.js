import { createStore } from 'vuex'

export default createStore({
  state: {
    // para guardar información
    nombre: 'Anderson',
    apellido: 'Dazu',
    count: 1,
    is_disabled: false
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
    // para modificar la información, definir métodos
    increment(state){
      if (state.count == 0) state.is_disabled = false
      state.count++
    },
    decrement(state){
      if(state.count > 0) state.count--

      if ( state.count == 0 ) state.is_disabled = true
    },
    actualizarNombre(state, nombre){
      state.nombre = nombre
    }
  },
  // para realizar llamadas asíncronas
  actions: {
    // context -> permite acceder a los estados, getters o mutations
    actualizarNombreAccion({commit}, nombre){ // destructuración de context
    // actualizarNombreAccion(context, nombre){
      setTimeout(() => {
        console.log('Actualizado en la base de datos')
        // commit -> permite ejecutar mutaciones
        // context.commit('actualizarNombre', nombre) // sin uso de la destructuración
        commit('actualizarNombre', nombre) // usando la destructuración
      }, 1500);
    }
  },
  modules: {
  }
})
