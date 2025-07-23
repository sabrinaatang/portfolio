import React from "react";
import backbay from "../assets/backbay.jpg"
import dogs from "../assets/dogs.jpg"
import backbay2 from "../assets/backbay2.jpg"
import taipei from "../assets/taipei.jpg"
import angel1 from "../assets/angel1.jpg"
import charm from "../assets/charm.jpg"
import trail1 from "../assets/trail1.jpg"
import "../styling/Photography.css"
import Navbar from "../components/Navbar";

function Photography() {
    const images = [
        { id: 1, src: backbay, alt: "Back Bay 1" },
        { id: 2, src: backbay2, alt: "Back Bay 2" },
        { id: 3, src: dogs, alt: "Dogs" },
        { id: 4, src: taipei, alt: "Taipei"},
        { id: 5, src: charm, alt: "charms"},
        { id: 6, src: trail1, alt: "trail"},
        { id: 7, src: angel1, alt: "Angel Lai"},

    ]

    return (
        <div className="photography-page">
            <Navbar />
            <h3>Photography</h3>
            <p>A few photos I've taken (various cameras)...</p>
            <div className="photo-gallery">
                {images.map((image) => (
                    <img key={image.id} src={image.src} alt={image.alt} className="photo" />
                ))}
            </div>
        </div>
    )
}

export default Photography;