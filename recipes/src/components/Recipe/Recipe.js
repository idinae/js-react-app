import { Link } from 'react-router-dom';

import style from './Recipe.module.css';

const Recipe = ({
  id,
  type,
  name,
  description,
  imageUrl,
}) => {

    return (
      <div className={style.thumbnail}>
        <Link to={`/recipes/details/${id}`}><img className="image" src={imageUrl} alt="" /></Link>
        <h3>{name}</h3>
        <p>{description}
        </p>
        <Link to={`/recipes/details/${id}`} className={style.button}>Details</Link>
      </div>
    );
}

export default Recipe;