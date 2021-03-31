const url = 'http://localhost:5000/recipes'; 

export const getAll = (type = '') => {

    //filter and fetch data from db - functionality of json-server!
    let recipesUrl = url + ((type && type != '') ? `?type=${type}` : '');

    return fetch(recipesUrl)
        .then(res => res.json())
        // .then(res => this.setState({pets: res})) --> goes in Category.js
        .catch(error => console.log(error));
}

export const getOne = (recipeId) => {
    return fetch(`${url}/${recipeId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const create = (petName, description, imageURL, category) => {
    let pet = {
        name: petName,
        description,
        imageURL,
        category,
        likes: 0
    };

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pet)
    });
};

export const update = (petId, pet) => {
    return fetch(`${url}/${petId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pet)
    });
}

export const pet = (petId, likes) => {
    return fetch(`${url}/${petId}`, {
        method: 'PATCH', //пращаме само отделно пропърти на обекта, което да промени, не целия обект
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({likes})
    })
        .then(res => res.json());
}