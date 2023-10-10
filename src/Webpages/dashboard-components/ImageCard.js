import React from "react";
import './ImageCard.css'
import ShareButton from './ShareButton'

const ImageCard = (props) => {
  // Destructure the props for easy access
  const { title, time, imageSrc, shareCount,gridSize } = props;

  return (
    <div className={`imagecard ${gridSize}`}>
      <div className="imagecard-overlay">
        <button className="imagecard-button">Open</button>
        <img src={imageSrc} alt="Card Image" className="imagecard-image" />
      </div>
      <div className="imagecard-content">
        <h2 className="imagecard-title">{title}</h2> {/* Use the title prop */}
        <h2 className="imagecard-time">{time}</h2> {/* Use the time prop */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <time className="imagecard-title">{shareCount}</time>{' '}
          {/* Use the shareCount prop */}
          <div className="imagecard-share">
            <ShareButton /> {/* Include the ShareButton component */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageCard;

