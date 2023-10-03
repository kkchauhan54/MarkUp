import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Import Routes from react-router-dom
import './index.css'
import Homepage from './Webpages/Homepage.js'
import Customers from './Webpages/Customers.js'
import Blog from './Webpages/Blog'
import LogIn from './Webpages/SignIn'
import SignUp from './Webpages/SignUp'
import ForgetPass from './Webpages/ForgetPass'
import ResetPass from './Webpages/ResetPass'
import Support from './Webpages/Support'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/support" element={<Support />} />
        <Route path="/signin" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget-pass" element={<ForgetPass />} />
        <Route path="/reset-pass" element={<ResetPass />} />
      </Routes>
    </Router>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
