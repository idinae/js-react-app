import style from './Create.module.css';

const Create = () => {
    return(
        <div id="registerForm">
            <h1>Create a New Receipe</h1>
            <form>
            <label>Type</label>
            <input type="text" name="type" id="type" />
            <label>Name</label>
            <input type="text" name="name" id="name" />
            <label>Description</label>
            <textarea type="text" rows="5" name="description" id="description"></textarea>
            <label>ImageUrl</label>
            <input type="text" name="ImageUrl" id="ImageUrl" />
            </form>
            <a className={style.buttonstyle}>Create</a>
        </div>
    )
}

export default Create;