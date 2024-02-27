import headerStyles from './header.module.scss' 

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <aside>
      <h2>Contact Details</h2>
        <ul className={headerStyles.header__contacts}>
          <li className={headerStyles.header__contacts_item}>Phone: <a href="tel: +998909541493">+998 90 954 14 93</a></li>
          <li className={headerStyles.header__contacts_item}>E-mail: <a href="mailto: qoolebyaqa@gmail.com">qoolebyaqa@gmail.com</a></li>
          <li className={headerStyles.header__contacts_item}>GitHub: <a href="https://github.com/qoolebyaqa">qoolebyaqa</a></li>
          <li className={headerStyles.header__contacts_item}>Location: Tashkent, Uzbekistan</li>
        </ul>
      </aside>
      <div className={headerStyles.text__part}>
        <h4 className={headerStyles.name}>Arthur</h4>
        <h2 className={headerStyles.surname}>Ten</h2>
        <p className={headerStyles.header__prof}>Front-end Developer</p>
      </div>
      <div className={headerStyles.photo__container}>
      </div>
    </header>
  )
}

export default Header;