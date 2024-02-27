import expStyles from "./exp.module.scss"

const Exp = () => {
  return (
    <div>
      <ul className={expStyles.expList}>
        <li><a className={expStyles.expLink} href="https://qoolebyaqa.github.io/online-store/">Online-store</a></li>
        <li><a className={expStyles.expLink} href="https://qoolebyaqa.github.io/RS-Clone/">Task-board</a></li>
        <li><a className={expStyles.expLink} href="https://qoolebyaqa.github.io/AudioQuiz-JS/start-page/">Audio-Quiz</a></li>
        <li><a className={expStyles.expLink} href="https://qoolebyaqa.github.io/OnlineZoo-VanillaJS/online-zoo/pages/main/">Online-zoo</a></li>
        <li><a className={expStyles.expLink} href="https://qoolebyaqa.github.io/Shelter-VanillaJS/shelter/pages/main/">Shelter</a></li>
        <li><a className={expStyles.expLink} href="https://qoolebyaqa.github.io/game15-VanillaJS/gem-puzzle/">Game-15</a></li>
      </ul>
    </div>
  )
}

export default Exp;