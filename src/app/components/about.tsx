"use client";

import Image from "next/image";

export default function About() {
  return (
    <section >
      <div className="container">
        <div className="about-section">
          <h1 style={{marginBottom:"20px", fontSize:"2rem"}}>About ME</h1>
          <p className="para">
            Hi, I'm Ayesha, a 19-year-old web Developer from Karachi Pakistan.
            I'm second-year pre-medical student. I’ve also developed a strong
            interest in web development. Currently, I’m learning the essentials
            of HTML, CSS, and JavaScript, TypeScript TailwindCSS to create
            responsive and functional websites. Looking ahead, I'm also planning
            to dive deeper into frameworks like React and Next.js Powerful
            Framework ro enhance to deliver high-quality modern web solutions.
            My goal is to combine my passion for learning with technical
            expertise to create efficient, user-friendly digital experiences.
            Let’s collaborate and bring your ideas to life!
          </p>
        </div>

        <div className="img-section">
          <Image
          id="about-img"
            width={300}
            height={300}
            alt={"about-logo"}
            src={require("../../../public/picture/dp2.jpg")}
          ></Image>
        </div>
      </div>
    </section>
  );
}
