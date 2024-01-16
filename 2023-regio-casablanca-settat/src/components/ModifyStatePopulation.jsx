import React, {useState} from 'react';
import {Button, Form, FormGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {MODIFY_POPULATION_OF_PAYS} from "../redux/features/types.js";

function ModifyStatePopulation() {

    const states = useSelector(state => state.states)
    const [selectedState, setSelectedState] = useState('');
    const [newPopulation, setNewPopulation] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setSelectedState(e.target.value);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch({
            type :MODIFY_POPULATION_OF_PAYS,
            payload :{
                code : selectedState,
                population : newPopulation
            }

        })
        navigate("/States")
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>

                <div className={"m-3 w-75 mx-auto"}>
                    <FormGroup>
                        <Form.Select value={selectedState} onChange={handleChange}>
                            <option value="">Select a state</option>
                            {states.map((state, key) => (
                                <option key={key} value={state.code}>
                                    {state.name}
                                </option>
                            ))}
                        </Form.Select>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>new population</Form.Label>
                        <Form.Control name={"newPopulation"} onChange={(e)=>setNewPopulation(e.target.value)}/>
                    </FormGroup>

                    <FormGroup>
                        <Button className={"btn btn-primary m-3"} type={"submit"}> modify population</Button>
                    </FormGroup>
                </div>
            </Form>
        </div>
    );
}

export default ModifyStatePopulation;
