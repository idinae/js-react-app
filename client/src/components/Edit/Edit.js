import { useEffect, useState } from 'react';
import * as recipeService from '../../services/recipeService';
import style from './Edit.module.css';


const Edit = ({
    match,
    history
}) => {
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        recipeService.getOne(match.params.recipeId)
            .then(res => setRecipe(res));
    }, [match.params.recipeId])


    const onEditRecipeSubmitHandler = (e) => {
        e.preventDefault();

        // const {type, name, products, description, imageUrl} = e.target;

        // recipeService.create(type.value, name.value, products.value, description.value, imageUrl.value, username)
        // .then(() => {
        //     history.push('/');
        // }) //add error handling!
    };

    return(
        <div className={style.articlewrapper}>
            <h1>Редактирай рецепта: {recipe[0]?.name}</h1>
            <form onSubmit={onEditRecipeSubmitHandler}>
                <label htmlFor="type">Категория:</label>
                <select id="type" defaultValue={recipe[0]?.type}>
                    <option value="starters">Предястия</option>
                    <option value="mains">Основни ястия</option>
                    <option value="desserts">Десерти</option>
                </select>
                <label htmlFor="name">Име:</label>
                <input type="text" name="name" id="name" value={recipe[0]?.name} />
                <label htmlFor="products">Продукти:</label>
                <textarea type="text" rows="5" cols="50" name="products" id="products" defaultValue={recipe[0]?.products}></textarea>
                <label htmlFor="description">Приготовление:</label>
                <textarea type="text" rows="10" cols="50" name="description" id="description" defaultValue={recipe[0]?.description}></textarea>
                <label htmlFor="imageUrl">Снимка:</label>
                <input type="text" name="imageUrl" id="imageUrl" value={recipe[0]?.imageurl} />
                <button type="submit" className={style.buttonstyle} value="Create">Изпрати</button>
            </form>
        </div>
    )
}

export default Edit;