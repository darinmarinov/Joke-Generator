/* eslint-disable */

import * as types from "../store/mutation-types"

export const mutations = {
  [types.INIT_JOKES](state, payload) {
    state.jokes.push(...payload)
  },
  [types.ADD_ONE_JOKE](state, payload) {
    state.jokes.push(payload)
  },
  [types.REMOVE_ONE_JOKE](state, index) {
    state.jokes.splice(index,1)
  },
  [types.REMOVE_THEN_JOKE](state, index) {
    state.jokes.splice(index,10)
  }
};
