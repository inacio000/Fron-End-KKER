import { useState } from 'react';
import Modal from '../Modal/Modal';

function Gallery(props) {
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handelClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item.url);
    };

    const handelRotationRight = () => {
        const totalLength = props.data.data.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = props.data.data[0].url;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = props.data.data.filter((item) => {
            return props.data.data.indexOf(item) === newIndex;
        });

        const newItem = newUrl[0].url;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    }

    const handelRotationLeft = () => {
        const totalLength = props.data.data.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = props.data.data[totalLength - 1].url;
            setClickedImg(newUrl);
        }

        const newIndex = currentIndex - 1;
        const newUrl = props.data.data.filter((item) => {
            return props.data.data.indexOf(item) === newIndex;
        });

        const newItem = newUrl[0].url;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    }

    return (
        <div className='wrapper'>
            {props.data.data.map((item, index) => (
                <div key={index} className="wrapper-images">
                    {/* <p>{item.id}</p> */}
                    <img
                        src={item.url}
                        alt=""
                        onClick={() => handelClick(item, index)}
                    />
                </div>
            ))}
            {clickedImg && (
                <Modal
                    clickedImg={clickedImg}
                    handelRotationRight={handelRotationRight}
                    setClickedImg={setClickedImg}
                    handelRotationLeft={handelRotationLeft}
                />
            )}
        </div>
    );
}

export default Gallery;