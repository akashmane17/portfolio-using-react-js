import { AiOutlineGithub } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiRedux } from 'react-icons/si'

const Skills = () => {

  return (
    <section className={`skills  `} id="skills">

      <div className="skills-heading slideInLeft">
        <h2><span>Skill</span>-Set</h2>
      </div>

      <div className="cards flex-center">

        <div className="card">
          <div className="icon flex-center">
            <AiOutlineGithub />
          </div>
          <h3>Git Version Control</h3>
          <p>It is a long establiushed fact that a reader will be dsitracted by the readable content of a page when
            looking
            at its layout</p>
        </div>

        <div className="card">
          <div className="icon flex-center">
            <FaReact />
          </div>
          <h3>React JS</h3>
          <p>It is a long establiushed fact that a reader will be dsitracted by the readable content of a page when
            looking
            at its layout</p>
        </div>

        <div className="card">
          <div className="icon flex-center">
            <FaNodeJs />
          </div>
          <h3>Node JS</h3>
          <p>It is a long establiushed fact that a reader will be dsitracted by the readable content of a page when
            looking
            at its layout</p>
        </div>

        <div className="card">
          <div className="icon flex-center">
            <SiExpress />
          </div>
          <h3>Express JS</h3>
          <p>It is a long establiushed fact that a reader will be dsitracted by the readable content of a page when
            looking
            at its layout</p>
        </div>

        <div className="card">
          <div className="icon flex-center">
            <SiMongodb />
          </div>
          <h3>Mongo DB</h3>
          <p>It is a long establiushed fact that a reader will be dsitracted by the readable content of a page when
            looking
            at its layout</p>
        </div>

        <div className="card ">
          <div className="icon flex-center">
            <SiRedux />
          </div>
          <h3>Redux</h3>
          <p>It is a long establiushed fact that a reader will be dsitracted by the readable content of a page when
            looking
            at its layout</p>
        </div>

      </div>
    </section>
  )
}

export default Skills