import style from './Header.module.css';

const Header = () => {
    return (
        <div>


<div className={style.header} className={style.container}>
  <div className={style.logo}>
    <h1><a href="#"><span>Cook</span>Book</a></h1>
  </div>
  <div className={style.menu}>
    <ul>

      <li><a href="#">Homepage</a></li>

      <li><a href="#">Login</a></li>
      <li><a href="#">Register</a></li>
      <li><a href="#">Create</a></li>

    </ul>
  </div>
</div>


        </div>
    );
}

export default Header;