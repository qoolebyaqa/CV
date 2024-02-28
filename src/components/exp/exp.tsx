import expStyles from "./exp.module.scss"

const Exp = () => {
  return (
    <div className={expStyles.wrapper}>
      <h2>My study projects:</h2>
      <ul className={expStyles.expList}>
        <li><button className={expStyles.expLink}><a href="https://qoolebyaqa.github.io/online-store/">Online-store</a></button></li>
        <li><button className={expStyles.expLink}><a href="https://qoolebyaqa.github.io/RS-Clone/">Task-board</a></button></li>
        <li><button className={expStyles.expLink}><a href="https://qoolebyaqa.github.io/AudioQuiz-JS/start-page/">Audio-Quiz</a></button></li>
        <li><button className={expStyles.expLink}><a href="https://qoolebyaqa.github.io/OnlineZoo-VanillaJS/online-zoo/pages/main/">Online-zoo</a></button></li>
        <li><button className={expStyles.expLink}><a href="https://qoolebyaqa.github.io/Shelter-VanillaJS/shelter/pages/main/">Shelter</a></button></li>
        <li><button className={expStyles.expLink}><a href="https://qoolebyaqa.github.io/game15-VanillaJS/gem-puzzle/">Game-15</a></button></li>
      </ul>
    </div>
  )
}

export default Exp;