import React from 'react';
import {createStore} from "redux";
import Carte from "./Carte.jsx";
import {Provider} from "react-redux";


const defaultState = [
    {
        'titre': 'Restful java webservices',
        'auteur': 'David lu',
        'edition': 'Packt',
        'poster': 'https://m.media-amazon.com/images/I/71tCVS8JEIL._AC_UF894,1000_QL80_.jpg',
        'likes': 0,
    },
    {
        'titre': 'Restful API with Node.js',
        'auteur': 'Fernando daglio',
        'edition': 'Apress',
        'poster': 'https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-3715-1',
        'likes': 0,
    },
    {
        'titre': 'Restful Web Services CookBook',
        'auteur': 'Subbu Allamarju',
        'edition': 'OREILLY',
        'poster': 'https://m.media-amazon.com/images/I/81BSr5FJJfL._AC_UF1000,1000_QL80_.jpg',
        'likes': 0,
    },
]

const LivreReducer = (state = defaultState , action) =>{
    switch (action.type) {
        case "likes":
            return state.map((livre , key) =>{
                if(key === action.id){
                    return {...livre , likes: livre.likes + 1}
                }
                else{
                    return livre
                }
            })
        default: return  state

    }
}
const store = createStore(LivreReducer)
function LivreList() {

    const livres = store.getState()

    const displayLivres = () => {
       return  livres.map((livre , key)=><Carte key={key} id={key} livre={livre}/>)
    }
    return (
  <Provider store={store}>
      <h1 className={"text text-center text-info my-5"}>livres page </h1>
      <div className={"d-flex w-75 m-auto gap-5"}>
          {displayLivres()}
      </div>
  </Provider>
  );
}

export default LivreList;
