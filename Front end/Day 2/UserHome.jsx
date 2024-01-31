import React from 'react';
import '../assets/css/UserHome.css';
import ImageGallery from '../components/ImageGallery';
import UserNavbar from '../components/UserNavbar';
import Service from './Service';
import About from './About';
import Contact from './Contact';

function UserHome() {
  return (
    <>
      <div>
        <UserNavbar />
      </div>
      <div className='usermain'>
        <div className="userhome">
          <div className="homeright">
            <div className='leftcontent'>
              <h1 style={{ marginTop: '200px' }}>
                <span style={{ color: 'black' }}>Welcome to!!!{'  '}</span><br></br>
                <span style={{ color: 'black' }}>Cocoon of Care - Harmony at Home</span>
              </h1>
              <br></br>
              To care for those who once cared for us is <br></br>one of the highest honours," 
              <br></br>- Tia Walker.
              <br></br>
              We at Golden Home Healthcare endeavor to bring<br></br> healthcare to the doorstep of the elderly.
              <br></br><br></br>
              Once your home care needs are clearly defined, our dedicated team <br></br>will help you get expert health care along with
              attendants<br></br> if needed for personal hygiene, mobility, or activities of daily living<br></br> like taking a bath, feeding,
              exercise, etc...
            </div>
          </div>
        </div>
      </div>
       <ImageGallery />
       <Service/>
       <About/>
       <Contact/>
       <footer>
          <div className="footer">
            <div className="row">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
              <a href="https://www.facebook.com/" target="blank" className="custom-icon fa fa-facebook "></a>
              <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den" target="blank" className="custom-icon fa fa-twitter"></a>
              <a href="https://www.google.com/" target="blank" className="custom-icon fa fa-google "></a>
              <a href="https://www.linkedin.com/" target="blank" className="custom-icon fa fa-linkedin "></a>
              <a href="https://www.youtube.com/" target="blank" className="custom-icon fa fa-youtube "></a>
              <a href="https://www.instagram.com/" target="blank" className="custom-icon fa fa-instagram "></a>

            </div>

            <div className="row">
              Golden Years Copyright @ 2024  Subaharini -
              All rights reserved || Designed By: SUBA
            </div>
          </div>
        </footer>
    </>
  );
}

export default UserHome;
