import { useState } from 'react';
import data from './imagesNizhny.json';
import Modal from '../../../components/Modal/Modal';

function NizhnyGallery() {
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item.url);
    };

    const handleRotationRight = () => {
        const totalLength = data.data.length;
        if(currentIndex +1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = data.data[0].url;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = data.data.filter((item) => {
            return data.data.indexOf(item) === newIndex;
        });
        
        const newItem = newUrl[0].url;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    }

    return (
        <div className='wrapper'>
            {data.data.map((item, index) => (
                <div key={index} className="wrapper-images">
                    {/* <p>{item.id}</p> */}
                    <img 
                        src={item.url} 
                        alt="" 
                        onClick={() => handleClick(item, index)}
                    />
                </div>
            ))}
            {clickedImg && (
                <Modal 
                    clickedImg={clickedImg} 
                    handleRotationRight={handleRotationRight}
                    setClickedImg={setClickedImg}
            />
            )}
        </div>
    );
}

export default NizhnyGallery;