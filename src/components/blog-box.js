import React from 'react'

const VlogCard = ({ imageSrc, title, date, author }) => {
  return (
    <div className="vlog-card">
      <div className="vlog-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="vlog-details">
        <h3>{title}</h3>
        <p>Date: {date}</p>
        <p>Author: {author}</p>
      </div>
    </div>
  )
}

export default VlogCard
