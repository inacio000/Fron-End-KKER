import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom";

import Home from "../Pages/Home";
import RussiaLife from "../Pages/Countries/Russia/RussiaLife";
import RussiaStudy from "../Pages/Countries/Russia/RussiaStudy";
import PolandLife from "../Pages/Countries/Poland/PolandLife";
import PolandStudy from "../Pages/Countries/Poland/PolandStudy";
import Services from "../Pages/About/Services";
import Kker from "../Pages/About/Kkker";
import AboutUs from "../Pages/About/AbouUs";
import Requirements from "../Pages/Inscription/Requirements";
import Universities from "../Pages/Inscription/Universities";
import Specialties from "../Pages/Inscription/Specialties";

function Routers() {
    return (
        <BrowserRouter>
            <Switch>

                <Route path="/home" element={<Home />} />
                <Route path="/russia_life" element={<RussiaLife /> } />
                <Route path="/russia_study" element={<RussiaStudy /> } />
                <Route path="/poland_life" element={<PolandLife /> } />
                <Route path="/poland_study" element={<PolandStudy /> } />
                <Route path="/service" element={<Services /> } />
                <Route path="/kker" element={<Kker /> } />
                <Route path="/about" element={<AboutUs /> } />
                <Route path="/req" element={<Requirements /> } />                
                <Route path="/universities" element={<Universities /> } />
                <Route path="/specialties" element={<Specialties /> } />
                
                <Route path="*" element={<Navigate to="/home" />} />

            </Switch>

        </BrowserRouter>
    )
}

export default Routers;