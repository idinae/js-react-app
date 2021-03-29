import style from './Recipe.module.css';

const Recipe = ({
  id,
  type,
  name,
  description,
  imageUrl,
}) => {
    return (

<div className={style.reciperow}>

    <div className={style.thumbnail}>
      <a href="/details/cook/:id"><img className="image" src={imageUrl} alt="" /></a>
      <h3>{name}</h3>
      <p>{description}
      </p>
      <a href="/details/{{cook.id}}" className={style.button} onClick="onSelected(cook)">Details</a>
    </div>

</div>


    );
}

export default Recipe;