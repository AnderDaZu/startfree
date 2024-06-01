const  userModel = {
    namespaced: true,
  
    state: {
      nombre: 'Anderson',
      apellido: 'Dazu',
    },
    getters: {
      nombreSize(state){
        return state.nombre.length
      },
      // para obtener información, definir métodos
      getFullName: (state) => {
        return `${state.nombre} ${state.apellido}`
      },
      fullNameSize: (state, getters) => {
        return getters.getFullName.length
      },
      apellidoSize(state){
        return state.apellido.length
      }
    },
    mutations: {
      actualizarNombre(state, nombre){
        state.nombre = nombre
      }
    },
    actions: {
      // context -> permite acceder a los estados, getters o mutations
      actualizarNombreAccion({commit}, nombre){ // destructuración de context
        // actualizarNombreAccion(context, nombre){
          return new  Promise((resolve) => {
            setTimeout(() => {
              // console.log('Actualizado en la base de datos')
              // commit -> permite ejecutar mutaciones
              // context.commit('actualizarNombre', nombre) // sin uso de la destructuración
              commit('actualizarNombre', nombre) // usando la destructuración
              resolve();
            }, 1500);
          });
        },
        async confirmarActualizacionNombre({ dispatch }, nombre){
          await dispatch('actualizarNombreAccion', nombre);
          console.log('Actualizado en la base de datos');
        }
    }
  }

  export default userModel