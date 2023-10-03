import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul className="footer-list">
          <li>
            <a href="#">
              <b>Product</b>
            </a>
          </li>
          <li>
            <a href="#">Overview</a>
          </li>
          <li>
            <a href="#">Customers</a>
          </li>
          <li>
            <a href="#">Status</a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <a href="#">
              <b>Company</b>
            </a>
          </li>
          <li>
            <a href="#"> Jobs</a>
          </li>
          <li>
            <a href="#"> Contact</a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <a href="#">
              <b>Support</b>
            </a>
          </li>
          <li>
            <a href="#"> Best Practices</a>
          </li>
          <li>
            <a href="#"> Get Started</a>
          </li>
          <li>
            <a href="#"> FAQ</a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <a href="#">
              <b>Legal</b>
            </a>
          </li>
          <li>
            <a href="#"> Terms And Conditions</a>
          </li>
          <li>
            <a href="#"> Privacy Policy</a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="footer-copyright">
        <img src="images/logo.png" alt="Footer Logo" />
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
