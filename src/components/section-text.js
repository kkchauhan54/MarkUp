import React from 'react'

const SectionText = ({heading, paragraphContent, buttonText}) => {
  return (
    <div className="section-text">
      <div className='section-text2'>
        <h2>{heading}</h2>
        <p>
          {paragraphContent}
        </p>
        <button className="section-button">{buttonText}</button>
      </div>
    </div>
  )
}

export default SectionText
