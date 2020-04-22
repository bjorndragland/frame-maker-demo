import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pointCoordinates: {
      TL_X: 0,
      TL_Y: 0,
      TR_X: 0,
      TR_Y: 0,
      BL_X: 0,
      BL_Y: 0,
      BR_X: 0,
      BR_Y: 0
    },
    arrowCoordinates: {
      LA_X: 0,
      LA_Y: 0,
      TA_X: 0,
      TA_Y: 0,
      RA_X: 0,
      RA_Y: 0,
      BA_X: 0,
      BA_Y: 0
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
