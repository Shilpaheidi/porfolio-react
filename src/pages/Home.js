import React from 'react'
import "../styles/Home.css"
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Shilpa</h2>
        <div className='prompt'>

          <p>As a passionate software developer, I am constantly seeking new opportunities and skills to expand my knowledge and excel in the ever-evolving tech industry.

            I thrive on the excitement of learning emerging technologies and frameworks, and actively engage in the developer community to stay updated with the latest trends and best practices.</p>
          <LinkedInIcon />
          <EmailIcon />

          <GithubIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              Angular,HTML,CSS,NPM,Yarn,TailwindCSS,Angular Material
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
              NestJs, MySQL 
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>
              JavaScript,Typescript
            </span>
          </li>
        </ol>
      </div>

    </div>

  )
}

export default Home