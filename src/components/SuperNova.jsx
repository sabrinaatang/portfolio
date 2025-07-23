
export default function SuperNova() {
    return(
        <div className="supernova" style={{width:"100%"}}>
            <h1>SuperNova Academy Inc.</h1>
            <p>In Collaboration With: Bobak Sadri, Bryant Chick, Calli Kiler</p>
            <h2>Project Overview</h2>
            <p>This presentation is a brief showcase of the site.</p>
            <iframe
                src="https://docs.google.com/presentation/d/13A4TQwHQnT-zgyfAuooYchSV_KLD0DPDkHYKjW_NG2I/embed?start=false&loop=false&delayms=3000"
                width="640"
                height="480"
                allowFullScreen
                style={{ border: "none", marginBottom: "20px" }}
                title="SuperNova Presentation"
            ></iframe>
            <br></br>
            <h2>Objective</h2>
            <p>
                Our team partnered with <strong>SuperNova Academy Inc.</strong> (Advisor: <strong>Irfan Khan</strong>) to create an innovative e-learning platform. Learn more about the organization at their official site:{" "}
                <a
                    href="https://supernovaacademyincorporated.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0077b5", textDecoration: "none", fontWeight: "bold" }}
                >
                    supernovaacademyincorporated.com
                </a>.
            </p>
            <br></br>
            <h2>Development Process</h2>
            <p>
                Our team followed an <strong>agile approach</strong>, iterating on the requirements document multiple times to ensure alignment with the client's needs and project goals. This iterative process allowed us to refine features and deliver a product that met the expectations of SuperNova Academy Inc.
            </p>

            <h2>GitHub Repository</h2>
            <p>
                Explore the codebase for this project on GitHub:{" "}
                <a
                    href="https://github.com/sabrinaaatang/SuperNovaAcademy.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0077b5", textDecoration: "none", fontWeight: "bold" }}
                >
                    SuperNovaAcademy Repository
                </a>.
            </p>
            <br></br>
        </div>
    )
}