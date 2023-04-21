import expStyles from "./exp.module.scss"

const Exp = () => {
  return (
    <div>
      <ul className={expStyles.expList}>
        <li><a className={expStyles.expLink} href="https://qoolebyaqa.github.io/online-store/">Online-store</a></li>
        <li><a className={expStyles.expLink} href="https://qoolebyaqa.github.io/RS-Clone/">Task-board</a></li>
      </ul>
    </div>
  )
}

export default Exp;