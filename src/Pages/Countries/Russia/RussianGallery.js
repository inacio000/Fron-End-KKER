import { NavLink } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBar";

function RussianGallery() {
    return (
        <>
            <NavBar />
            <div style={{width: '100%', backdropFilter: 'blur(8px)'}}>
                <div className="col">
                    <div className="card card1">
                        <NavLink to={`/nizhny-gallery`}>
                            <h2>Nizhny Novgorod</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </NavLink>
                    </div>
                    <div className="card card2">
                        <NavLink to={`/caluga-gallery`}>
                            <h2>Caluga</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </NavLink>
                    </div>
                    <div className="card card3">
                        <NavLink to={`/kirov-gallery`}>
                            <h2>Kirov</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </NavLink>
                    </div>
                    <div className="card card4">
                        <NavLink to={`/poland-gallery`}>
                            <h2>Polônia</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </NavLink>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default RussianGallery;