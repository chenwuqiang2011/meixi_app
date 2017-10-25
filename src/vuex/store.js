import Vue from 'vue'
import Vuex from 'vuex'

import home from '../component/home/home.js';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home
    }
})