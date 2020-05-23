import { store } from 'quasar/wrappers'
import Vuex from 'vuex'
import { PracticeModule } from '../store/practice/practice'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface RootState {
  // Define your own store structure, using submodules if needed
  // example: typeof exampleState;
  example: unknown;
}

export default store(function ({ Vue }) {
  Vue.use(Vuex)

  const Store = new Vuex.Store({
    modules: {
      PracticeModule
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV
  })

  return Store
})
