import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";

function Routers() {
    return (
        <BrowserRouter>
            <Switch>

                <Route path="/home" element={<Home />} />
                <Route path="/About" element={<About />} />
                
                <Route path="*" element={<Navigate to="/home" />} />

            </Switch>

        </BrowserRouter>
    )
}

export default Routers;