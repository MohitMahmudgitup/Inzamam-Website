
import "../../App.css"



import "./Home-section.css"
import Amt from "../../components/Home/Home-Animation-Pic/Amt";
import Skill from "../../components/Home/Skill/Skill";
import { Helmet } from "react-helmet";
import Paragraph from "../../components/Home/Paragraph/Paragraph";
import Hero from "../../components/Home/Hero/Hero";
import Slide from "../../components/Home/Slide/Slide";
import AllSkill from "../../components/Home/Skill/AllSkill";
import LiveProducts from "../../components/Home/LiveProducts/LiveProducts";



function Homesection() {






  return (<>
    <Helmet>
      <title>Home | Mohit Mahmud - Full Stack Web Developer</title>
      <meta name="description" content="Mohit Mahmud is a Full Stack Web Developer skilled in React, Node.js, and MongoDB. Check out projects, skills, and contact information." />
      <meta name="keywords" content="Mohit Mahmud, Web Developer, Full Stack Developer, React, Node.js, MERN Stack, Bangladesh Developer" />
      <meta name="author" content="Mohit Mahmud" />

      {/* Open Graph Meta for Social Media */}
      <meta property="og:title" content="Mohit Mahmud - Full Stack Web Developer" />
      <meta property="og:description" content="Portfolio of Mohit Mahmud showcasing development skills, projects, and more." />
      <meta property="og:image" content="https://your-site.netlify.app/thumbnail.jpg" />
      <meta property="og:url" content="https://your-site.netlify.app/" />
      <meta property="og:type" content="website" />
    </Helmet>



    <main className="main scroll-container text-blue-50" >
      <Hero />
      <Amt />
      <Paragraph />
      <Slide />
      <AllSkill />
      <LiveProducts />
    </main>

  </>
  )
}

export default Homesection