import React from "react";
import "./profile.css";
import profileImage from "../image/myCreatedLogo_4-26-2025_65911_PM.png";

const Profile = () => {
  return (
    <div className="profile">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <h2>Business Consultancy</h2>
      <h3><strong>Company: Vertex 2.0 </strong></h3>
      <hr></hr>
      <p>
        Welcome to our business consultancy. We provide expert advice to help
        your business grow and succeed.
      </p>
      <ul>
        <li>Market Analysis</li>
        <li>Strategic Planning</li>
        <li>Financial Consulting</li>
        <li>Operational Improvement</li>
        <li>250 + Francis available</li>
        <li>Own business idea development</li>
        <li>Bank loan available</li>
        <li>Small business development</li>
      </ul>
    </div>
  );
};

export default Profile;
