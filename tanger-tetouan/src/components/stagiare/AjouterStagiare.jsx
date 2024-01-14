// AjouterStagiare.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStagiare } from '../../redux/StagiareSlice.js';
import { useNavigate } from 'react-router-dom';
import styles from './AjouterStagiare.module.css';

function AjouterStagiare() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('initState');
    const [filiere, setFiliere] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const values = {
            nom,
            prenom,
            image,
            filiere,
        };
        dispatch(addStagiare(values));
        navigate('/');
    };

    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="image">Image</label>
                    <input type="text" name="image" onChange={(e) => setImage(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="nom">Nom</label>
                    <input type="text" name="nom" onChange={(e) => setNom(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="prenom">Prenom</label>
                    <input type="text" name="prenom" onChange={(e) => setPrenom(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="filiere">Filiere</label>
                    <input type="text" name="filiere" onChange={(e) => setFiliere(e.target.value)} />
                </div>

                <div>
                    <input type="submit" className={styles.input} />
                </div>
            </form>
        </div>
    );
}

export default AjouterStagiare;
