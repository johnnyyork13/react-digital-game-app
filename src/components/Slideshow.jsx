import React from 'react';
import '../styles/Slideshow.css';
import arrowLeft from '../assets/arrow-left.png';
import arrowRight from '../assets/arrow-right.png';

export default function Slideshow(props) {

    const [screenshots, setScreenshots] = React.useState([])
    const [screenshotCounter, setScreenshotCounter] = React.useState(0);
    const [currentScreenshot, setCurrentScreenshot] = React.useState(props.data.background_image)

    React.useEffect(() => {
        setScreenshots(props.data.short_screenshots);
    }, []);

    function nextScreenshot() {
        setScreenshotCounter((prev) => prev + 1);
        setCurrentScreenshot(props.data.short_screenshots[screenshotCounter])
        console.log(currentScreenshot)
    }

    return (
        <div className="slideshow">
            <img src={arrowLeft} className="arrow-left"/>
            <img src={arrowRight} onClick={nextScreenshot} className="arrow-right"/>

            <div className="slides">
                <img src={currentScreenshot} />
            </div>
        </div>
    )
}