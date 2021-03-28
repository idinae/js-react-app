import style from './Main.module.css';
import Item from '../Item';

const Main = () => {
    return (
        <div>
        <div className={style.banner} className={style.container}> 
            <img src="./assets/images/img1.jpg" alt="banner-image" />
        </div>
        <div className={style.container}>
        <header>
            <h2>Топ 3 рецепти</h2>
        </header>

        <div className={style.row}>

            <Item />

        </div>
        </div>
        </div>
    );
}

export default Main;