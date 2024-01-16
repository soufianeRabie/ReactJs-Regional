import {ADD_VILLE, FETCH_USER_BY_API, MODIFY_POPULATION_OF_PAYS} from "./types.js";


export const setCountries = (states)=>({
  type: FETCH_USER_BY_API,
  payload : {
    states : states
  }
})
export const addVille= (code , city)=>({
  type : ADD_VILLE,
  code : code ,
  payload:{
    city
  }
})

export const modifyPopulationPays= (selectedState , newPopulation) => ({
  type :MODIFY_POPULATION_OF_PAYS,
  payload :{
    code : selectedState,
    population : newPopulation
  }
})


