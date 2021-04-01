import { Link } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
    return (
        <div>


          <div className={style.header} className={style.container}>
            <div className={style.logo}>
              <h1><Link to="/"><span>Cook</span>Book</Link></h1>
            </div>
            <div className={style.menu}>
              <ul>

                <li><Link to="/">Home</Link></li>
                {/* <li><Link to="/blog">Blog</Link></li> */}
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/recipes/create">Create</Link></li>
                <li><Link to="/logout">Logout</Link></li>

              </ul>
            </div>
          </div>


        </div>
    );
}

export default Header;