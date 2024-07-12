import { Post } from "./components/product.js";
import { storie } from "./components/stories.js";
import { user } from "./components/users.js";
import { reload } from "./lib/utils.js";

    const storiesContainer = document.querySelector('.stories');
    const postContainer = document.querySelector('#post');

    fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=100')
        .then(res => res.json())
        .then(posts => {
            reload(posts, postContainer, Post);
        });

    fetch('https://jsonplaceholder.typicode.com/photos?_start=100&_limit=200')
        .then(res => res.json())
        .then(stories => {
            reload(stories, storiesContainer, storie); 
        });

    const userContainer = document.querySelector('.suggestion-item');

    fetch('https://jsonplaceholder.typicode.com/users?_start=0&_limit=10')
        .then(res => res.json())
        .then(users => {
            reload(users, userContainer, user);

            const nameProfElement = document.querySelector('.name_prof');
            if (nameProfElement) {
                nameProfElement.innerHTML = users[0].name;
            }
        });
