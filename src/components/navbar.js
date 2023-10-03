import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src="images/logo.png" alt="Logo" />
        </a>
      </div>
      <div className="right-nav">
        <ul className="navbar-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/customers">Customers</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/support">Support</a>
          </li>
        </ul>
        <div className="navbar-buttons">
          <a href="/signin">
            <button
              style={{
                backgroundColor: '#f1f5f8',
                border: '2px solid black',
                color: 'black',
              }}
            >
              Login
            </button>
          </a>
          <a href="/signup">
            <button>Signup</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar