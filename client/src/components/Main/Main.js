import style from './Main.module.css';

const Main = () => {
    return (
        <div>
        <div className={style.banner} className={style.container}> 
            <img src="./assets/images/img1.jpg" width="1180" height="393" alt="" />
        </div>
        <div className={style.container}>
        <header>
            <h2>Топ 3 рецепти</h2>
        </header>

        <div className={style.row}>
            {/* <div className={style.col-sm-4}>
            <app-cooks-card [cook]="cook"></app-cooks-card>
            </div>    */}
        </div>
        </div>
        </div>
    );
}

export default Main;

