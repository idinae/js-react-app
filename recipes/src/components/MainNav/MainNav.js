import { Link, useHistory } from 'react-router-dom';
import style from './MainNav.module.css';

const MainNav = (props) => {
    // console.log(props.typecheck);
    const history = useHistory();
    const handleClick = () => history.push('/');

    return (
                <div className={style.dropdown} >
                    <button onClick={handleClick} className={style.dropbtn}>{!props.typecheck ? 'Филтър' : 'Изчисти'}</button>
                        <div className={style.dropdowncont}>
                            <Link to="/type/starters">Предястия</Link>
                            <Link to="/type/mains">Основни</Link>
                            <Link to="/type/desserts">Десерти</Link>
                        </div>
                </div>            
    );
}

export default MainNav;