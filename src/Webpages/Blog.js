import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import VlogCard from '../components/blog-box'

const Blog=()=>{
    return (
      <div>
        <Navbar />
        <div className="headingTop">
          <div className="headingTop2">
            <h2>MarkUp Blog</h2>
            <p>
              Stay up to date with weekly content including tips, inspiration,
              feature releases, integrations, and other company news.
            </p>
          </div>
        </div>
        <div>
          <div className="blog-container">
            <VlogCard
              imageSrc="images/phototo.webp"
              title="Vlog Title 1"
              date="September 10, 2023"
              author="John Doe"
            />
            <VlogCard
              imageSrc="images/phototo.webp"
              title="Vlog Title 2"
              date="September 15, 2023"
              author="Jane Smith"
            />
          </div>
          <div className="blog-container">
            <VlogCard
              imageSrc="images/phototo.webp"
              title="Vlog Title 2"
              date="September 15, 2023"
              author="Jane Smith"
            />
            <VlogCard
              imageSrc="images/phototo.webp"
              title="Vlog Title 2"
              date="September 15, 2023"
              author="Jane Smith"
            />
          </div>
        </div>
        <Footer />
      </div>
    )
}
export default Blog