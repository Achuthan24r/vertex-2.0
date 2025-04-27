import React, { useState } from "react";
import Profile from "./profile";
import Contact from "./contact";
import "./home.css";

const Home = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Team</h1>
        <p>Discover our profile and get in touch with us!</p>
      </header>
      <nav className="navbar">
        <ul>
          <li
            className={activeSection === "profile" ? "active" : ""}
            onClick={() => handleNavClick("profile")}
          >
            Profile
          </li>
          <li
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </li>
        </ul>
      </nav>
      <div className="content">
        {activeSection === "profile" && <Profile />}
        {activeSection === "contact" && <Contact />}
      </div>
    </div>
  );
};

export default Home;
