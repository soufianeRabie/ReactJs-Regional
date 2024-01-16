import React, {useEffect, useState} from 'react';
import { Form, FormGroup } from 'react-bootstrap';

function Filter({ onSearch }) {
    const [populationNumber, setPopulationNumber] = useState('');
    const [selectedState, setSelectedState] = useState('');


    useEffect(() => {
        onSearch(populationNumber, selectedState);
    }, [populationNumber , selectedState]);

    return (
        <div>
            <Form >
                <FormGroup>
                    <label>Search by Population:</label>
                    <input
                        className={'w-25 mx-auto'}
                        type="number"
                        value={populationNumber}
                        onChange={(e) => setPopulationNumber(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Search by Continent:</label>
                    <select
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                    >
                        <option value="">All Continents</option>
                        <option value="africa">Africa</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        {/* Add more continents as needed */}
                    </select>
                </FormGroup>
            </Form>
        </div>
    );
}

export default Filter;
