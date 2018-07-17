/* eslint-disable */

import * as types from './mutation-types'

export const initJokes = ({commit}) => {
    fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => commit(types.INIT_JOKES, json))
  }
  
  export const addOneJoke = ({commit}) => {
    fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => commit(types.ADD_ONE_JOKE, json))
  }
  
  export const removeOneJoke = ({commit}, index)=>{
    commit(types.REMOVE_ONE_JOKE, index)
  }

  export const removeThenJoke = ({commit}, index)=>{
    commit(types.REMOVE_THEN_JOKE, index)
  }