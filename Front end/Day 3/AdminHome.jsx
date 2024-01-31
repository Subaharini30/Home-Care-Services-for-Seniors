import '../assets/css/AdminHome.css'
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

function AdminHome() {
  const logo = 'https://thumbs.dreamstime.com/b/elderly-caring-nurse-home-care-logo-design-vector-symbol-graphic-concept-business-roof-hand-house-real-sweet-illustration-168953811.jpg';
  return (
    <div>
      <header>
        <img src={logo} alt='Logo' className='elogo' />
        <nav style={{float:'right'}}>
          <li><a className="list" href="#home">Home</a></li>
          <li><a className="list" href="#gallery">Services</a></li>
          <li><a className="list" href="#providers">Providers</a></li>
          <li><a className="list" href="#about">About</a></li>
          <li><a className="list" href="#feed">Testimonials</a></li>
          <li><a className="list" href="#contact">Contact</a></li>
          <Link to='/Main'><li>Logout</li></Link>

        </nav>
      </header>
      <div id="home">
        <section className="hero">
          <div className='overlay4'></div>
          <div className="background-image"></div>
          <div className="hero-content-area">
            <h1 style={{color:'antiquewhite'}}>Empowering Aging Gracefully: Your Home, Your Health, Our Care</h1>
            <h3 style={{color:"azure"}}>Tailored Home Care Solutions for Every Senior Journey</h3>
            <p className='heading'>SERVICES</p>
            <Link to="/AddService"><a className="btn">POST SERVICES</a></Link>
            <Link to="/EditService"><a className="btn">EDIT SERVICES</a></Link>
            <Link to="/DeleteService"><a className="btn">DELETE SERVICES</a></Link>
            <br></br>
            <p className='heading1'>BOOKINGS</p>
            <Link to="/ViewBooking"><a className="btn">VIEW BOOKINGS</a></Link>
            <Link to="/ChangeStatus"><a className="btn">CHANGE STATUS</a></Link>
          </div>
        </section>
      </div>
      <div id="gallery">
        <section className="destinations">
          <h3 className="title">Our Services</h3>
          <p>At the intersection of technology and compassion, we bring you a suite of home care services for seniors, ensuring they receive specialized attention, maintain dignity, and age with grace in the place they cherish the most – their home sweet home</p>
          <hr />
          <br></br>

          <ul className="grid">
            <li className="small image-1"><div className="text-block">
              <h4>Medical Care</h4>
              <p> - Regular Health Checkups</p>
              <p>- Medication Management</p>
              <p>- Chronic Disease Monitoring</p>
            </div></li>
            <li className="large image-2"><div className="text-block">
              <h4>Emotional Support</h4>
              <p> - Companionship</p>
              <p> - Mental Health Counseling</p>
              <p>- Social Engagement Activities</p>  </div></li>
            <li className="large image-3"><div className="text-block">
              <h4>Physical Therapy</h4>
              <p>- Targeted Exercise Programs</p>
              <p>- Pain Management Techniques</p>
              <p>- Functional Improvement</p>  </div></li>
            <li className="small image-4"><div className="text-block">
              <h4>Care Coordination</h4>
              <p> - Appointment Scheduling</p>
              <p>- Communication with Healthcare Providers</p>
              <p>- Service Coordination</p>
            </div></li>
            <li className="small image-5"><div className="text-block">
              <h4>Home Safety</h4>
              <p>- Fall Prevention Measures</p>
              <p>- Home Environment Assessment</p>
              <p>- Emergency Response Systems</p>  </div></li>
            <li className="large image-6"><div className="text-block">
              <h4>Daily Assistance</h4>
              <p>- Meal Preparation</p>
              <p>- Personal Hygiene Assistance</p>
              <p>- Mobility Support</p>  </div></li>
            <li className="large image-7"><div className="text-block">
              <h4>Technology Integration</h4>
              <p> - Telehealth Services</p>
              <p>- Remote Health Monitoring</p>
              <p>- Digital Communication Platforms</p>  </div></li>
            <li className="small image-8"><div className="text-block">
              <h4>Nutritional Guidance</h4>
              <p> - Dietary Planning</p>
              <p>- Nutrition Education</p>
              <p>- Meal Planning for Health Conditions</p>  </div></li>
            <li className="large image-9"><div className="text-block">
              <h4>Specialized Programs</h4>
              <p> - Memory Care Programs</p>
              <p>- Palliative Care</p>
              <p>- End-of-Life Care</p>  </div></li>
            <li className="small image-10"><div className="text-block">
              <h4>Rehabilitation Services</h4>
              <p> - Physical Therapy</p>
              <p>- Occupational Therapy</p>
              <p>- Speech Therapy</p>  </div></li>

          </ul>
        </section>
      </div>
      <div id="providers">
        <section className="destinations">
          <h3 className="title1">Our Providers</h3>
          <p>Discover a dedicated team of qualified caregivers, including registered nurses, certified nursing assistants, therapists, and companions, ready to provide personalized and compassionate home care services for seniors</p>
          <hr />
          <br></br>
          <ul className="grid">
            <li className="small image-11">
              <div className="text-block">
                <h4>Registered Nurses</h4>
              </div>
            </li>
            <li className="small image-12"><div className="text-block">
              <h4>Home Health Aides</h4>
            </div></li>
            <li className="small image-13"><div className="text-block">
              <h4>Physical Therapists</h4>
            </div></li>
            <li className="small image-14"><div className="text-block">
              <h4>Companionship Services</h4>
            </div></li>
            <li className="small image-15"><div className="text-block">
              <h4>Medical Social Workers</h4>
            </div></li>
            <li className="small image-16"><div className="text-block">
              <h4>Specialized Care Providers</h4>
            </div></li>

          </ul>
        </section>
      </div>
      
      <div id="feed" className='test'>
        <section className="testimonials">
          <h3 className="title">Testimonials</h3>
          <hr />
          <p className="quote">The app has been a game-changer for my family. The ease of scheduling appointments and the quick response from support make it a reliable companion for our elderly loved ones</p>
          <p className="author">- Mary Jane</p>
          <p className="quote">Navigating through the app is intuitive, and the diverse range of services meets all our healthcare needs. The 24/7 support adds an extra layer of reassurance, making it a standout choice for senior care</p>
          <p className="author">- Sharon Rejoice</p>
          <p className="quote">I appreciate the user-friendly interface and the attention to detail in service coordination. The app has truly simplified the process of managing healthcare for our aging family members</p>
          <p className="author">- Luis Paul</p>
          <p className="quote">The diverse service catalog ensures that we can find the right support for our unique requirements. It is a comprehensive solution that brings peace of mind to both seniors and caregivers</p>
          <p className="author">- Alesh Jones</p>
          <p className="quote">Elderly Easy provides a seamless experience for seniors. The app features, especially the appointment scheduling and real-time communication, have significantly improved our ability to care for our elderly family members</p>
          <p className="author">- Philip Mathews</p>
        </section>
      
        </div>
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


            <div className="row">
              Golden Years Copyright @ 2024  Subaharini -
              All rights reserved || Designed By: SUBA
            </div>
          </div>
          </div>
        </footer>
    </div>
  )
}

export default AdminHome