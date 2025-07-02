import React from "react";
import "../styling/TSA.css";
import TSA_Comp_Analysis from "../images/TSA_Comp_Analysis.png"
import tsaIdeation from "../images/tsaIdeation.png"
import evo1 from "../images/evo1.png"
import evo3 from "../images/evo3.png"
import evo2 from "../images/evo2.png"
import evo4 from "../images/evo4.png"
import ueval1 from "../images/ueval1.png"
import ueval2 from "../images/ueval2.png"
import evo11 from "../images/evo11.png"
import evo22 from "../images/evo22.png"
import evo33 from "../images/evo33.png"
import evo44 from "../images/evo44.png"
import ueval22 from "../images/ueval22.png"
import ueval3 from "../images/ueval3.png"
import ueval33 from "../images/ueval33.png"
import ueval4 from "../images/ueval4.png"
import ueval44 from "../images/ueval44.png"
import ueval5 from "../images/ueval5.png"
import ueval55 from "../images/ueval55.png"
import arrow from "../images/arrow.png"


function TSA() {
    return (
        <>
            <div className="ARCpopup">
                <h1>TheSocialARC</h1>
                <p>Done in Collaboration with: Minh Anh Bui, Tammie Chen, Sarah Lee, Mikayla McGrath, Megan Sun, Tina Tsai, Gabriel Zhang</p>
                <br></br>
                <h2>Final Prototype</h2>
                <iframe className="prototype"
                    src="https://embed.figma.com/proto/OPHPzfHywMqkexPUl8MBOq/TheSocialARC-Design-File?page-id=416%3A1796&node-id=431-2035&viewport=973%2C247%2C0.3&scaling=scale-down&content-scaling=fixed&starting-point-node-id=431%3A2035&embed-host=share"
                    allowFullScreen
                ></iframe>
                <br></br>
                <h2>Problem Statement</h2>
                <p>Many college students struggle to maintain a physically active lifestyle, with studies showing a “prevalence of 65% of physical inactivity in undergraduate students” (<a href="https://www.mdpi.com/1660-4601/20/5/4494" target="_blank" rel="noopener noreferrer">Santana</a>). As a result, they miss out on the mental and physical benefits of regular physical activity, such as reduced stress, increased energy levels, and improved overall well-being. To truly support student health, it is essential to better understand and address the barriers that prevent students from engaging in regular physical activity and adopting healthier lifestyles.</p>
                <br></br>
                <h2>Competitive Analysis</h2>
                <img className="TSAimage" src={TSA_Comp_Analysis} alt="Table of Competitive Analysis Synthesis"></img>
                <br></br>
                <br></br>
                <h2>Contextual Interview: Key Insights</h2>
                <div className="insights">
                <div className="insight">
                    <div className="insight-header">
                        <h3>Fitness as a Social Activity</h3>
                        <p>UCI undergraduate students enjoy (and would like more) interactions with their peers interested in fitness activities however are deterred by social limitations.</p>
                    </div>
                    <div className="findings" >
                        <p className="evidence"><em>“Most challenging is finding people to do it with because I don’t usually go to the ARC alone, hard to find time that works with friends”</em></p>
                        <p className="evidence"><em>"When they first started going to the gym, it would give them anxiety . . . to go alone, but due to the timing and people, they had to learn on their own."</em></p>
                        <p className="evidence"><em>“I prefer going to the gym with my friends but we all have conflicting schedules.”</em></p>
                        <p className="evidence"><em>"For (tricking) practice, it’s easier because it’s a group/team activity so she looks forward to it, . . . doesn’t dread practice even if she isn’t feeling well; team environment makes her feel better."</em></p>
                    </div>
                    <div className="insight-header">
                        <h3>Available Resources</h3>
                        <p>UCI undergraduate students are content/satisfied with the fitness facilities provided but would like to see an expansion of resources and availability.</p>
                    </div>
                    <div className="findings" >
                        <p className="evidence"><em>“I feel the ARC lacks the standard sauna for modern gyms, other gyms have cycle labs, but I believe the ARC is amply supplied, and I’m not starved for choices, I just wish there were hack squat machines, and smith machines that aren’t at the ARC, a dedicated rear delt fly machine”</em></p>
                        <p className="evidence"><em>4 out of 8 interviewees expressed appreciation for close proximity to the ARC.</em></p>
                        <p className="evidence"><em>“It’s always super busy at the ARC whenever my schedule is available; it’s hard to find available machines and I end up having to wait.” </em></p>
                    </div>
                    <div className="insight-header">
                        <h3>Intimidation and Anxiety</h3>
                        <p>Students want to go to the gym but experience intimidation and social anxiety when they go alone.</p>
                    </div>
                    <div className="findings" >
                        <p className="evidence"><em>“Sometimes it’s crowded, so I get scared I might be doing something wrong.”</em></p>
                        <p className="evidence"><em> Not comfortable with the equipment (lifting machines, etc.), Scared to look stupid, knows there are other people that have gone to the gym for long time, more experienced whereas she is a “newbie”.</em></p>
                        <p className="evidence"><em>“I’m more scared to be in the gym facilities than the mat rooms.”</em></p>
                        <p className="evidence"><em>“I have always wanted to go to the gym, but was intimidated because I didn’t know how any of the machines worked and I wanted someone to go with. But none of my friends went to the gym.”</em></p>
                    </div>
                    <div className="insight-header">
                        <h3>Scheduling</h3>
                        <p>UCI Students value physical activity for their mental and physical health but struggle to prioritize it.</p>
                    </div>
                    <div className="findings" >
                        <p className="evidence"><em>“I’ll feel guilty for working out instead of studying, working, and being with friends.”</em></p>
                        <p className="evidence"><em>“I only workout when I’m free. As a result, during the last few weeks of the quarter, I usually end up not working out at all.” </em></p>
                        <p className="evidence"><em>“I wish I had more time to go to the gym since I’m very busy throughout the week due to my schedule.”</em></p>
                        <p className="evidence"><em> “[Working out] helps me feel more productive overall, even if I didn’t have a good day, as long as I worked out or was physically active then I feel like I accomplished something that day</em></p>
                    </div>
                    </div>
                </div>
                <br></br>
                <h2>Ideation</h2>
                <div className="ideation" >
                    <img src={tsaIdeation} alt="Design Ideation Board" className="ideationBoard"></img>
                    <p>After our team decided on the main essence of our solution and what we wanted to accomplish through our app, we deliberated on what specific features should be included and how we could best implement said features. Since we all had many different perspectives, we first generated ideas individually, and then as a team, we discussed which features or aspects of our application we wanted to scrap, implement, and prioritize within our design. This ideation phase was crucial to our design process because it ensured that all eight members of our team were on the same page moving forward with our design. The decisions our team made based on our discussions defined our approach, flows, and features of our future design artifacts.</p>
                </div>
                <br></br>
                <h2>Analytic Evaluation</h2>
                <p>Before conducting user testing and finalizing our hi-fi design, we each separately performed an analytic evaluation of our prototype using the Nielsen Norman Groups 10 Usability Heuristics. Through this process, we each individually went through our application, and then we came together to synthesize our findings. As a result of this synthesis, we identified multiple issues with our design at the time that did not meet the standards.</p>
                <h3>1. Inconsistent date and time formatting</h3>
                <div className="evolution">
                    <div className="pictures">
                        <div className="before">
                            <img src={evo1}></img>
                            <h5>Before</h5>
                        </div>
                        <img src={arrow} className="arrow"></img>
                        <div className="after">
                            <img src={evo11}></img>
                            <h5>After</h5>
                        </div>
                    </div>
                    <p>As seen on the left, there was no consistency with the language and formatting of dates and time on the different screens on our application. There were differences between pm vs PM, 3-4 vs 3:00-4:00, and more.After performing this evaluation, our final design has a consistent formatting for times throughout all of our screens, as seen on the right.</p>
                </div>
                <br></br>
                <h3>2. Inconsistent back buttons</h3>
                <div className="evolution">
                    <div className="pictures">
                        <div className="before">
                            <img src={evo2}></img>
                            <h5>Before</h5>
                        </div>
                        <img src={arrow} className="arrow"></img>
                        <div className="after">
                            <img src={evo22}></img>
                            <h5>After</h5>
                        </div>
                    </div>
                    <p>As seen on the left, our design had different back buttons, located in different places on different pages. After performing this evaluation, our final design has a consistent location and look for our back button that persists across all pages where necessary. After performing this evaluation, our final design has a consistent location and look for our back button that persists across all pages where necessary.</p>
                </div>
                <br></br>
                <h3>3. Missing visibility of system status on onboarding</h3>
                <div className="evolution">
                    <div className="pictures">
                        <div className="before">
                            <img src={evo3}></img>
                            <h5>Before</h5>
                        </div>
                        <img src={arrow} className="arrow"></img>
                        <div className="after">
                            <img src={evo33}></img>
                            <h5>After</h5>
                        </div>
                    </div>
                    <p>As seen on the left, our onboarding pages gave no indication of where the users were in the onboarding process. This did not communicate to the user how far they had progressed, or how much more they had left of onboarding. After performing this evaluation, our final design has a clear progress bar up on the top, indicated by 6 sections, representing the 6 onboarding screens users encounter before landing on the home page.</p>
                </div>
                <br></br>
                <h3>4.  Missing navigation bar</h3>
                <div className="evolution">
                    <div className="pictures">
                        <div className="before">
                            <img src={evo4}></img>
                            <h5>Before</h5>
                        </div>
                        <img src={arrow} className="arrow"></img>
                        <div className="after">
                            <img src={evo44}></img>
                            <h5>After</h5>
                        </div>
                    </div>
                    <p>As seen on the left, our design for the friends pages and “My Events” page did not have the navigation bar at the bottom, making it impossible to navigate away from these pages once the user arrived there. After performing this evaluation, our final design has a navigation bar, and back button present on these pages.</p>
                </div>
                <br></br>
                <h2>User Evaluation</h2>
                <p>After finalizing our high-fidelity prototype, we conducted user testing individually to evaluate how well our design aligned with users’ expectations. By observing real users interact with the prototype, we were able to identify areas where the interface lacked clarity or caused confusion. After compiling our results, we identified recurring issues, including an unclear onboarding process, unintuitive button icons, and confusing event labels. These insights helped us refine our design and guided the improvements that led to our final prototype.</p>
                <h3>1. Onboarding Confusion</h3>
                <div className="evolution">
                    <div style={{display:"flex"}}>
                            <img src={ueval1} style={{height:"400px"}}></img>                    
                            <p>Once completing the user testings, our team collectively noticed that many of the interviewees were unsure about what the buddy matching really entailed. There was confusion during the onboarding process, as they didn’t fully understand why they needed to input their interests or goals. Therefore, we created an instructional page prior to the user setting up their profile, to clearly establish the purpose of the user creating an account and reiterate the option to “Skip” a page. There is now greater understandability and coherency between the app’s purpose and the user’s needs.</p>
                    </div>
                </div>
                <br></br>
                <h3>2. Unintuitive “Request Buddy” and “Message” buttons</h3>
                <div className="evolution">
                    <div className="pictures">
                        <div className="before">
                            <img src={ueval2}></img>
                            <h5>Before</h5>
                        </div>
                        <img src={arrow} className="arrow"></img>
                        <div className="after">
                            <img src={ueval22}></img>
                            <h5>After</h5>
                        </div>
                    </div>
                    <p>Once completing the user testings, our team collectively noticed that many of the interviewees were unsure about what the buddy matching really entailed. There was confusion during the onboarding process, as they didn’t fully understand why they needed to input their interests or goals. Therefore, we created an instructional page prior to the user setting up their profile, to clearly establish the purpose of the user creating an account and reiterate the option to “Skip” a page. There is now greater understandability and coherency between the app’s purpose and the user’s needs.</p>
                </div>
                <br></br>
                <h3>3. Confusing event labels</h3>
                <div className="evolution">
                    <div className="pictures">
                        <div className="before">
                            <img src={ueval3}></img>
                            <h5>Before</h5>
                        </div>
                        <img src={arrow} className="arrow"></img>
                        <div className="after">
                            <img src={ueval33}></img>
                            <h5>After</h5>
                        </div>
                    </div>
                    <p>The design on the left represents the initial design. It lacked the date and location for the scheduled events and lacked clarity in the labels, “Scheduled for Today” and “Events Happening Today”. The image on the right displays the updated and improved design, making it clear that the top events represent the user’s personal scheduled events whereas the row below has upcoming events at the ARC that the user could choose to sign up for. Now there is greater understandability for users about the difference between these two sections and the information they contain.</p>
                </div>
                <br></br>
                <h3>4. Next and Back confusion during onboarding</h3>
                <div className="evolution">
                    <div className="pictures">
                        <div className="before">
                            <img src={ueval4}></img>
                            <h5>Before</h5>
                        </div>
                        <img src={arrow} className="arrow"></img>
                        <div className="after">
                            <img src={ueval44}></img>
                            <h5>After</h5>
                        </div>
                    </div>
                    <p>The design on the left illustrates the initial design we had for the buttons on the onboarding screen. Through user testing, we identified that the order and design of these buttons was not intuitive and felt weird to users that the back button was above next, and the colors being the same made it fee like they were the same importance. As a result, we changed the buttons so that “Next” was more visible to the user in color. We also changed the “Back” button so that it is placed below the “Next” button, signaling a priority of buttons. </p>
                </div>
                <br></br>
                <h3>5. No option to add personal interests</h3>
                <div className="evolution">
                    <div className="pictures">
                        <div className="before">
                            <img src={ueval5}></img>
                            <h5>Before</h5>
                        </div>
                        <img src={arrow} className="arrow"></img>
                        <div className="after">
                            <img src={ueval55}></img>
                            <h5>After</h5>
                        </div>
                    </div>
                    <p>The design on the left illustrates the initial design for the select interest page during the onboarding process. During user testing, users mentioned a dislike in the limited and unclear selection. The lack of customization prevented the users from creating more personal, accurate profiles that would better depict the interests they have. This button improves flexibility and expands the options for the users to participate in.</p>
                </div>
                <br></br>

                <h4>
                    To view more information regarding this project, please see{" "}
                    <a
                        href="https://nasal-single-136.notion.site/TheSocialARC-Home-1d1a6b72bfeb80b592fbdb6d88d0d781"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#0077b5", textDecoration: "none" }}
                    >
                        this link
                    </a>
                    .
                </h4>       
                <br></br>     
            </div>
        </>
    );
}

export default TSA;