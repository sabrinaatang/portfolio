import "../styling/RedditRedesign.css";
export default function RedditRedesign() {
    return (
        <div className="redditPage">
            <h1>Reddit Redesign</h1>
            <p>Done in Collaboration with: Kavya Pabbaraju, Samantha Pang</p>
            <br></br>
            <h2>Final Prototype</h2>
            <iframe
                style={{ border: "none", width: "55rem", height: "50rem" }}
                src="https://embed.figma.com/proto/nHQYtQlg3BbSTOAQqsOPO8/Reddit-Redesign?page-id=0%3A1&node-id=18-2&p=f&m=draw&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=18%3A2&embed-host=share"
                allowFullScreen
            ></iframe>
            <br></br>
            <h2>The Challenge</h2>
            <p>2024 AmazonNext Design Challenge: Collaborate with students and work closely with leaders at Amazon Design to redesign a platform/app/product to be more inclusive to meet customer needs.</p>
            <br></br>
            <h2>Our Approach</h2>
            <p>
                Reddit is one of the largest online discussion platforms, yet its interface can feel overwhelming—especially for neurodiverse individuals such as those with ADHD. Our team focused on enhancing Reddit’s accessibility and usability by addressing the pain points uncovered through user interviews, surveys, and competitor analysis.
            </p>
            <p>
                We identified a key audience: <strong>users with ADHD and cognitive accessibility needs</strong>. These users often face challenges with information overload, visual clutter, and disorganized content, making it difficult to stay focused or follow complex threads. To better serve these users, we asked: <em>“How might we create a calmer, more focused Reddit experience without sacrificing its core community features?”</em>
            </p>
            <p>
                Our redesign introduces features like <strong>Focus Mode</strong>—which hides nonessential UI elements to reduce distractions—as well as clearer visual hierarchy, simplified navigation, customizable font sizing, and collapsible thread sections. We also explored features that would help users manage their attention, such as <strong>color-coded post indicators</strong>, improved notification controls, and minimalist design cues that enhance readability.
            </p>
            <p>
                Our goal was not just to change how Reddit looks, but to rethink how it can work better for <strong>those who often get left out of default digital design assumptions</strong>. By starting from real accessibility challenges, we worked to make Reddit more inclusive, intuitive, and empowering—without losing its identity.
            </p>
            <br></br>
            <h2>Key Insights from User Research</h2>
            <div className="insights">
            <div className="insight">
                
                <div className="insight-header">
                <h3>Overload from Visual Clutter</h3>
                <p>Neurodiverse users—especially those with ADHD—reported feeling overwhelmed by Reddit’s default layout, which includes dense comment threads, sidebar noise, and constant feed updates.</p>
                </div>
                <div className="findings">
                <p className="evidence"><em>“Too much stuff on the screen at once. I open Reddit and then close it right away sometimes.”</em></p>
                <p className="evidence"><em>“It’s hard to just focus on one thread. I keep getting distracted by recommended posts and other comments.”</em></p>
                </div>

                <div className="insight-header">
                <h3>Desire for Focused Reading Experience</h3>
                <p>Many users requested a simplified “Focus Mode” that would reduce distractions and allow them to concentrate on a single post or comment thread at a time.</p>
                </div>
                <div className="findings">
                <p className="evidence"><em>“I would love a ‘focus view’ where I could just read one post without anything else showing up.”</em></p>
                <p className="evidence"><em>“I get overwhelmed trying to follow long discussions—especially when replies are hidden or nested weirdly.”</em></p>
                </div>

                <div className="insight-header">
                <h3>Need for Customization</h3>
                <p>Users expressed a strong desire to personalize the interface—changing font sizes, hiding irrelevant content, and toggling display density to match their cognitive preferences.</p>
                </div>
                <div className="findings">
                <p className="evidence"><em>“I always zoom in or change the font because the text feels too tight.”</em></p>
                <p className="evidence"><em>“If I could hide stuff I don’t use (like the sidebar or award buttons), that would help a lot.”</em></p>
                </div>

                <div className="insight-header">
                <h3>Accessibility Tool Reliance</h3>
                <p>Some participants mentioned already relying on third-party extensions or accessibility tools to make Reddit usable, showing a clear gap in native accessibility support.</p>
                </div>
                <div className="findings">
                <p className="evidence"><em>“I use a browser extension just to make Reddit more readable.”</em></p>
                <p className="evidence"><em>“It’s not built with neurodivergent users in mind—it’s built for speed and engagement.”</em></p>
                </div>

                <div className="insight-header">
                <h3>Desire for Notification Control</h3>
                <p>Notifications and alerts often added to the stress of using Reddit, with users asking for quieter, less intrusive ways to manage their activity.</p>
                </div>
                <div className="findings">
                <p className="evidence"><em>“I wish I could just mute certain things or only get alerts for posts I care about.”</em></p>
                <p className="evidence"><em>“There’s so many pings and popups—I can’t think straight when I use the app.”</em></p>
                </div>
            </div>
            </div>
            <br></br>
            <h2>Reflection & Next Steps</h2>
            <p>
            This project challenged us to think beyond visual polish and prioritize accessibility, empathy, and user-specific problem solving. Designing for neurodiverse users—particularly individuals with ADHD—required us to dig into real pain points and build features that empower rather than overwhelm. Our “Focus Mode,” customizable interface, and simplified layouts aim to make Reddit a more inclusive and usable platform for everyone.
            </p>
            <p>
            Through iterative research, feedback, and design, we saw how accessible design is not a limitation—but an opportunity to create better, smarter products. If given more time, we would continue user testing, explore integration of assistive technologies (like screen readers or voice commands), and examine how these features could scale across other Reddit surfaces.
            </p>
            <p>
            This redesign represents a shift in mindset: from designing for the average user to designing for <strong>real humans with different needs, contexts, and ways of thinking.</strong>
            </p>
            <br></br>

        </div>
    );
}
