import { useState, useEffect } from 'react';
import * as recipeService from '../../services/recipeService';
import style from './Profile.module.css';

const Profile = ({
    username
}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeService.getAll()
            .then(res => setRecipes(res))
            .then(console.log(recipes)
            )
    }, [])

    return(
        <div className={style.articlewrapper}>
            <h1>Моят профил</h1>
                <h2>Моите данни</h2>
                <span>Регистриран имейл:&nbsp;&nbsp; {username}</span>
                <h2>Моите рецепти</h2>
                    <div>                      
                        {
                        recipes
                            .filter(x => x.author === username)
                            .map(x => <div key={x._id} >{x.name}</div>)
                        }
                    </div>
        </div>
    )
}

export default Profile;