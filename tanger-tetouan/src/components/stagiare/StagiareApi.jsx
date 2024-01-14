import React, {useEffect, useState} from 'react';
import stagiare from "./Stagiare.jsx";

function StagiareApi() {
    const [Stagiares, setStagiares] = useState([])


    const displayStagiares = ()=>{
        return Stagiares.map((stagiare , key) =>{
            return (
            <tr key={key}>
                <td>{stagiare.nom}</td>
                <td>{stagiare.preonom}</td>
                <td>{stagiare.image}</td>
                <td>{stagiare.filier}</td>
            </tr>
            )
        })
    }
    useEffect(() => {
        fetch("http://ofppt.ma/api/stagiares").then((response) =>setStagiares(response.data))
    }, []);
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>nom</th>
                    <th>prenom</th>
                    <th>filiere</th>
                    <th>image</th>
                </tr>
                </thead>

                <tbody>
                {displayStagiares()}
                </tbody>
            </table>
        </>
    );
}

export default StagiareApi;
