import {BrowserRouter, Route, Routes} from "react-router-dom";
import Menu from "./components/Menu.jsx";
import PoidIdeal from "./components/PoidIdeal.jsx";
import LivreList from "./components/LivreList.jsx";
import CovidDataList from "./components/CovidDataList.jsx";

function App() {

  return (
    <>
    <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path={"/"} index  />
            <Route path={"/livres"} element={<LivreList/>}/>
            <Route path={"/poid-ideal"} element={<PoidIdeal/>}/>
            <Route path={"/covid"} element={<CovidDataList/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
