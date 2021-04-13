import { useEffect, useState } from 'react';
import * as recipeService from '../../services/recipeService';
import style from './Edit.module.css';


const Edit = ({
    match,
    history,
    username
}) => {
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        recipeService.getOne(match.params.recipeId)
            .then(res => setRecipe(res));
    }, [match.params.recipeId])
  
    const onEditRecipeSubmitHandler = (e) => {
        e.preventDefault();
        
        let recipeId = match.params.recipeId;
        let updatedRecipe = {...recipe[0], 
            type: e.target.type.value,
            name: e.target.name.value,
            products: e.target.products.value,
            description: e.target.description.value,
            imageurl: e.target.imageUrl.value
        }
        console.log(updatedRecipe)

        recipeService.update(recipeId, updatedRecipe)
            .then(() => {
                history.push(`/recipes/details/${recipeId}`);
                return;
            });
    };

    return(
        <div className={style.articlewrapper}>
            <h1>Редактирай рецепта: {recipe[0]?.name}</h1>
            <form onSubmit={onEditRecipeSubmitHandler}>
                <label htmlFor="type">Категория:</label>
                <select className={style.selectBox} id="type" value={recipe[0]?.type}>
                    <option value={recipe[0]?.type}>{recipe[0]?.type === 'starters' ? 'Предястия' : 
                    recipe[0]?.type === 'mains' ? 'Основни ястия' : 'Десерти'
                }</option>

                </select>
                <label htmlFor="name">Име:</label>
                <input type="text" name="name" id="name" value={recipe[0]?.name} />
                <label htmlFor="products">Продукти:</label>
                <textarea type="text" rows="5" cols="50" name="products" id="products" defaultValue={recipe[0]?.products}></textarea>
                <label htmlFor="description">Приготовление:</label>
                <textarea type="text" rows="10" cols="50" name="description" id="description" defaultValue={recipe[0]?.description}></textarea>
                <label htmlFor="imageUrl">Снимка:</label>
                <input type="text" name="imageUrl" id="imageUrl" defaultValue={recipe[0]?.imageurl} />
                <button type="submit" className={style.buttonstyle} value="Create">Изпрати</button>
            </form>
        </div>
    )
}

export default Edit;