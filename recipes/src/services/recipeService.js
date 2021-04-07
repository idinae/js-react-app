const url = 'https://recipes-666.herokuapp.com/recipes'; 

export const getAll = (type = '') => {

    //filter and fetch data from db - functionality of json-server!
    let recipesUrl = url + ((type && type !== '') ? `?type=${type}` : '');

    return fetch(recipesUrl)
        .then(res => res.json())
        // .then(res => this.setState({recipes: res})) --> goes in Main.js
        .catch(error => console.log(error));
}

export const getOne = (recipeId) => {
    return fetch(`${url}/${recipeId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const create = (recipeName, type, products, description, imageUrl) => {
    let recipe = {
        name: recipeName,
        type,
        products,
        description,
        imageUrl,
        likes: 0
    };

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe)
    });
};

export const update = (recipeId, recipe) => {
    return fetch(`${url}/${recipeId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe)
    });
}

export const recipe = (recipeId, likes) => {
    return fetch(`${url}/${recipeId}`, {
        method: 'PATCH', //пращаме само отделно пропърти на обекта, което да промени, не целия обект
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({likes})
    })
        .then(res => res.json());
}