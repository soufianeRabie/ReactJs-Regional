// Stagiare.js
import React from 'react';
import styles from './Stagiare.module.css';

function Stagiare({ stagiare }) {
    return (
        <div className={styles.Card}>
            <div className={styles.CardBody}>
                <div >
                    <img className={styles.stagiare_image} src={stagiare.image} alt="stagiare image" />
                </div>

                <div className={styles.card_footer}>
                    <span className={styles.stagiare_nom}>{stagiare.nom}</span>
                </div>
            </div>
        </div>
    );
}

export default Stagiare;
