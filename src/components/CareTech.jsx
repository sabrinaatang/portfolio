import "../styling/CareTech.css"
function CareTech() {
    return(
        <div className="caretech-popup">
            <h1>CareTech</h1>
            <p>Dandilyonn Seeds 2025 Program</p>
            <br></br>
            <h2>Working Prototype</h2>
            <p>will be uploaded soon...</p>
            <br></br>
            <h2>Problem Statement</h2>
            <p>
                Adult (18+) patients struggle to acquire healthcare provider information and schedule appointments in a timely manner with studies showing “31% in the United States experience wait times for specialists of one month or more” (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10448708/#:~:text=Long%20wait%20times%20between%20PCP,increasing%20to%2062%25%20in%202020" target="_blank" rel="noopener noreferrer">Source</a>). Without a professional opinion, they struggle to address their health concerns and fully understand the implications of their symptoms. According to the Office of Disease Prevention and Health Promotion, “nearly ⅓ of US  adults have limited personal health literacy”. As a result, patients face health consequences from long wait times and a lack of healthcare literacy. To truly support patient health, it is essential to better understand and address the barriers to timely appointments and preventative care.
            </p>
            <br></br>
            <h2>Contextual Interview: Key Insights</h2>
                <div className="insights1">
                <div className="insight1">
                    <div className="insight-header1">
                        <h3>Lack of Accessibility of Doctors</h3>
                        <p>Patients find it difficult to access care in prompt manner due to scheduling and availability conflicts.</p>
                    </div>
                    <div className="findings1" >
                        <p className="evidence1"><em>“It was (and still is) really hard to find someone in psychiatry with Kaiser”</em></p>
                        <p className="evidence1"><em>"I found that in the US less doctors are available due to strict hours and scheduling."</em></p>
                        <p className="evidence1"><em>"I used to wait 3-4 hours in the waiting office for my appointment which I scheduled several months in advance. With my new offic, it's better, but before it was ridiculous."</em></p>
                        <p className="evidence1"><em>"I had a twisted ankle and had to wait so long to see a doctor because most of them don't work weekends, holidays and during working days, their hours are so limited"</em></p>
                    </div>
                    <div className="insight-header1">
                        <h3>Money as a Significant Determinant</h3>
                        <p>Patients cited their financial means as a huge factor in choosing to accept healthcare.</p>
                    </div>
                    <div className="findings1" >
                        <p className="evidence1"><em>6/11 interviewees mentioned money as a significant factor when accessing healthcare</em></p>
                        <p className="evidence1"><em>"I switched (healthcare company) because the premiums were too high."</em></p>
                        <p className="evidence1"><em>"One of the main things I think about when choosing an insurance is the price."</em></p>
                        <p className="evidence1"><em>"A lot of people (students) I know opt out (of student health insurance) because of high costs.”</em></p>
                    </div>
                    <div className="insight-header1">
                        <h3>Difficulties Navigating Healthcare Information</h3>
                        <p>Patients lack (but want to obtain) a comprehensive understanding of healthcare and don't know how to find more concrete knowledge.</p>
                    </div>
                    <div className="findings1" >
                        <p className="evidence1"><em>“There are so many insurances in the United States, it’s hard to learn about the differences between them”</em></p>
                        <p className="evidence1"><em>“For international students who don’t know a lot about insurance in US, it’s hard to find providers”</em></p>
                        <p className="evidence1"><em>“Finding a place that accepts their insurance is difficult... many students avoid seeking care because of it”</em></p>
                        <p className="evidence1"><em>“I come across many people that are unsure of their insurance options and how they work. I think it has a lot do to with the fact that there is no centralized system for learning how insurance works”</em></p>
                        <p className="evidence1"><em>7/11 interviewees expressed an interest in learning more about healthcare insurance</em></p>
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default CareTech;