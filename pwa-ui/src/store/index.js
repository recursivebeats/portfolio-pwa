import Vue from 'vue'
import Vuex from 'vuex'

import authentication from './authentication'
import network from './network'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

  const Store = new Vuex.Store({
    modules: {
      authentication,
      network
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
})

export { Store }
export default Store
