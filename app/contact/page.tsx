import React from 'react'
import { FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    // <!-- Contact foarm -->
    <section className="contact" id="contact">
      <h2 className="heading">Contact Me</h2>
      {/* <!-- foarm  --> */}
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="FullName" required />
          <input type="email" placeholder="Email" required />
        </div>

        <div className="input-box">
          <input type="number" placeholder="Phone number" />
          <input type="text" placeholder="Subject" />
        </div>

        <textarea
          id="input1"
          name=""
          cols={20}
          rows={7}
          placeholder="Your Message"
        ></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  )
}

export default Contact