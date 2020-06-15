import Vue from 'vue'
import Vuex from 'vuex'

import getter from './getters'
import actions from './actions'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)
export default new Vuex.Store({
    getter,
    actions,
    mutations,
    state
})