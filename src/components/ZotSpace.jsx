import ZotSpace from "../images/ZotSpace.mp4"
import zotspacebefore from "../images/zotspacebefore.png"
import zotspaceafter from "../images/zotspaceafter.png"

export default function() {
    return(
        <>
        <div className="zotspace">
            <h1>ZotSpace</h1>
            <br></br>
            <h2>Video Overview</h2>
            <video
                    controls
                    width="100%"
                    style={{ maxWidth: "720px", borderRadius: "12px", marginTop: "1rem" }}
                >
                    <source src={ZotSpace} type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
            <br></br>
            <h2>Problem Statement</h2>
            <p>
                UCI students struggle to efficiently find and reserve available study spaces on campus. Booking systems are scattered across multiple platforms, leading to confusion, time waste, and accessibility challenges—especially for first-years and students unfamiliar with the campus. ZotSpace centralizes study space discovery and booking into one seamless, accessible interface.
            </p>

            <br />
            <h2>User Research</h2>
            <p>
                We interviewed 10+ students to identify major pain points with UCI’s current booking systems. Common complaints included limited filtering, lack of previews, and poor accessibility (e.g. over-reliance on red/green color). Based on this, we prioritized a visual-first map view, added icon-label filters, and redesigned the reservation flow for clarity and ease of use.
            </p>

            <br />
            <h2>Design Process</h2>
            <p>
                We used Figma to prototype multiple iterations of ZotSpace, aligning with UCI brand guidelines. My focus was on interaction design and usability, especially ensuring the reservation flow minimized clicks and supported personalization. We built the MVP in ReactJS and used the Leaflet API to implement a responsive, filterable map.
            </p>

            <br />
            <h2>Usability Testing</h2>
            <p>
                Across two rounds of usability testing, we saw a 100% task completion rate with an average reservation time under 50 seconds. Feedback praised the visual design and map-first layout. We made critical improvements—like dynamically updating time selections and enhancing the favorites feature—based on direct user input.
            </p>
            <div className="usability-testing-comparison" >
                <div className="before">
                    <img
                        src={zotspacebefore}
                        alt="Before Usability Testing"
                        style={{ width: "40rem", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}
                    />
                    <p style={{ textAlign: "center", marginTop: "10px", fontWeight: "bold" }}>Before</p>
                </div>
                <div className="after">
                    <img
                        src={zotspaceafter}
                        alt="After Usability Testing"
                        style={{ width: "40rem", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}
                    />
                    <p style={{ textAlign: "center", marginTop: "10px", fontWeight: "bold" }}>After</p>
                </div>
            </div>
            <br />
            <h2>Development & Features</h2>
            <ul>
                <li>🧭 Map-first interface built with React + Leaflet</li>
                <li>🔍 Filters for location, outlets, accessibility, and time slots</li>
                <li>⭐ Favorite study rooms for quicker future bookings</li>
                <li>📧 Email confirmations & edit/cancel functionality</li>
                <li>♿ Accessible design: icons with text labels, keyboard navigation</li>
            </ul>

            <br />
            <h2>Impact & Takeaways</h2>
            <p>
                As a UI/UX designer and product manager, I helped lead user research, design, and development across the full lifecycle of ZotSpace. I learned how to balance design goals with technical constraints, prioritize based on user needs, and advocate for accessible, student-centered solutions.
            </p>
            <br></br>
        </div>
        </>
    )
}