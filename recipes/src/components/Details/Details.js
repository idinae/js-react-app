import style from './Details.module.css';

const Details = ({
    name,
    description
}) => {
    return(
        <div class="container">
        <div class="row">
            <img class="image" src="./../assets/images/{{ cooks[0].imageUrl }}" alt="" />
            <div class="col-sm-7 text-left">
            <h3>{name}</h3>
            <p>{description}</p>
            <a class="button-style">Edit</a>
            <a href="" class="button-style">Delete</a>
            </div>
        </div>
        </div>
    )
}

export default Details;