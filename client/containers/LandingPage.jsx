import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    return(
      <div>
        <h1 className="logo">Smart Portfolio</h1>
        <div>
          <Button className="googleSpace" onClick={() => {
                    fetch('/api/googleLogin', {
                      method: 'POST',
                      body: JSON.stringify({
                      }),
                      headers: {
                        'Content-Type': 'application/json'
                      }
                    })
                    .then(resp => {
                      window.location.href = resp.url;
                    })
                  }}><FontAwesomeIcon icon={faGoogle}/>    Login with Google</Button>
          <div>
            <Link to="/Login">
          <Button className="space" variant="outline-info">Smart Portfolio Login</Button>
          </Link>
          <Link to="/signup">
            <Button className="space" variant="outline-info">Smart Portfolio Signup</Button>
          </Link>
        </div>
      </div>
    </div>
    )
  }
}

export default LandingPage;
