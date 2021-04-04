import style from './Create.module.css';
import { Redirect } from 'react-router-dom';

const Create = () => {
    // onCreateButtonHandler {
        
    // }

    return(
        <div className={style.articlewrapper}>
            <h1>Създай нова рецепта</h1>
            <form >
                <label htmlFor="type">Категория:</label>
                <select id="type">
                    <option value="type">Предястия</option>
                    <option value="type">Основни ястия</option>
                    <option value="type">Десерти</option>
                </select>
                <label htmlFor="name">Име:</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="products">Продукти:</label>
                <textarea type="text" rows="5" cols="50" name="products" id="products"></textarea>
                <label htmlFor="description">Приготовление:</label>
                <textarea type="text" rows="10" cols="50" name="description" id="description"></textarea>
                <label htmlFor="imageImageUrl">Снимка:</label>
                <input type="text" name="imageUrl" id="imageUrl" />
                <button type="submit" className={style.buttonstyle} value="Create">Създай</button>
            </form>
        </div>
    )
}

export default Create;