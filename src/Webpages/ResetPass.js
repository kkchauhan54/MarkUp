import React from 'react'

const ResetPass = () => {
  return (
    <div className="login-container">
      <div className="left-half">
        <div className="login-top">
          <a href="/">
            <img src="images/logo.png" alt="Logo" className="logo" />
          </a>
        </div>
        <div className="left-form" style={{ marginTop: '150px' }}>
          <div className="login-form">
            <h2>Reset Password</h2>
            <div style={{ margin: '5px' }}>
              Enter a new password to reset your sign in credentials and access
              your account.
            </div>
            <form>
              <div className="form-group">
                <input type="password" name="password" placeholder="Password" />
              </div>
              <div style={{ margin: '7px',color:'grey'}}>
                Must be atleast 10 Characters.
              </div>
              <button type="submit" className="login-button">
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="right-half">
        {/* Background Image */}
        <img src="images/phototo.webp" alt="Background" />
      </div>
    </div>
  )
}

export default ResetPass
