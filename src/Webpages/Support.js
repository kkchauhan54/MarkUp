import React from 'react'
import SupportNavbar from '../components/Support-Navbar'
import SupportFooter from '../components/Support-Footer'
import ImageComments from './dashboard-components/ImageComments'
import SharePopup from './dashboard-components/ShareButton'
import UploadButton from './dashboard-components/UploadButton'
import GuestLogin from './dashboard-components/GuestLogin'

const Support = () => {
  return (
    <div>
      <SupportNavbar />

      <div className="Support-top">
        <div className="Support-top-text">What do you want to learn today?</div>
        <div className="SupportNavbar-search">
          <input
            style={{ width: '40vw', padding: '20px 20px' }}
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="Support-container">
        <div>
          <h3>Explore</h3>
          <aside className="Support-sidebar">
            <ul>
              <li>
                <a href="#">Getting Started</a>
              </li>
              <hr />
              <li>
                <a href="#">Using MarkUp.io</a>
              </li>
              <hr />
              <li>
                <a href="#">Best Practices</a>
              </li>
              <hr />
              <li>
                <a href="#">FAQ</a>
              </li>
              <hr />
              <li>
                <a href="#">News</a>
              </li>
            </ul>
          </aside>
          <h3>Popular Articles</h3>
          <aside className="Support-sidebar">
            <ul>
              <li>
                <a href="#">Creating A folder</a>
              </li>
              <hr />
              <li>
                <a href="#">Starting a MarkUp</a>
              </li>
              <hr />
              <li>
                <a href="#">Markup.io x Loom</a>
              </li>
              <hr />
              <li>
                <a href="#">Get my fonts</a>
              </li>
              <hr />
              <li>
                <a href="#">2023 Release</a>
              </li>
            </ul>
          </aside>
        </div>
        <main className="Support-main-content">
          <h2>Help Center</h2>
          <div className="SupportCard">
            <div className="SupportCard-image">
              <img src="images/phototo.webp" alt="Card Image" />
            </div>
            <div
              className="SupportBox"
              style={{
                borderTopLeftRadius: '0px',
                borderBottomLeftRadius: '0px',
                height: '50vh',
              }}
            >
              <div className="SupportBox-content">
                <h2 className="SupportBox-time">Getting Started</h2>
                <h2 className="SupportBox-title" style={{ fontSize: '2rem' }}>
                  Navigating your Workspace
                </h2>
                <p className="SupportBox-paragraph">
                  Invite team mebers and have fun with them pointing out
                  comments one ach others images
                </p>
                <button className="SupportBox-button">Learn More</button>
                <hr className="SupportBox-hr" />
                <time className="SupportBox-title">1 Minute Ago Read</time>
              </div>
            </div>
          </div>
          <div className="SupportBox-container">
            <div className="SupportBox">
              <img
                src="images/phototo.webp"
                alt="Card Image"
                className="SupportBox-image"
              />
              <div className="SupportBox-content">
                <h2 className="SupportBox-time">Using MarkeUp.io</h2>
                <h2 className="SupportBox-title">Setting up your team</h2>
                <p className="SupportBox-paragraph">
                  Invite team mebers and have fun with them pointing out
                  comments one ach others images
                </p>
                <button className="SupportBox-button">Learn More</button>
                <hr className="SupportBox-hr" />
                <time className="SupportBox-title">1 Minute Ago Read</time>
              </div>
            </div>
            <div className="SupportBox">
              <img
                src="images/phototo.webp"
                alt="Card Image"
                className="SupportBox-image"
              />
              <div className="SupportBox-content">
                <h2 className="SupportBox-time">Using MarkeUp.io</h2>
                <h2 className="SupportBox-title">Setting up your team</h2>
                <p className="SupportBox-paragraph">
                  Invite team mebers and have fun with them pointing out
                  comments one ach others images
                </p>
                <button className="SupportBox-button">Learn More</button>
                <hr className="SupportBox-hr" />
                <time className="SupportBox-title">1 Minute Ago Read</time>
              </div>
            </div>
            <div className="SupportBox">
              <img
                src="images/phototo.webp"
                alt="Card Image"
                className="SupportBox-image"
              />
              <div className="SupportBox-content">
                <h2 className="SupportBox-time">Using MarkeUp.io</h2>
                <h2 className="SupportBox-title">Setting up your team</h2>
                <p className="SupportBox-paragraph">
                  Invite team mebers and have fun with them pointing out
                  comments one ach others images
                </p>
                <button className="SupportBox-button">Learn More</button>
                <hr className="SupportBox-hr" />
                <time className="SupportBox-title">1 Minute Ago Read</time>
              </div>
            </div>
          </div>
        </main>
      </div>
      <ImageComments />
      <SharePopup />
      <UploadButton />
      <GuestLogin />
      <SupportFooter />
    </div>
  )
}
export default Support
