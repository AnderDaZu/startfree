import { createStore } from 'vuex'

import { countModel } from './modules/countModule'
import userModel from './modules/userModule'

export default createStore({
  // para definir propiedades
  state: { },
  getters: { },
  // para modificar la información de manera sincrona
  mutations: { },
  // para realizar llamadas asíncronas - actualizar datos de manera asíncrona
  actions: { },
  modules: {
    user: userModel,
    countM: countModel
  }
})
