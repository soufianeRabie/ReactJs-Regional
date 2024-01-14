import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Stagiare from "./Stagiare.jsx";
import styles from "./ListeStagiare.module.css"
import {Link} from "react-router-dom";

function ListeStagiare() {

    const stagiares = useSelector(({stagiares})=>stagiares)
    console.log(stagiares)

    const displayStagiare = ()=>{
        return (stagiares?.map((stagiare , key)=>{
            return (
                <Link key={key}  className={styles.strechedLink} to={`/${stagiare.nom}`}>
                    <Stagiare key={key} stagiare={stagiare}/>
                </Link>
            )
        }))
    }
    return (
        <>
            <h1 className={"text-success text-center"}> Liste de stagiares </h1>
            <div className={styles.Cards}>
                {displayStagiare()}
            </div>
        </>

    );
}

export default ListeStagiare;
