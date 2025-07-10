import profile from "../images/profile.png";
import Navbar from "../components/Navbar";

function About() {
    return (
        <>
        <Navbar />
        <div className="about-page" style={{ display: "flex", padding: "200px" }}>
            <div className="left">
                <h2>Hi, my name is Sabrina Tang.</h2>
                <h3>
                    I am a recent graduate from UC Irvine with a Bachelors of Science in Software Engineering. I'm interested in User Experience Design and Research, Cognitive Neural Science, and Software Development.
                </h3>
                <br />
                <h2>Contact</h2>
                <h3 style={{ display: "flex", alignItems: "center" }}>
                    <strong>Email:</strong>&nbsp;
                    <span>sabrina.tang321@gmail.com</span>
                </h3>
                <h3 style={{ display: "flex", alignItems: "center" }}>
                    <strong>LinkedIn:</strong>&nbsp;
                    <a
                        href="https://linkedin.com/in/sabrinat162"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#0077b5", textDecoration: "none" }}
                    >
                        linkedin.com/in/sabrinat162
                    </a>
                </h3>
            </div>
            <div className="right">
                <img src={profile} alt="Profile Picture" />
            </div>
        </div>
        </>
        
    );
}

export default About;