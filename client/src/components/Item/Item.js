import style from './Item.module.css';

const Item = () => {
    return (

<div className={style.row}>

    <div className={style.thumbnail}>
      <a href="/details/cook/:id"><img className="image" src="./assets/images/img01.jpg" alt="" /></a>
      <h3>name</h3>
      <p>description
      </p>
      <a href="/details/{{cook.id}}" className={style.button} onClick="onSelected(cook)">Details</a>
    </div>

    <div className={style.thumbnail}>
    <a href="/details/cook/:id"><img className="image" src="./assets/images/img02.jpg" alt="" /></a>
    <h3>name</h3>
    <p>description
    </p>
    <a href="/details/{{cook.id}}" className={style.button} onClick="onSelected(cook)">Details</a>
    </div>

    <div className={style.thumbnail}>
    <a href="/details/cook/:id"><img className="image" src="./assets/images/img03.jpg" alt="" /></a>
    <h3>name</h3>
    <p>description
    </p>
    <a href="/details/{{cook.id}}" className={style.button} onClick="onSelected(cook)">Details</a>
    </div>



</div>


    );
}

export default Item;