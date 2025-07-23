import "../styling/Bloom.css"
import BloomPoster from "../assets/BloomPoster.jpg"
import BloomPDF from "../assets/BloomPDF.pdf"

export default function Bloom() {
    return(
        <div className="bloomPage">
            <h1>Bloom: Iot-enabled Hydroponic Solution</h1>
            <p>In Collaboration with: Pagnapech Chamroeun, Ricardo Granados, Caiyin Lin</p>
            <br></br>
            <h2>Project Overview</h2>
            <img src={BloomPoster} />
            <br></br>
            <h2>Objective</h2>

            <br></br>
            <h2>Documentation</h2>
            <iframe
                src={BloomPDF}
                width="100%"
                height="1000px"
                style={{ border: "none" }}
                title="Bloom Project PDF"
            ></iframe>
            <br></br>
        </div>
    )
}