import style from './Create.module.css';

const Create = () => {
    return(
        <div className={style.articlewrapper}>
            <h1>Create a New Receipe</h1>
            <form>
                <label htmlFor="type">Type</label>
                <input type="text" name="type" id="type" />
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="description">Description</label>
                <textarea type="text" rows="5" name="description" id="description"></textarea>
                <label htmlFor="imageImageUrl">ImageUrl</label>
                <input type="text" name="imageUrl" id="imageUrl" />
                <button type="submit" className={style.buttonstyle} value="Create">Create</button>
            </form>
        </div>
    )
}

export default Create;