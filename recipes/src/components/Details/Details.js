import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as recipeService from '../../services/recipeService';

import style from './Details.module.css';


const Details = ({
    match
}) => {
    let [recipe, setRecipe] = useState({});

    useEffect(() => {
        // we take the recipe with match and save it 
        recipeService.getOne(match.params.recipeId)
            .then(res => setRecipe(res));
    }, []);

    return(
        <div className={style.container}>
            <article className={style.articlewrapper}>
                <img className={style.image} src={recipe.imageUrl} alt="" />
                <div className={style.column}>
                    <article className={style.articlecontent}>
                        <h2>{recipe.name}</h2>
                        <h3>Продукти:</h3>
                        <p>{recipe.products}</p>
                        <h3>Приготовление:</h3>
                        <p>{recipe.description}</p>
                        <Link to={`/recipes/details/${recipe.id}/edit`} className={style.button}>Редактирай</Link>
                        <Link to={`/recipes/details/${recipe.id}/delete`} className={style.button}>Изтрий</Link>
                    </article>
               </div>
            </article>
        </div>
    )
}

export default Details;