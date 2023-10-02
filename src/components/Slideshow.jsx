import React from 'react';
import './styles/Slideshow.css';

export default function Slideshow(props) {

    //map all of the images
    const [currentImage, setCurrentImage] = React.useState(props.game.short_screenshots[0].image)

    //console.log(props.game.short_screenshots);
    function handleUpdateImage(e) {
        setCurrentImage(e.target.src);
    }

    const mappedImages = props.game.short_screenshots.map((image) => {
        return <img 
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