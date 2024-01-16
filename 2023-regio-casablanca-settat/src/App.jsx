
import './App.css'

import States from "./components/States.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Menu from "./Menu.jsx";
import IndependenceStatesYear from "./components/IndependenceStatesYear.jsx";
import IndependenceStatesInYear from "./components/IndependenceStatesInYear.jsx";
import AddVille from "./components/AddVille.jsx";
import ModifyStatePopulation from "./components/ModifyStatePopulation.jsx";

function App() {


  return (
    <>
    <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path={'/'} index={true} />
            <Route path={'/States'} element={<States/>} />
            <Route path={'/AddVille'} element={<AddVille/>} />
            <Route path={'/independenceStates'} element={<IndependenceStatesYear/>} />
            <Route path={'/independenceStates/:independentYear'} element={<IndependenceStatesInYear/>} />
            <Route path={'/modifyPopulation'} element={<ModifyStatePopulation/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
