
import Header from "./components/Header/Header.jsx";
import { BrowserRouter as Router, Outlet, Route, Routes } from "react-router-dom";
import AjouterStagiare from "./components/stagiare/AjouterStagiare.jsx";
import ListeStagiare from "./components/stagiare/ListeStagiare.jsx";
import DetailsStagiare from "./components/stagiare/DetailsStagiare.jsx";
import React from "react";

function App() {
    return (
        <>
            <div>

                <Router>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<ListeStagiare />} />
                        <Route path="/addStagiare" element={<AjouterStagiare />} />
                        <Route path="/:nom" element={<DetailsStagiare />} />
                    </Routes>
                </Router>
            </div>

        </>
    );
}

export default App;
