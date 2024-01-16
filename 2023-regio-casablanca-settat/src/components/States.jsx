import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import State from "./State.jsx";
import Filter from "./Filter.jsx";
import {setCountries} from "../redux/features/actions.js";

function States() {
    const states = useSelector(state => state.states)
    let [currentStates, setCurrentStates] = useState([]);
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true);
    console.log(states)


// States.jsx
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await fetch("https://FAKEAPI.com/v3.1/all");
                const data = await response.json();
                setCurrentStates(states)
                dispatch(setCountries(data));

            } catch (error) {
                console.error("Error fetching data", error);
            }
            setIsLoading(false)
        };


        fetchApi();


    }, []); // Make sure to include any dependencies if needed


    console.log(currentStates)
    const handleSearch= (populationNumber , continent)=>{
       let FilterStates = states
        if(populationNumber){
            FilterStates = states.filter(state => state.population >= parseInt(populationNumber))
        }
        if(continent){
            FilterStates =  states.filter(state => state.continent === continent)
        }
        if(populationNumber && continent) {
           FilterStates = states.filter(state => state.population >= parseInt(populationNumber) && state.continent === continent)
        }

        setCurrentStates(FilterStates)
    }

    if(isLoading) {
        return <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    return (
        <div>
            <Filter onSearch={handleSearch}/>
            <h1 className={"text text-info"}> hello in page states </h1>
            <div className={"d-flex flex-wrap justify-content-center"}>
                {currentStates.map((state, key) => <State key={key} State={state}/>)}
            </div>
        </div>
    );
}

export default States;
