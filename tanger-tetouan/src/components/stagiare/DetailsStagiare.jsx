// DetailsStagiare.js
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Stagiare.module.css';
import styles1 from "./ListeStagiare.module.css"

function DetailsStagiare() {
    const params = useParams();
    const stagiares = useSelector(({ stagiares }) => stagiares);
    const [currentStagiare, setCurrentStagiare] = useState();


    useEffect(() => {
        const { nom } = params;
        const stagiaire = stagiares.find((stg) => stg.nom === nom);
        setCurrentStagiare(stagiaire)
    }, []);
    const displayDetailStagiare = () => {
        return (currentStagiare  ? <div className={styles.Card}>
                <div className={styles.CardBody}>
                    <div>
                        <img className={styles.stagiare_image} src={currentStagiare?.image} alt="stagiare image"/>
                    </div>

                    <div className={styles.card_footer}>
                        <div className={styles.stagiare_nom}>Nom: {currentStagiare?.nom}</div>
                        <div className={styles.stagiare_nom}>Prenom: {currentStagiare?.prenom}</div>
                        <div className={styles.stagiare_nom}>Filiere: {currentStagiare?.filiere}</div>
                    </div>
                </div>
            </div> :
            <div className={"text-center text-dark"} > no stagiare </div>
    )
    };

    return (
        <>
            <h1 className={"text-success text-center"}> {currentStagiare?.nom  + " " +currentStagiare?.prenom} Details  </h1>

           <div className={styles1.Cards}>
               {displayDetailStagiare()}
           </div>
        </>
    );
}

export default DetailsStagiare;
