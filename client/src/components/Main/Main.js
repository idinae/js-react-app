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
            if (prevProps.match.params.type === type) {
                return;
            }
    
            recipeService.getAll(type)
            .then(res => {
                this.setState({ recipes: res, currentType: type })
            })
    }

    render() {
        return (
            <div className={style.container}>
                <div> 
                    <img className={style.imglogo} src="/assets/images/img1.jpg" alt="aubergine in a plate" />
                </div>
                <div>
                    <MainNav typecheck={this.state.currentType} />
                    <div className={style.reciperow}>
                        {this.state.recipes.map(x => 
                            <Recipe 
                                key={x._id} 
                                id={x._id}
                                type={x.type}
                                name={x.name} 
                                description={x.description} 
                                imageUrl={x.imageurl} 
                                likes={x.likes} 
                            />)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;