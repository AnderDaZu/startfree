export const countModel = {
    namespaced: true,
  
    state: {
      count: 1,
      is_disabled: false
    },

    getters: { },
    
    mutations: {
      increment(state){
        if (state.count == 0) state.is_disabled = false
        state.count++
      },
      decrement(state){
        if(state.count > 0) state.count--
  
        if ( state.count == 0 ) state.is_disabled = true
      },
    }
}