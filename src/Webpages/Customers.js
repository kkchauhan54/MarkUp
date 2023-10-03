import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SectionPic from '../components/section-pic.js'
import SectionText from '../components/section-text.js'

const Customers = ()=>{
    return (
      <div>
        <Navbar />

        <div className="headingTop">
          <div className="headingTop2">
            <h2>We started a movement</h2>
            <p>
              Join 350k+ people globally who have already fixed their feedback
              loops with MarkUp.io
            </p>
            <button>Sign up for free</button>
          </div>
        </div>

        <div className="customer-sect">
          <div class="customer-section">
            <p>
              “Before, we didn’t know how to ask the client for feedback. Now,
              with MarkUp.io,
              <br /> there is only one way to give feedback.
            </p>
            <p class="last-line">This makes everything so much simpler.”</p>
            <p class="ceo-name">
              Richard Piatkowski <br />
              CEO of meap GmbH
            </p>
          </div>
        </div>

        <div className="section">
          <SectionText
            heading="Used in more than 120 countries"
            paragraphContent="Broken feedback loops know no borders. Get the context you need to fix your review cycles with MarkUp.io."
            buttonText="Start for free"
          />
          <SectionPic />
        </div>
        {/* First SectionText */}
        <div className="section">
          <SectionPic />
          <SectionText
            heading="Be a part of the conversation"
            paragraphContent="Cut through the noise with immediate, visual feedback. Go from design to build to publish without losing your mind in the process. We’ll save you time. You’ll save the day."
            buttonText="Join the Community"
          />
        </div>

        <div class="customer-section2">
          <p>Don’t take our word for it…</p>
          <div className="customer-sect2-up">
            <div className="customer-sect2-box">
              <p>350K</p>
              <p class="ceo-name">
                MarkUp.io
                <br /> users
              </p>
            </div>
            <div className="customer-sect2-box">
              <p>6M+</p>
              <p class="ceo-name">
                Comments
                <br /> Made
              </p>
            </div>
            <div className="customer-sect2-box">
              <p>80%</p>
              <p class="ceo-name">
                Time saveed
                <br /> in review
              </p>
            </div>
            <div className="customer-sect2-box">
              <p>100%</p>
              <p class="ceo-name">
                smooth
                <br /> process
              </p>
            </div>
          </div>
        </div>

        <div className="headingTop">
          <div className="headingTop2">
            <h2 style={{ fontSize: '2.8rem' }}>
              Everything is better with MarkUp.io
            </h2>
            <p>
              Whether you’re designing a project from ideation or putting the
              finishing touches on the build, MarkUp.io is the perfect tool to
              keep your team together.
            </p>
          </div>
        </div>

        <div className="section">
          <SectionText
            heading="Agencies love MarkUp.io"
            paragraphContent="Impress your clients with the smoothest review process on the market. MarkUp.io provides a truly frictionless reviewer experience, no login required."
            buttonText="Get Started for free"
          />
          <SectionPic />
        </div>
        {/* First SectionText */}
        <div className="section">
          <SectionPic />
          <SectionText
            heading="We make designers happyk"
            paragraphContent="Reduce your review loops by 80% and go from an idea to a finished product in no time. Get relevant, contextual feedback on over 30 file types, stress-free."
            buttonText="Get Started for free"
          />
        </div>

        {/* Second SectionText */}
        <div className="section">
          <SectionText
            heading="A marketer’s best friend"
            paragraphContent="Centralize all your feedback in one place. Save time and keep everyone happy in the process. Get the job done in any format with MarkUp.io."
            buttonText="Get Started for free"
          />
          <SectionPic />
        </div>

        <div className="headingTop" style={{ backgroundColor: 'pink' }}>
          <div className="headingTop2" style={{ color: 'white' }}>
            <h2 style={{ fontSize: '2.8rem' }}>
              Improve the way your entire organization collaborates.
            </h2>
            <button style={{backgroundColor:'pink',border:'2px solid white'}}>
              Learn more about Markeup.io Enterprises
            </button>
          </div>
        </div>

        <div>
          <SectionText
            heading="Start now.Thank us later."
            paragraphContent="No credit card required."
            buttonText="Start for free"
          />
        </div>

        <Footer />
      </div>
    )
}
export default Customers