import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  return (
    <section className="projects">
      <h2 className='section-title' style={
        {color:"white"}
      }>My Projects</h2>

      <div className="project-grid">

        <div className="project-card">
          <Image src={"/images/cofee.jpg"} alt='project image' height={1000} width={1000}/>
          <h3>Cofee Website</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam eveniet dignissimos. Debitis sapiente deleniti saepee repellat.</p>
          <div className="btn-group">
            <div className="btn"><Link className='Link' href={"https://coffee-web-a.vercel.app/"} target='_blank' style={{color:"white"}}>Live Demo</Link></div>
            <div className="btn"><Link className='Link' href={"https://github.com/ayesha-aziz123/Coffee-web"} style={{color:"white"}} target='_blank'>Github Link</Link></div>
          </div>
        </div>

        <div className="project-card">
          <Image src={"/images/thumb4.png"} alt='project image' height={1000} width={1000}/>
          <h3>Food Website</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam eveniet dignissimos. Debitis sapiente deleniti saepee repellat.</p>
          <div className="btn-group">
            <div className="btn"><Link className='Link' href={"https://milestone-2-assiangment-a.vercel.app/?vercelToolbarCode=KaM1hfp4n7iz8Sw"} target='_blank' style={{color:"white"}}>Live Demo</Link></div>
            <div className="btn"><Link className='Link' href={"https://github.com/ayesha-aziz123/Milestone-2_Assiangment-FoodWebsite"} target='_blank' style={{color:"white"}}>Github Link</Link></div>
          </div>
        </div>


        <div className="project-card">
          <Image src={"/images/resume.jpg"} alt='project image' height={1000} width={1000}/>
          <h3>Resume Builder</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam eveniet dignissimos. Debitis sapiente deleniti saepee repellat.</p>
          <div className="btn-group">
            <div className="btn"> <Link className='Link' href={"https://milestone1-static-interactive-resume-builder-ayesha.vercel.app/"} target='_blank' style={{color:"white"}}>live Demo</Link></div>

            <div className="btn" > <Link className='Link' href={"https://github.com/ayesha-aziz123/Milestone1-Static-Interactive-Resume-Builder-"} style={{color:"white"}} target='_blank'>Github Link</Link> </div>
          </div>
        </div>



      </div>
    </section>
  )
}

export default Projects