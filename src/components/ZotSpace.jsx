import ZotSpace from "../images/ZotSpace.mp4"
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


            <br></br>
            <h2>User Research</h2>



            <br></br>
            <h2></h2>

            <br></br>
        </div>
        </>
    )
}