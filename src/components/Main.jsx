import React from 'react'
import cv from "../assets/file/CV-2025.pdf"

function Main() {
    return (
        <>
            <header className='padding-x' data-aos="fade-left" data-aos-easing="linear"
                data-aos-duration="500">
                <div className="box">
                    <p>Hi, my name is</p>
                    <h1>Jahana Sultan</h1>
                    <h1>I am Software Developer</h1>
                    <p> with 4+ years of experience
                        designing, developing, and implementing applications and solutions using a
                        range of technologies and programming languages.</p>
                    <a className='button' href={cv} download="JahanaSultan.pdf">Download Resume</a></div>
            </header>


        </>
    )
}

export default Main
