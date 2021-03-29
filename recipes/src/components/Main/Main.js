import { Component } from 'react';

import style from './Main.module.css';
import Recipe from '../Recipe';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: []
        }
    }

    //fetch all data from db
    componentDidMount() {

            fetch('http://localhost:5000/recipes')
                .then(res => res.json())
                .then(res => this.setState({recipes: res}))
                .catch(error => console.log(error));
    }


    render() {
        return (
            <div>
            <div className={style.banner} className={style.container}> 
                <img src="./assets/images/img1.jpg" alt="banner-image" />
            </div>
            <div className={style.container}>
            <header>
                {/* <h2>Всички рецепти</h2> */}
                <div className={style.dropdown} >
                    <button className={style.dropbtn}>Всички</button>
                        <div className={style.dropdowncont}>
                            <a href="#">Салати</a>
                            <a href="#">Супи</a>
                            <a href="#">Основни</a>
                        </div>
                </div>
                
            </header>

            <div className={style.reciperow}>

                {this.state.recipes.map(x => 
                <Recipe 
                    key={x.id} 
                    id={x.id}
                    type={x.type}
                    name={x.name} 
                    description={x.description} 
                    imageUrl={x.imageUrl} 
                    likes={x.likes} 
                />)}



            </div>
            </div>
            </div>
        );
    }
}

export default Main;