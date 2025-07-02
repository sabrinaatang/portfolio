import React from "react";
import "../styling/TSA.css";
import TSA_Comp_Analysis from "../images/TSA_Comp_Analysis.png"

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
                
            </div>
        </>
    );
}

export default TSA;