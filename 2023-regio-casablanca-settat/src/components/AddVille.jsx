import React, {useState} from 'react';
import {Button, Form, FormGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {ADD_VILLE} from "../redux/features/types.js";
import {addVille} from "../redux/features/actions.js";

function AddVille() {

    const [villeName, setVilleName] = useState("")
    const [villePopulation, setVillePopulation] = useState("")
    const [villeDistrict, setVilleDistrict] = useState("")
    const [IsCapital, setIsCapital] = useState(false)
    const states = useSelector(state => state.states)
    const [selectedState, setSelectedState] = useState('');

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setSelectedState(e.target.value);
        console.log(e.target.value)
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        const city = {
            "name" :villeName,
            "population" :villePopulation ,
            "district" :villeDistrict,
            "capital" :IsCapital
        }
        console.log(selectedState)
        dispatch(addVille(selectedState ,city))
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
                        <Form.Label>Ville</Form.Label>
                        <Form.Control name={"villeName"} onChange={(e)=>setVilleName(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label> Ville population</Form.Label>
                        <Form.Control name={"villePopulation"}  onChange={(e)=>setVillePopulation(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Ville District</Form.Label>
                        <Form.Control name={"villeDistrict"}  onChange={(e)=>setVilleDistrict(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>isCapital</Form.Label>
                        <Form.Check name={"isCapital"} onChange={(e)=>setIsCapital(e.target.checked)}/>
                    </FormGroup>
                    <FormGroup>
                        <Button type={"submit"} className={"btn btn-primary"} >add ville</Button>
                    </FormGroup>
                </div>
            </Form>
        </div>
    );
}

export default AddVille;
