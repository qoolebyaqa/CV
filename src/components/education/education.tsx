import educationStyle from "./education.module.scss"

const Education = () => {
  return (
    <div className={educationStyle.studyContainer}>
      <h2>Education:</h2>
      <ol className={educationStyle.studylist}>
        <li>JavaScript/Front-end 2022Q3</li>
        <li>Russian State University of Oil and Gas - branch in the Tashkent city.</li>
        <li>Proffesional informatic college in the Tashkent city.</li>
      </ol>
    </div>
  )
}

export default Education;