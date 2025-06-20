
function Contact() {
  return (
    <>

      <section className="contact" id='contact'>

        <div className="heading padding-x">
          <h1><span>03.</span> Contact</h1>
        </div>
        <div className="content">
          <div className="header">
            <h1>Get In Touch</h1>
            <p>Whether you have a question or just want to say hi, <br /> I’ll try my best to get back to you!</p>
          </div>
          <form action="https://formspree.io/f/xeqdjjjy"
            method="POST"
          >
            <div className="input"><input type="text" placeholder='FullName...' />
              <input type="email" name="email" placeholder='Email...' /></div>
            <textarea name="message" placeholder='Message...'></textarea>
            <button type='submit' className="button">Send Me</button> </form>
        </div>

      </section>

      <div className="copyright">
        <div className="social-media">
          <ul>
            <a
              href="https://www.linkedin.com/in/jahanasultan/"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              <li >
                <i className="fa-brands fa-linkedin-in"></i>
              </li>
            </a>
            <a
              href="https://medium.com/@jahanasultan"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              <li >
                <i className="fa-brands fa-medium"></i>
              </li>
            </a>
            <a
              href="https://github.com/JahanaSultan"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              <li>
                <i className="fa-brands fa-github"></i>
              </li>
            </a>
          </ul>

        </div>
        <p> by Jahana Sultan 2022 </p>
      </div>
    </>
  )
}

export default Contact