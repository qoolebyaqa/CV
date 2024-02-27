import skillsStyles from "./skills.module.scss"

const Skills = () => {
  return (
    <div className={skillsStyles.skills}>
      <p>My Skills:</p>
      <ul className={skillsStyles.skillslist}>
        <li>Git</li>
        <li>MarkDown</li>
        <li>HTML</li>
        <li>CSS - SCSS</li>
        <li>JavaScript, TypeScript</li>
        <li>FrameWorks: React, Angular - Beginer</li>
      </ul>
    </div>
  )
}

export default Skills;