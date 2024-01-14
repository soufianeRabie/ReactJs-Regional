import React from 'react';
import {useDispatch, useSelector} from "react-redux";

// eslint-disable-next-line react/prop-types
function Like({id}) {

    const livre = useSelector((state)=>state.find((livre , key) => key === id))
    console.log(livre)
    const dispatch = useDispatch()
    const handleClick = () => {
        console.log("yes")
        dispatch({type : "likes" , id} )
    }
    return (
        <div>
            <button onClick={handleClick}> Like ({livre.likes})</button>
        </div>
    );
}

export default Like;
