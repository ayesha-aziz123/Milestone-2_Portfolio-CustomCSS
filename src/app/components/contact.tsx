export default function Contact() {
  return (
    <section style={{width:"100%"}}>
      <form>
        <div id="contact" className="contact-container">
          {/* headings */}
          <div className="headings-section">
            <h1 style={{fontSize:"40px",marginBottom:"10px"}}>Contact Us</h1>
            <h3 style={{fontWeight:'normal'}}>Feel free to Contact!</h3>
          </div>

          {/* inputs */}
          <div className="input-section" style={{width:"100%"}}>
            <div className="section">
              <div className="input1">
                <div style={{ position: "relative" }}>
                  <label style={{lineHeight:"28px"}} htmlFor="name">
                    Name:
                     </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      id="name"
                      className="sec-1"
                    />
                 
                </div>
              </div>

              <div className="input2">
                <div style={{ position: "relative" }}>
                  <label style={{lineHeight:"28px"}} htmlFor="email">
                    Email:
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      name="email"
                      id="email"
                      className="sec-2"
                    />
                  
                </div>
              </div>

              <div className="input3">
                <div style={{ position: "relative" }}>
                  <label style={{lineHeight:"28px"}} htmlFor="message">
                    Message:
                    </label>
                    <textarea
                    rows={5}
                    required
                    placeholder="Enter here "
                    name="message"
                    id="message"
                    className="sec-3"
                  />
                  
                </div>
              </div>

              <div className="btn">
                <button id="btn" type="submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
