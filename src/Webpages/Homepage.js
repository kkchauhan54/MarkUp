import React from 'react'
import Navbar from '../components/navbar.js' // Import the Navbar component
import SectionText from '../components/section-text.js' // Import the SectionText component
import Footer from '../components/footer.js' // Import the Footer component
import SectionPic from '../components/section-pic.js'
import CarouselComponent from '../components/reviews.js'
import 'react-responsive-carousel/lib/styles/carousel.min.css'


const HomePage = () => {
    const reviews = [
      {
        names: 'John Doe',
        image: 'john.jpg',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.sadskdlskadl alkdslj jas jhg acnj cnkajdkas dakjds iajddksjd sajdsajdksd  d',
      },
      {
        names: 'Jane Smith',
        image: 'jane.jpg',
        comment: 'Praesent nec justo vel libero gravida venenatis.',
      },
      {
        names: 'Jane Smith',
        image: 'jane.jpg',
        comment: 'Praesent nec justo vel libero gravida venenatis.',
      },
      {
        names: 'Jane Smith',
        image: 'jane.jpg',
        comment: 'Praesent nec justo vel libero gravida venenatis.',
      },
      {
        names: 'Jane Smith',
        image: 'jane.jpg',
        comment: 'Praesent nec justo vel libero gravida venenatis.',
      },
      // Add more review objects as needed
    ]
  return (
    <div>
      {/* Include the Navbar component */}
      <Navbar />
      <div className="headingTop">
        <div className="headingTop2">
          <h2>A better way to collaborate</h2>
          <p>
            Sign up for MarkUp.io, upload your content, drop a comment, and
            share for review. Yep, it’s that simple.
          </p>
          <button>Sign up for free</button>
        </div>
      </div>
      <SectionPic />

      <div className="section">
        <SectionText
          heading="Comment on anything"
          paragraphContent="MarkUp.io supports over 30 different file types, including websites, images, PDFs, and videos"
          buttonText="Start for free"
        />
        <SectionPic />
      </div>
      {/* First SectionText */}
      <div className="section">
        <SectionPic />
        <SectionText
          heading="Clear, contextual feedback"
          paragraphContent="Cut through the noise with immediate, visual feedback. Go from design to build to publish without losing your mind in the process. We’ll save you time. You’ll save the day."
          buttonText="Start for free"
        />
      </div>

      {/* Second SectionText */}
      <div className="section">
        <SectionText
          heading="Bring your whole team together"
          paragraphContent="Cut down your review loops by 80%, enable your team to do their best work, and keep everyone happy in the process."
          buttonText="Start for free"
        />
        <SectionPic />
      </div>
      {/* Third SectionText */}
      <div className="cardT">
        <div className="cardT2">
          <div className="card-section">
            <h2>Make feedback simple</h2>
            <p>
              Whether you’re starting from ideation, or putting the finishing
              touches on a build, MarkUp.io keeps the conversation flowing.
            </p>
          </div>
          <img src="pic.png" alt="Pic" />
        </div>
      </div>

      <div className="section">
        <SectionPic />
        <SectionText
          heading="Do more with MarkUp Chrome Extension"
          paragraphContent="Create new MarkUps straight from your browser and automatically include screenshots with all your comments for added context."
          buttonText="Start for free"
        />
      </div>

      <div className="section">
        <SectionText
          heading="A solution that scales with you"
          paragraphContent="Invite as many collaborators as you’d like. They can register as team members or join as guests – no registration required."
          buttonText="See our plans"
        />
        <SectionPic />
      </div>

      <div
        className="slider"
      >
        <CarouselComponent reviews={reviews} />
      </div>

      <div>
        <SectionText
          heading="Start now.Thank us later."
          paragraphContent="No credit card required."
          buttonText="Start for free"
        />
      </div>
      {/* Include the Footer component */}
      <Footer />
    </div>
  )
}

export default HomePage
