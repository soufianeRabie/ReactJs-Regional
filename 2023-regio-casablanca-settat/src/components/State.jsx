import React from 'react';
import {Card, CardBody, CardImg, CardText} from "react-bootstrap";

function State({ State}) {
    return (
        <Card className={"m-4"}>
            <CardBody>
                <CardImg src={State.image}/>
                <CardText>nom de paye {State.name} </CardText>
                <CardText>population de paye {State.population} </CardText>
                <CardText>nom de superficie {State.surfaceArea} </CardText>
            </CardBody>
        </Card>
    );
}

export default State;
