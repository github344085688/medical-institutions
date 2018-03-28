/**
 * Created by admin on 2017/8/15.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'

Vue.use(Vuex);
const state = {
  language: '',


};
const mutations = {
    [types.LANGUAGE]: (state, data) => {
      localStorage.setItem('language', JSON.stringify(data));
      state.language = data;
    }
  }
;
const actions = {
  setlanguage({commit}, data) {
    commit(types.LANGUAGE, data)
  },
};
export default new Vuex.Store({
  state,
  mutations,
  actions

})
