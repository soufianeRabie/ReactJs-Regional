2import React from 'react';
import {Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

function Menu() {
    return (
       <div >
           <Navbar className={"navbar nav w-75 m-auto d-flex justify-content-center align-items-center"}>
               <Link className={"nav-link"} to={"/poid-ideal"}>Poid Ideal</Link>
               <Link className={"nav-link"} to={"/livres"}>livres</Link>
               <Link className={"nav-link"} to={"/covid"}>Covid</Link>
           </Navbar>
       </div>
    );
}

export default Menu;
