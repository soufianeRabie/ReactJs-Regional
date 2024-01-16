import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import {Link} from "react-router-dom";

function IndependenceStatesYear() {
    const states = useSelector(state => state.states);

    return (
        <div className={"text-center"}>
            <ListGroup>
                {states.map((pay, key) => (
                   <Link key={key} className={"text-decoration-none"} to={`/independenceStates/${pay.independentYear}`}>
                       <ListGroup.Item >
                           Independent Year: <span className={"fw-bold"}>{pay.independentYear}</span>
                       </ListGroup.Item>
                   </Link>
                ))}
            </ListGroup>
        </div>
    );
}

export default IndependenceStatesYear;
