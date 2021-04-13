import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as recipeService from '../../services/recipeService';

import style from './Details.module.css';

const Details = ({
    match,
    isAuthenticated,
    username,
    history
}) => {
    let [recipe, setRecipe] = useState({});

    useEffect(() => {
        // we take the recipe with match and save it 
        recipeService.getOne(match.params.recipeId)
            .then(res => setRecipe(res))
    }, [match.params.recipeId]);
 
    const onClickLikeHandler = () => {
        let incrementedLikes = recipe[0]?.likes + 1;
        recipeService.like(match.params.recipeId, incrementedLikes)
            .then(() => {
                setRecipe(state => ({...state, likes: incrementedLikes}))
            })
            .then((res) => {
                 setRecipe(state => ({...state, likes: res.new_likes}))
            })
    }

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
                            {isAuthenticated && username === recipe[0]?.author ? <Link to={`/recipes/details/${recipe[0]?._id}/edit`} className={style.button}>Редактирай</Link> : '' }
                            {isAuthenticated && username === recipe[0]?.author ? <Link to={`/recipes/details/${recipe[0]?._id}/delete`} className={style.button}>Изтрий</Link> : '' }
                            <button className={style.btnlikes} onClick={onClickLikeHandler}><i className="far fa-heart"></i></button><span>{recipe[0]?.likes}</span>
                    </article>
               </div>
            </article>
        </div>
    )
}

export default Details;