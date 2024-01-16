import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import State from "./State.jsx";

function IndependenceStatesInYear() {

    const {independentYear} = useParams()
    const states = useSelector(({states}) =>states)
    const [statesWithSameYearIndependent, setStatesWithSameYearIndependent] = useState([]);


    useEffect(() => {
      setStatesWithSameYearIndependent(states.filter((state)=>state.independentYear === parseInt(independentYear)))
    }, []);


    return (
        <div>
            <div className={"d-flex flex-wrap justify-content-center"}>
                {statesWithSameYearIndependent.map((state, key) => <State key={key} State={state}/>)}
            </div>
        </div>
    );
}

export default IndependenceStatesInYear;
