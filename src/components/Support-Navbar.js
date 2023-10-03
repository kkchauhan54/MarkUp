import React from 'react'

const SupportNavbar = () => {
  return (
    <nav className="SupportNavbar">
      <div className="SupportNavbar-logo">
        <a href="/support">
          <img src="images/logo.png" alt="Logo" />
        </a>
      </div>
      <div className="SupportNavbar-links">
        <ul>
          <li>
            <a href="#">Getting Strated</a>
          </li>
          <li>
            <a href="#">Using Markeup.io</a>
          </li>
          <li>
            <a href="#">Best Practices</a>
          </li>
          <li>
            <a href="#">Integrations</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="/">Markup.io</a>
          </li>
        </ul>
      </div>
      <div className="SupportNavbar-search">
        <input type="text" placeholder="Search" />
      </div>
    </nav>
  )
}

export default SupportNavbar
