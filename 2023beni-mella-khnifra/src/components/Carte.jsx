import React from 'react';
import Like from "./Like.jsx";

function Carte({id , livre}) {
    return (

        <div className="card mb-4" style={{width: '18rem'}}>
            <img className="card-img-top" src={livre.poster} alt={livre.titre}/>
            <div className="card-body">
                <h5 className="card-title">{livre.title}</h5>
                <p className="card-text">Author: {livre.auteur}</p>
                <p className="card-text">Edition: {livre.edition}</p>
            </div>
            <div className="card-footer text-center">
                <Like  id={id}/>
            </div>
        </div>
    );
}

export default Carte;
