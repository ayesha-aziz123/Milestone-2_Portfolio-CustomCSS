import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <section className='skills'>
      <h2 className='section-title'>My Skills</h2>
        
        <div className="skills-grid">
            <div className="skill-item">
                <Image src={"/images/html.svg"} alt='skill' width={100} height={100}/>
                <h2>HTML</h2>
                <p>100%</p>
            </div>

            <div className="skill-item">
                <Image src={"/images/css.svg"} alt='skill' width={100} height={100}/>
                <h2>CSS</h2>
                <p>100%</p>
            </div>

            <div className="skill-item">
                <Image src={"/images/js.svg"} alt='skill' width={100} height={100}/>
                <h2>JavaScript</h2>
                <p>85%</p>
            </div>

            <div className="skill-item">
                <Image src={"/images/ts.svg"} alt='skill' width={100} height={100}/>
                <h2>TypeScript</h2>
                <p>90%</p>
            </div>

            <div className="skill-item">
                <Image src={"/images/react.svg"} alt='skill' width={100} height={100}/>
                <h2>React.Js</h2>
                <p>75%</p>
            </div>

            <div className="skill-item">
                <Image src={"/images/nextCustom.svg"} alt='skill' width={100} height={100}/>
                <h2>Next.Js</h2>
                <p>80%</p>
            </div>
        </div>
    </section>
  )
}

export default Skills