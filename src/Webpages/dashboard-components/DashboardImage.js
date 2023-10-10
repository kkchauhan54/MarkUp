import React from 'react'
import './DashboardImage.css' // Import the CSS for styling
import UploadButton from './UploadButton'
import GuestLogin from './GuestLogin'
import ImageCard from './ImageCard'


const DashboardImage = () => {
  // Define an array of data for your image cards (you can replace this with your data)
  const imageCardData = [
    // Example data for one image card
    {
      id: 1,
      title: 'Setting up your team',
      time: 'Updates 1 day Ago',
      imageSrc: 'images/phototo.webp', // Replace with the actual image source
      shareCount: 5, // Replace with the actual share count
    },
    {
      id: 2,
      title: 'Setting up your team',
      time: 'Updates 1 day Ago',
      imageSrc: 'images/phototo.webp', // Replace with the actual image source
      shareCount: 10, // Replace with the actual share count
    },
    {
      id: 3,
      title: 'Setting up your team',
      time: 'Updates 1 day Ago',
      imageSrc: 'images/phototo.webp', // Replace with the actual image source
      shareCount: 10, // Replace with the actual share count
    },
    {
      id: 4,
      title: 'Setting up your team',
      time: 'Updates 1 day Ago',
      imageSrc: 'images/phototo.webp', // Replace with the actual image source
      shareCount: 10, // Replace with the actual share count
    },
    {
      id: 5,
      title: 'Setting up your team',
      time: 'Updates 1 day Ago',
      imageSrc: 'images/phototo.webp', // Replace with the actual image source
      shareCount: 10, // Replace with the actual share count
    },
    {
      id: 6,
      title: 'Setting up your team',
      time: 'Updates 1 day Ago',
      imageSrc: 'images/phototo.webp', // Replace with the actual image source
      shareCount: 10, // Replace with the actual share count
    },
    {
      id: 7,
      title: 'Setting up your team',
      time: 'Updates 1 day Ago',
      imageSrc: 'images/phototo.webp', // Replace with the actual image source
      shareCount: 10, // Replace with the actual share count
    },
    {
      id: 8,
      title: 'Setting up your team',
      time: 'Updates 1 day Ago',
      imageSrc: 'images/phototo.webp', // Replace with the actual image source
      shareCount: 10, // Replace with the actual share count
    },
    {
      id: 9,
      title: 'Setting up your team',
      time: 'Updates 1 day Ago',
      imageSrc: 'images/phototo.webp', // Replace with the actual image source
      shareCount: 10, // Replace with the actual share count
    },
    {
      id: 10,
      title: 'Setting up your team',
      time: 'Updates 1 day Ago',
      imageSrc: 'images/phototo.webp', // Replace with the actual image source
      shareCount: 10, // Replace with the actual share count
    },
  ]
  const [gridSize, setGridSize] = React.useState(6); // Default grid size

  const handleGridSizeChange = (newSize) => {
    setGridSize(newSize);
  };

  return (
    <div className="dashboard-container">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <GuestLogin />
        <UploadButton />
        <div className="thumbnail-grid">
          <h3>Grid Size</h3>
          <button
            className="grid-button"
            onClick={() => handleGridSizeChange('grid-3')}
          >
            3
          </button>
          <button
            className="grid-button"
            onClick={() => handleGridSizeChange('grid-6')}
          >
            6
          </button>
          <button
            className="grid-button"
            onClick={() => handleGridSizeChange('grid-9')}
          >
            9
          </button>
        </div>
      </div>
      <div className="image-cards">
        {imageCardData.map((card) => (
          <ImageCard
            key={card.id}
            title={card.title}
            time={card.time}
            imageSrc={card.imageSrc}
            shareCount={card.shareCount}
            gridSize={gridSize}
          />
        ))}
      </div>
    </div>
  )
}

export default DashboardImage