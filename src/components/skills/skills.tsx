import Education from "../education/education";
import skillsStyles from "./skills.module.scss"

const Skills = () => {
  return (
    <div className={skillsStyles.skills}>
      <div className={skillsStyles.wrapper}>
        <h2>My Skills:</h2>
        <ul className={skillsStyles.skillslist}>
          <li>Git</li>
          <li>MarkDown</li>
          <li>HTML</li>
          <li>CSS - SCSS</li>
          <li>JavaScript, TypeScript</li>
          <li>FrameWorks: React, Angular - Beginer</li>
        </ul>
      </div>
    <Education />
    </div>
  )
}

export default Skills;