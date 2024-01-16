import states from "/src/pays.json"
import {
  ADD_VILLE,
  FETCH_USER_BY_API,
  MODIFY_POPULATION_OF_PAYS,
} from "../features/types.js";

const initialState = {
  states: states
}
console.log(states)
const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case ADD_VILLE:
       state.states.map((state)=>{
        console.log(  state.code ,action.code )
        if(state.code === action.code) {
          console.log("yes")
          console.log(state)
          state.cities.push(action.payload.city)
        }
      })
      break
    case  MODIFY_POPULATION_OF_PAYS:
       states.map(( state) =>{
         console.log(state)
        if (state.code === action.payload.code )
        {
          console.log("hello")
          console.log(state.population, action.payload.population)
          state.population = parseInt( action.payload.population)
        }
      })
      break
    case  FETCH_USER_BY_API :
      initialState.states = action.payload.states
      break;
    default:
      return state; // Return the state for any other action
  }
};
export  default reducer
