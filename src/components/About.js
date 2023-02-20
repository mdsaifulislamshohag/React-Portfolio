import React, { Component } from 'react';
import logo from './profileabout.png';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

            <img className="profile" src={logo} />

            </div>

            <div className="nine columns main-col">

               <h2>About Us</h2>
               <p>
               <span>CareSchedule is an innovative healthcare appointment scheduling platform that connects patients with healthcare providers. Our platform offers user authentication and authorization for both healthcare providers and patients, with a dedicated dashboard for providers to manage scheduling and appointments, and an online booking system for patients to book appointments. Our Automated appointment reminders reduce missed appointments, and our secure messaging system allows patients to communicate with their healthcare providers. We are committed to improving the healthcare experience for patients and providers. We believe CareSchedule will transform the way healthcare appointments are managed, making it easier and more convenient for patients to access healthcare services, and for providers to manage patient care.</span>
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Creators</h2>
                  <p className="address">
       						<span>Mihran Asadullah</span>
                     <br></br>
       						   <span>
                     Sere Otubu
                    </span>
                    <br></br>
                    <span>Avedis Boudakian</span>
                    <br></br>
                    <span>Rodrigo Del Aguila</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}