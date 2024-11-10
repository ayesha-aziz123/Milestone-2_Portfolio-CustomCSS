import React from "react";
import Image from "next/image";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import image from "../../public/images/about.jpg"

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <Image
          src={image}
          alt="Profile Pic"
          height={2000}
          width={2000}
        />

        <div className="info-box">
          <div className="text">
            <h3>Hi Im</h3>
            <h1>Ayesha</h1>
            <span>FrontEnd Developer</span>
          </div>

          <div className="btn-group">
            <div className="btn">
              <Link style={{color:"white"}} className="aboutLink" href={"#"} target="_blank">
                Download CV
              </Link>
            </div>
            <div className="btn">
              {" "}
              <Link style={{color:"white"}} className="aboutLink" href={"/contact"}>
                Contact
              </Link>{" "}
            </div>
          </div>

          <div className="socials">
            <Link
              style={{ color: "white" }}
              href={"https://github.com/ayesha-aziz123"}
              target="_blank"
            >
              <FaGithub className="i" />
            </Link>

            <Link
              style={{ color: "white" }}
              href={"https://www.linkedin.com/in/ayesha-aziz-574780310/"}
              target="_blank"
            >
              <FaLinkedin className="i" />
            </Link>

            <Link
              style={{ color: "white" }}
              href={"#"}
              target="_blank"
            >
              <FaFacebook className="i" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
