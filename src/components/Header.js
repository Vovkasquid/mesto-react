import logo from '../images/logo_mesto.svg';

function Header() {
  return (
    <header className="header page__header">
      <img src={logo} alt="Логотип соцсети Место" className="logo"/>
    </header>
  );
}

export default Header;
