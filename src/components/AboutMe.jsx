import React from 'react'
import me from "../assets/image/me.jpg"

function AboutMe() {
  return (
    <>
    <section className="aboutme padding-x" id='aboutme'>

        <div className="heading">
         <h1><span>01.</span> About Me</h1>

        </div>
        <div className="content">
            <div className="left">
                <p>I am a software developer and I live in Baku. I spend my days in many different areas of web development from back-end programming (Django/Python) to front-end engineering (HTML, CSS, jQuery/Javascript, React), digital accessibility, user experience, and visual design . I'm extremely passionate about web development and design in all its forms and helping small businesses and artisans build and improve their online presence.</p> 
            </div>
            <div className="right">
                <div className="img"><img src={me} alt="" /></div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default AboutMe