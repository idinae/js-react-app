const url = 'https://recipes-666.herokuapp.com/recipes'; 
// const url = 'http://localhost/5001'; 

export const getAll = (type = '') => {

    let recipesUrl = url + ((type && type !== '') ? `/${type}` : '');

    return fetch(recipesUrl)
        .then(res => res.json())
        // .then(res => this.setState({recipes: res})) --> goes in Main.js
        .catch(error => console.log(error));
}

export const getOne = (recipeId) => {
    return fetch(`${url}/details/${recipeId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const create = (type, recipeName, products, description, imageUrl, username) => {
    let recipe = {
        type,
        name: recipeName,
        products,
        description,
        imageUrl,
        author: username
    };

    return fetch(`${url}/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe)
    })
        .then(res => res.json())
        .catch(error => console.log(error));    
};

export const update = (recipeId, recipe) => {
    return fetch(`${url}/${recipeId}/edit`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe)
    })
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const like = (recipeId, likes) => {
    return fetch(`${url}/${recipeId}/like`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({likes})
    })
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const deleteRecipe = (recipeId) => {
    return fetch(`${url}/${recipeId}/delete`, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .catch(error => console.log(error));
}