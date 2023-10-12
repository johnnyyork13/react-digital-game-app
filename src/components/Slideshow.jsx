import React from 'react';
import './styles/Slideshow.css';
import { v4 as uuidv4 } from 'uuid';
import { getScreenshots } from './helpers/getGames';

export default function Slideshow(props) {
    
    const [screenshots, setScreenshots] = React.useState();
    const [currentImage, setCurrentImage] = React.useState(screenshots ? screenshots[0] : null);

    React.useEffect(() => {
        getScreenshots(props.user.currentGame.id)
        .then((data) => setScreenshots(data));
    }, [props.user])

    
    React.useEffect(() => {
        setCurrentImage(screenshots ? screenshots[0] : null)
    }, [screenshots, props.user])
    function handleUpdateImage(e) {
        setCurrentImage(e.target.src);
    }

    const mappedImages = screenshots && screenshots.map((image, index) => {
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
        backgroundImage: `url(${currentImage && currentImage.image ? currentImage.image : currentImage})`
    } 

    //console.log("CURRENTIMAGE", currentImage);

    return (
        <div className="slideshow-container">
            <div className="main-image" style={style}>
                {/* {'SCREENSHOTS UNAVAILABLE'} */}
            </div>
            <div className="image-container">
                {mappedImages}
            </div>
        </div>
    )
}