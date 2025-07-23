import sitemap from "../assets/sitemap.png"
export default function ZotHomes() {
    return(
        <div className="zothomes-popup" style={{color:"#5C7A2F", width:"100vh", height:"100vh", boxSizing:"border-box"}}>
            <h1>ZotHomes</h1>
            <p>Done in Collaboration with: Kavya Pabbaraju, Chengyou Ting, Maddie Annison</p>
            <h2>Video Demonstration of Prototype</h2>
            <iframe src="https://drive.google.com/file/d/1tbuK3u8QQIW-XwUxpnXkMr_YQ5ePK-mp/preview" width="640" height="480" allow="autoplay"></iframe>     
            <h2>Concept</h2> 
            <p>UC Irvine continually faces a shortage of housing availability for students, forcing students to turn to desperate measures to locate and afford a place to stay throughout their academic tenure. In order to alleviate the stress associated with acquiring housing, we created ZotHomes. This site allows students within the UC Irvine community to post and inquire lease offers, be it a year-long or temporary stay.</p>  
            <h2>Site Map</h2>
            <img src={sitemap} style={{width:"100%"}}></img>
            <br></br>
            <h2></h2>

            <h2>Project Phases</h2>
            <ol>
                <li><strong>Research and Ideation:</strong> Conducted user research and brainstorming sessions to define the problem and ideate solutions.</li>
                <li><strong>Frontend Development:</strong> Built the user interface using React and TypeScript.</li>
                <li><strong>Backend Development:</strong> Integrated Supabase for authentication, database management, and storage.</li>
                <li><strong>Connecting and Deployment:</strong> Deployed the application using Netlify for seamless hosting.</li>
            </ol>

            <h2>Backend Functionality</h2>
            <p>
                After developing the frontend for ZotHomes, we integrated three key tools to power our backend functionality:
            </p>
            <ul>
                <li><strong>Supabase:</strong> Used for authentication, database management, and storage buckets for user data and property listings.</li>
                <li><strong>Leaflet:</strong> An open-source JavaScript library for interactive mapping to display property locations.</li>
                <li><strong>OpenCage:</strong> A geocoding API to convert listing addresses into geographic coordinates.</li>
            </ul>

            <h3>Features</h3>
            <ul>
                <li><strong>Sign Up:</strong> Users can create accounts, which are securely stored in the Supabase database.</li>
                <li><strong>Sign In:</strong> Users can log in with their credentials, verified against the database.</li>
                <li><strong>View Listings:</strong> Users can view and filter property listings based on criteria like price, beds/baths, and more.</li>
                <li><strong>Add Listings:</strong> Users can create new property listings, which are geocoded and stored in the database.</li>
                <li><strong>My Listings:</strong> Users can view, edit, or delete their own listings dynamically.</li>
                <li><strong>Messaging:</strong> Users can send and receive messages for leasing inquiries, powered by Supabase tables.</li>
                <li><strong>Settings:</strong> Users can manage their account preferences, including dark mode and notification toggles.</li>
                <li><strong>Interactive Mapping:</strong> Leaflet provides a dynamic map for property locations.</li>
                <li><strong>Logout:</strong> Users can securely log out of their accounts.</li>
            </ul>

            <h2>Deployment</h2>
            <p>
                The application was deployed using Netlify, ensuring a seamless and reliable hosting experience. The backend was
                powered by Supabase, which provided full support for authentication, database management, and storage.
            </p>

            <h2>Links</h2>
            <ul>
                <li><strong>Deployed Site:</strong> <a href="https://zothomes.netlify.app/" target="_blank" rel="noopener noreferrer">https://zothomes.netlify.app/</a></li>
                <li><strong>GitHub Repository:</strong> <a href="https://github.com/sabrinaaatang/INF124" target="_blank" rel="noopener noreferrer">https://github.com/sabrinaaatang/INF124</a></li>
                <li><strong>Video Demo:</strong> <a href="https://drive.google.com/file/d/1tbuK3u8QQIW-XwUxpnXkMr_YQ5ePK-mp/preview" target="_blank" rel="noopener noreferrer">Demo Video</a></li>
            </ul>
            <br></br>
        </div>
    )
}