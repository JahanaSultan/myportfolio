import React from "react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  AOS.init();
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <>
      <nav className="padding-x">
        <a href="">
          {" "}
          <div className="logo" data-aos="fade-right">
            <h1>JS</h1>
          </div>
        </a>
        <div className="navlinks">
          <ol>
            <a href="#aboutme">
              <li
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="200"
              >
                <span>01.</span> About
              </li>
            </a>
            <a href="#works">
              <li
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <span>02.</span> Works
              </li>
            </a>
            <a href="#contact">
              {" "}
              <li
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="700"
              >
                <span>03.</span> Contact
              </li>
            </a>
          </ol>
        </div>
      </nav>
      <div className="social-media">
        <ul>
          <a
            href="https://www.linkedin.com/in/jahanasultan/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            <li
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="200"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </li>
          </a>
          <a
            href="https://medium.com/@jahanasultan"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            <li
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <i className="fa-brands fa-medium"></i>
            </li>
          </a>
          <a
            href="https://github.com/JahanaSultan"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            <li
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <i className="fa-brands fa-github"></i>
            </li>
          </a>
        </ul>
        <div className="line" data-aos="fade-up" data-aos-duration="500"></div>
      </div>
      <div
        className={showTopBtn ? "backtotop translate" : "backtotop"}
        onClick={() => window.scrollTo(0, 0)}
      >
        <i className="fa-solid fa-angles-up"></i>
      </div>
    </>
  );
}

export default Header;
