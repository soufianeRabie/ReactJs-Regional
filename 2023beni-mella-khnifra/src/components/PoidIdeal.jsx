import React, {  useState } from 'react';
import female from '../assets/images/femmeLogo.png';
import male from '../assets/images/maleLogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function PoidIdeal() {
    const [height, setHeight] = useState('');
    const [genre, setGenre] = useState('');
    const [weight, setWeight] = useState(0);
    const [error, setError] = useState('');
    // const [isSubmit, setIsSubmit] = useState(false);

    const validateHeight = (value) => {
        if (isNaN(value)) {
            setWeight(0);
            setError('La taille doit être un entier');
        } else if (value < 150) {
            setWeight(0);
            setError('La taille minimum est: 150cm');
        } else {
            setHeight(value);
            setError('');
        }
    };

    const handleChange = (e) => {
        const value = parseInt(e.currentTarget.value);
        validateHeight(value);
    };

    const handleGenderChange = (e) => {
        setGenre(e.target.value);
    };

    const handleSbumit = (e) => {
        e.preventDefault();

        if (!genre) {
            setError('Choisissez un genre');
            return;
        }

        const calculatedWeight =
            genre === 'Home'
                ? height - 100 - ((height - 150) / 4)
                : genre === 'Femme'
                    ? height - 100 - ((height - 150) / 2.5)
                    : 0;

        if (calculatedWeight > 0) {
            setError('');
            setWeight(calculatedWeight);
        } else {
            setError('Le poids ne peut pas être calculé');
        }
    };

    return (
        <div className={'d-flex justify-content-center w-25 m-auto flex-column'}>
            <h1 className={"text text-info text-center mb-5"}> Calculer Poid ideal </h1>
            <form onSubmit={handleSbumit}>
                <div>
                    <label>Taille en cm </label>
                    <br/>
                    <input type={'text'} name={'height'} onChange={handleChange}/>
                </div>
                <div className={'d-flex '}>
                    <div className={'my-3 '}>
                        <select name={'genre'} onChange={handleGenderChange}>
                            <option value="">Choisissez un genre</option>
                            <option value="Home">Home</option>
                            <option value="Femme">Femme</option>
                        </select>
                    </div>
                    <div className={'ml-md-3'}>
                        {genre === 'Home' ? (
                            <img className={'mx-5'} width={'30px'} height={'60px'} src={male} alt="Male Logo"/>
                        ) : genre === 'Femme' ? (
                            <img width={'30px'} height={'60px'} src={female} alt="Female Logo"/>
                        ) : (
                            ''
                        )}
                    </div>
                </div>

                <div className="w-100 h-25 border border-2 border-light my-3 ">
                    {error && <span className="text text-danger">{error}</span>}
                    {!error && weight > 0 && <span className="text text-success">Le poids est {weight} kg</span>}
                </div>
                <div>
                    <input type={'submit'} className={'btn btn-primary'} value={'Calculer'}/>
                </div>
            </form>
        </div>
    );
}

export default PoidIdeal;
