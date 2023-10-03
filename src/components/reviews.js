import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // Import carousel styles
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'


const CarouselComponent = ({ reviews }) => {
  return (
    <Carousel showArrows={true}>
      {reviews.map((review, index) => (
        <div key={index} className="card">
          <img src={review.image} alt={review.names} />
          <h3>{review.names}</h3>
          <p>{review.comment}</p>
        </div>
      ))}
    </Carousel>
  )
}

export default CarouselComponent
