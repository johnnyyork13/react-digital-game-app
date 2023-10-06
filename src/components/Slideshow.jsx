import React from 'react';
import './styles/Slideshow.css';
import { v4 as uuidv4 } from 'uuid';

export default function Slideshow(props) {

    //console.log(props.user)
    //map all of the images
    const [currentImage, setCurrentImage] = React.useState(props.user.currentGame.short_screenshots ? props.user.currentGame.short_screenshots[1].image : props.user.currentGame.background_image_additional);

    //console.log(props.game.short_screenshots);
    function handleUpdateImage(e) {
        setCurrentImage(e.target.src);
    }

    const mappedImages = props.user.currentGame.short_screenshots && props.user.currentGame.short_screenshots.map((image, index) => {
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

    //console.log(currentImage);

    return (
        <div className="slideshow-container">
            <div className="main-image" style={style}>
                {!currentImage && 'SCREENSHOTS UNAVAILABLE'}
            </div>
            <div className="image-container">
                {mappedImages}
            </div>
        </div>
    )
}