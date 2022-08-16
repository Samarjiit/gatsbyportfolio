import * as React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet"

import ClientOnly from "../components/ClientOnly.js"
import Cursor from "../components/Cursor.js"
import Navigation from "../components/Navigation.js"
import Hero from "../components/Hero.js"
import Footer from "../components/Footer.js"
import Card from "../components/Card.js"
import * as styles from '../components/AboutGrid.module.css'


import "../components/reset.css"
import "../components/global.css"
import im from "../images/im.jpg"

// markup
const AboutPage = () => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  function projectEnter(event) {
    setCursorText("View");
    setCursorVariant("project");
  }

  function cursorLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

  function contactEnter(event) {
    setCursorText("👋");
    setCursorVariant("contact");
  }

  function photoEnter(event) {
    setCursorText("❤️");
    setCursorVariant("contact");
  }

  function linkEnter(event) {
    setCursorText("");
    setCursorVariant("link");
  }

  return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Samarjit Mahi - About Me</title>
          <meta name="description" content="Samarjit Mahi ." />
          <link rel="canonical" href="https://samarjitmahi.io/about/" />
        </Helmet>
        <Navigation onLinkEnter={linkEnter} onLinkLeave={cursorLeave} />
      
  
        <ClientOnly>
          <Cursor cursorText={cursorText} cursorVariant={cursorVariant} />
        </ClientOnly>
        <motion.section className="">
               <img src={im}   alt="BigCo Inc. logo"/>

        </motion.section>

        <br/> <br/> 
{/*
        <motion.section className="grid">
          <div className={styles.aboutGrid}>
            <motion.div className={`${styles.video} ${styles.first}`}>
              <video src="https://newportfolio.s3-us-west-2.amazonaws.com/daniel.mp4" className={styles.video} autoPlay muted loop />
            </motion.div>
            <motion.div className={styles.wrapper}>
              <div className={styles.smallVideo}>
                <video src="https://newportfolio.s3-us-west-2.amazonaws.com/wave.mp4" className={styles.video} autoPlay muted loop />
              </div>
              <div className={`${styles.smallVideo} ${styles.second}`}>
                <video src="https://newportfolio.s3-us-west-2.amazonaws.com/franklin.mp4" className={styles.video} autoPlay muted loop onMouseEnter={photoEnter} onMouseLeave={cursorLeave}/>
              </div>
            </motion.div>
            <motion.div className={`${styles.video} ${styles.third}`}>
              <video src="https://newportfolio.s3-us-west-2.amazonaws.com/mondo.mp4" className={styles.video} autoPlay muted loop  onMouseEnter={photoEnter} onMouseLeave={cursorLeave}/>
            </motion.div>
            <motion.div className={`${styles.video} ${styles.fourth}`}>
              <video src="https://newportfolio.s3-us-west-2.amazonaws.com/irma.mp4" className={styles.video} autoPlay muted loop onMouseEnter={photoEnter} onMouseLeave={cursorLeave} />
            </motion.div>
          </div>
        </motion.section>*/}
        <motion.section className="grid about">
          <div className="bio">
            
            <h2 className="h2">A product guy who loves to build products with the help of three core elements - Design , Technology and Business.
</h2>
          </div>
          <div className="bio-body">
            <p className="paragraph paragraph--large">
              I believe in empathizing with customers to solve their problems. I aspire to be a product leader with an interest in building products that can impact the life of billions of peoples.
            </p>
            <p className="paragraph paragraph--large">
              An amalgamation of my interests; design, technology and products, has inclined me towards Product management, specifically, creating strategic and meaningful experiences for people. More over, I love taking initiatives and have also led teams to solve problems and connect everyone with vision. Now, I'm looking to grow and explore the field with experts and users around the world.
              I’m always trying to improve my craft, continue learning, and help others grow.
            </p>
            <p className="paragraph paragraph--large">
              Along the way, I've learned to embrace the process, think holistically, collaborate in a team and empathize with the users better. Beside this, I spend my free time on reading, writing, playing badminton  and creating short video content. and getting outside my comfort zone!
            </p>
          </div>
        </motion.section>

        <motion.section className="grid about">
          <div className="experience">
            <h2 className="h2">Experience</h2>
            <ul className="list"> 
              <li className="list-item">
                <h6 className="h6 timeline">
                  2020 - 2021
                </h6>
                <h4 className="h4">
                  Community Lead - Google Developer student clubs
                </h4>
                <h5>

                  At Developer Student Club, PGDAV: 

                <ul>
                  <li>-> Founded a Developer Student Club at my campus. Helped around 400+ students start/enhance their journey into the tech world.
 </li>
 <li>-> Took 20+ technical and non-technical sessions in my college, other developer clubs, and colleges. 
 </li>
 <li>-> Reviewed 100+ applicants in our various
hiring processes and interviewed around 50
of them and selected 12 member team</li>
 <li>->To know more about the GDSC PGDAV :<a href=" https://dscpgdav.netlify.app/">click here</a>
 </li>
                  
                </ul>  




                </h5>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2018 - 2020
                </h6>
                <h4 className="h4">
                  Building Hplumbers
                </h4>
                <ul>
                  <li>-> Hplumbers is a platform that tries to provide best residential plumbing service in Vasant Kunj and nearby areas. Why do people believe us because we solve most of their issues considering it as our own housework. Customer satisfaction is our top most priority. With courteous skill, experience, unique methods, Hplumbers always try to provide a high quality and affordable solution for every residential plumbing problem.
 </li>
 <li>->  My operating function is handling all technical stuffs related to website and social media accounts, To define the company’s growth and expansion strategy, creating business strategy for more scalability and customer reach.
 </li>
 <li>->Building brand from 0 to 200 organic impressions per week on google my business</li>
 <li>-> Worked with interns to create more web presence in a course of 24 months, along with more than 10 volunteers from across Vasant Kunj while driving the offline-marketing.</li>
 <li>->To know more about HPlumbers :<a href=" https://hplumber.netlify.app/">click here</a>
 </li>
                  
                </ul>  

              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2020 - present
                </h6>
                <h4 className="h4">
                  Podcast Host
                </h4>
                <ul>
                  <li>-> "The Samar Show", a podcast series exploring the stories, processes & projects of
interesting and upcoming designers, developers, programmers and product folks.
 </li>
 <li>-> 🎙 I spoke to designers, developers, entrepreneur to figure out what you need, how you
can get internships, the interview processes, process and more!</li>
 </ul>
              </li>
              
            </ul>
          </div>
          <div className="previous-work">
            <h2 className="h2">Writing</h2>
            <ul className="list">
              <li className="list-item">
                <h6 className="h6 timeline">
                  2021 - Medium
                </h6>
                <h4 className="h4">
                  <a href="https://medium.com/me/stats/post/c435e2f8851b">How to set up Custom Design Linting</a>
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2021 - Figma File
                </h6>
                <h4 className="h4">
                  <a href="https://www.figma.com/community/file/942856928187155104">Intro to Figma Plugin Api</a>
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2020 - Medium
                </h6>
                <h4 className="h4">
                  <a href="https://blog.discord.com/building-open-source-design-tools-to-improve-discords-design-workflow-9a25c29f9143">Building Open Source Plugins</a>
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2018 - Medium
                </h6>
                <h4 className="h4">
                  <a href="https://blog.discord.com/redesigning-the-discord-overlay-cc31c6042d6d">Redesigning the Discord Overlay</a>
                </h4>
              </li>
            </ul>
            {/* <ul className="list">
              <li className="list-item">
                <h6 className="h6 timeline">
                  2017 - Design and Engineering
                </h6>
                <h4 className="h4">
                  SteelSeries.com and Engine Software
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2017 - Design and Engineering
                </h6>
                <h4 className="h4">
                  P.W. LaRue Co. Webshop
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2015 - Engineering and Design
                </h6>
                <h4 className="h4">
                  Foreign Affairs News
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2015 - UX
                </h6>
                <h4 className="h4">
                  Yale Art Gallery
                </h4>
              </li>
              <li className="list-item">
                <h4 className="h4">
                  View LinkedIn ->
                </h4>
              </li>
            </ul> */}
          </div>
        </motion.section>

        <motion.section className="container next-project">
          <div className="grid">
            <h2 className="h2 grid-title">Next Project</h2>
          </div>
          <div className="grid work-grid">
            <Card
              image="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/server-video-tile-imagee.png"
              imageAlt="Mockup of Discord's video chat feature with a person using it"
              link="/server-video"
              color="pink"
              title="Server Video"
              size="normal"
              onProjectEnter={projectEnter}
              onProjectLeave={cursorLeave}
            />
            <Card
              image="https://newportfolio.s3-us-west-2.amazonaws.com/discord-onboarding-image.png"
              imageAlt="Image of Discord's Onboarding Screen"
              link="/discord-growth"
              color="blue"
              title="Discord Onboarding"
              size="normal"
              onProjectEnter={projectEnter}
              onProjectLeave={cursorLeave}
            />
          </div>
        </motion.section>
        <Footer onFooterEnter={contactEnter} onFooterLeave={cursorLeave} onLinkEnter={linkEnter} onLinkLeave={cursorLeave}/>

      </div>
  )
}

export default AboutPage
