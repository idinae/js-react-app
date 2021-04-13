import { Link } from 'react-router-dom';

import style from './Recipe.module.css';

const Recipe = ({
  id,
  type,
  name,
  description,
  imageUrl,
  likes
}) => {

    return (
      <div className={style.thumbnail}>
        <Link to={`/recipes/details/${id}`}><img className="image" src={imageUrl} alt="" /></Link>
        <h3>{name}</h3>
        <p>{description}
        </p>
        <article className={style.articlewrapper}>
          <div>
            <Link to={`/recipes/details/${id}`} className={style.button}>Детайли</Link>
          </div>
          <div>
            <i class="far fa-heart"></i><span>{likes}</span>
          </div>
        </article>
      </div>
    );
}

export default Recipe;