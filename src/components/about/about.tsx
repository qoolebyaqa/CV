import aboutStyles from "./about.module.scss"

const About = () => {
  return (
    <div>
      <h2>About Me:</h2>
      <div className={aboutStyles.aboutContainer}>
        <ul className={aboutStyles.aboutlist}>
          <li>Responsible</li>
          <li>Effective</li>
          <li>Educable</li>
          <li>Cooperative</li>
          <li className={aboutStyles.questionsign}>Communicative</li>
        </ul>
        <div>
          <p>I like to discover the new things, people and places. 
            I will be glad to be a part of the team with intersting ideas. 
            I will try to do the work more easier for everyone. 
            My aim to find task that cannot be resolved with Google :D</p>
        </div>
      </div>
    </div>
  )
}

export default About;