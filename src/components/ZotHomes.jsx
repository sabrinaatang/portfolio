import sitemap from "../images/sitemap.png"
export default function ZotHomes() {
    return(
        <div className="zothomes-popup" style={{color:"#729437", width:"100vh", height:"100vh", boxSizing:"border-box"}}>
            <h1>ZotHomes</h1>
            <p>Done in Collaboration with: Kavya Pabbaraju, Chengyou Ting, Maddie Annison</p>
            <h2>Video Demonstration of Prototype</h2>
            <iframe src="https://drive.google.com/file/d/1tbuK3u8QQIW-XwUxpnXkMr_YQ5ePK-mp/preview" width="640" height="480" allow="autoplay"></iframe>     
            <h2>Concept</h2> 
            <p>UC Irvine continually faces a shortage of housing availability for students, forcing students to turn to desperate measures to locate and afford a place to stay throughout their academic tenure. In order to alleviate the stress associated with acquiring housing, we created ZotHomes. This site allows students within the UC Irvine community to post and inquire lease offers, be it a year-long or temporary stay.</p>  
            <h2>Site Map</h2>
            <img src={sitemap} style={{width:"100%"}}></img>
        </div>
    )
}