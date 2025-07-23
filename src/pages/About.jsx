import profile from "../assets/profile.png";
import Navbar from "../components/Navbar";
import "../styling/About.css"

function About() {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <div className="about-container">
          <div className="about-left">
            <h1>Hi, I'm Sabrina Tang.</h1>
            <p>
              I am a recent graduate from UC Irvine with a B.S. in Software Engineering.
              I’m passionate about product management, UI/UX design, user experience research, cognitive neural science,
              and software development.
            </p>

            <div className="about-section">
              <h2>Skillset</h2>
              <p>
                UX Research • Product Management • UI/UX Design • Wireframing • Full-Stack Development (React, Node.js, TypeScript) • Agile Collaboration
              </p>
            </div>

            <div className="about-section">
              <h2>Location & Interests</h2>
              <p>
                📍 Los Angeles, CA, USA<br />
                🎯 Actively seeking new grad roles<br />
                💡 Interests: Language learning (currently studying Chinese), 3D animation, gym going
              </p>
            </div>

            <div className="about-section">
              <h2>Contact</h2>
              <p>
                <strong>Email:</strong> sabrit4@uci.edu<br />
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://linkedin.com/in/sabrinat162"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                  linkedin.com/in/sabrinat162
                </a>
              </p>
            </div>
          </div>
          <div className="about-right">
            <img src={profile} alt="Sabrina Tang" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
