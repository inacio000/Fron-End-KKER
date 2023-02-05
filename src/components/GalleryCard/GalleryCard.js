import { NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const text = [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Lorem ipsum dolor sit amet consectetur adipisicing elit.`
]

function GalleryCard(props) {
    return (
        <>
            <NavBar />
            <div style={{width: '100%', backdropFilter: 'blur(8px)'}}>
                <div className="col">
                    {props.dataCard.dataCard.map((data, index) => ( 
                        <div key={index} className="card" style={{backgroundImage: `url(${data.bgImage})`}}>
                            <NavLink to={data.link}>
                                <h2>{data.city}</h2>
                                <p>{text}</p>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default GalleryCard;