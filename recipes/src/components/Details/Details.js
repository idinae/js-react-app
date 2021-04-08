import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as recipeService from '../../services/recipeService';

import style from './Details.module.css';


const Details = ({
    match,
    isAuthenticated
}) => {
    let [recipe, setRecipe] = useState({});
    useEffect(() => {
        // we take the recipe with match and save it 
        recipeService.getOne(match.params.recipeId)
            .then(res => setRecipe(res))
    }, [match.params.recipeId]);
 
    return(
        <div className={style.container}>
            <article className={style.articlewrapper}>
                <img className={style.image} src={recipe[0]?.imageurl} alt="" />
                <div className={style.column}>
                    <article className={style.articlecontent}>
                        <h2>{recipe[0]?.name}</h2>
                        <h3>Продукти:</h3>
                        <p>{recipe[0]?.products}</p>
                        <h3>Приготовление:</h3>
                        <p>{recipe[0]?.description}</p>
                        {isAuthenticated ? <Link to={`/recipes/details/${recipe.id}/edit`} className={style.button}>Редактирай</Link> : '' }
                        {isAuthenticated ? <Link to={`/recipes/details/${recipe.id}/delete`} className={style.button}>Изтрий</Link> : '' }
                    </article>
               </div>
            </article>
        </div>
    )
}

export default Details;