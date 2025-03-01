import React from 'react';
import { UserNavbar } from './UserNavbar';
import { Link } from 'react-router-dom';
import prof from '../images/prof.jpg';
import '.userhome.css';

function UserHome(_props) {
  return (
    <>
    <div className="uhome">     
      <div><UserNavbar/></div><br/>
      <div className="homelinks">
        <ul>
          <li><div className="stafflink"><Link to="/StaffDetails"><h3>+ Staff Details</h3></Link></div></li>
          <li><div className="stafflink"><Link to="/InmateDetails"><h3>+ Inmate Details</h3></Link> </div></li>
          <li><div className="stafflink"><Link to="/ComplaintRegistration"><h3>+ Complaint Registration</h3></Link> </div></li>
          <li><div className="stafflink"><Link to="/GuestInOut"><h3>+ Guest Check-In/Check-Out</h3></Link> </div></li>
          <li><div className="stafflink"><Link to="/InmateInOut"><h3>+ Inmate Check-In/Check-Out</h3></Link> </div></li>
        </ul>
      </div>

      {/* Staff detail container */}
      <div className="staff">
        <div className="image">
          <img src={prof} className="profile-pic" alt="profile" width="150px"/>
        </div>
        <h3>Staff Name</h3>
        <h3>Staff Code</h3>
        <h4>Designation</h4>
        <h4>Department</h4>
        <h4>Mail ID</h4>
        <h4>Phone Number</h4>
      </div>
    </div>
    </>
  );
}

export default UserHome;
