import { Component } from 'react';

import * as recipeService from '../../services/recipeService';

import style from './Main.module.css';
import Recipe from '../Recipe';
import MainNav from '../MainNav';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            currentType: ''
        }
    }

    //fetch all data from db
    // componentDidMount() {

    //         fetch('http://localhost:5000/recipes')
    //             .then(res => res.json())
    //             .then(res => this.setState({recipes: res}))
    //             .catch(error => console.log(error));
    // }

    //request to db via service
    componentDidMount() {
        recipeService.getAll()
            .then(res => this.setState({ recipes: res }))
    }
    
    //new request to db when updating
    componentDidUpdate(prevProps) {
        const type = this.props.match.params.type;
            if (prevProps.match.params.type == type) {
                return;
            }
    
            recipeService.getAll(type)
            .then(res => {
                this.setState({ recipes: res, currentType: type })
            })
        }


    render() {
        return (
            <div>
                <div className={style.container}> 
                    <img src="./assets/images/img1.jpg" alt="banner-image" />
                </div>
                <div className={style.container}>
                    <MainNav />
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