import { Link } from 'react-router-dom';
import style from './MainNav.module.css';

const MainNav = () => {
    return (

                <div className={style.dropdown} >
                    <button className={style.dropbtn}>Филтър</button>
                        <div className={style.dropdowncont}>
                            <Link to="/type/starters">Предястия</Link>
                            <Link to="/type/mains">Основни</Link>
                            <Link to="/type/desserts">Десерти</Link>
                        </div>
                </div>            


    );
}

export default MainNav;