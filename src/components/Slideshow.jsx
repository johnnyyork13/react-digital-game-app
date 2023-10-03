import React from 'react';
import './styles/Slideshow.css';
import { v4 as uuidv4 } from 'uuid';

export default function Slideshow(props) {

    //map all of the images
    const [currentImage, setCurrentImage] = React.useState(props.screenshots[1].image)

    //console.log(props.game.short_screenshots);
    function handleUpdateImage(e) {
        setCurrentImage(e.target.src);
    }

    const mappedImages = props.screenshots.map((image, index) => {
        return index > 0 && <img 
                    key={uuidv4()}
                    src={image.image} 
                    className="image-thumb" 
                    onClick={handleUpdateImage}    
                />
    })
    // const mappedImages = props.game.short_screenshots.map(function(image) {
    //     console.log(image.image)
    // })
    const style = {
        backgroundImage: `url(${currentImage})`
    }

    return (
        <div className="slideshow-container">
            <div className="main-image" style={style}></div>
            <div className="image-container">
                {mappedImages}
            </div>
        </div>
    )
}