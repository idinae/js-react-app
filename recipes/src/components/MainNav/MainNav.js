import { Link } from 'react-router-dom';
import style from './MainNav.module.css';

const MainNav = () => {
    return (

                <div className={style.dropdown} >
                    <button className={style.dropbtn}>Всички</button>
                        <div className={style.dropdowncont}>
                            <Link to="/types/salads">Салати</Link>
                            <Link to="/types/soups">Супи</Link>
                            <Link to="/types/mains">Основни</Link>
                        </div>
                </div>            


    );
}

export default MainNav;