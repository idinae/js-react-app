import style from './Create.module.css';
import * as recipeService from '../../services/recipeService';

const Create = ({
    history,
    username
}) => {
    const onCreateRecipeSubmitHandler = (e) => {
        e.preventDefault();

        const {type, name, products, description, imageUrl} = e.target;

        recipeService.create(type.value, name.value, products.value, description.value, imageUrl.value, username)
        .then(() => {
            history.push('/');
        }) //add error handling!
    };

    return(
        <div className={style.articlewrapper}>
            <h1>Създай нова рецепта</h1>
            <form onSubmit={onCreateRecipeSubmitHandler}>
                <label htmlFor="type">Категория:</label>
                <select id="type">
                    <option value="starters">Предястия</option>
                    <option value="mains">Основни ястия</option>
                    <option value="desserts">Десерти</option>
                </select>
                <label htmlFor="name">Име:</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="products">Продукти:</label>
                <textarea type="text" rows="5" cols="50" name="products" id="products"></textarea>
                <label htmlFor="description">Приготовление:</label>
                <textarea type="text" rows="10" cols="50" name="description" id="description"></textarea>
                <label htmlFor="imageUrl">Снимка:</label>
                <input type="text" name="imageUrl" id="imageUrl" />
                <button type="submit" className={style.buttonstyle} value="Create">Създай</button>
            </form>
        </div>
    )
}

export default Create;