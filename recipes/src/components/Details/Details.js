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
                    <h3>{recipe.name}</h3>
                    <p>{recipe.description}</p>
                    <Link className={style.button}>Edit</Link>
                    <Link className={style.button}>Delete</Link>
               </div>
            </article>
        </div>
    )
}

export default Details;