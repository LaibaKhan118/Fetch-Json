import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response => {
    //console.log(response.data);
    const todo = response.data;

    const id = todo.ID;
    const title = todo.Title;
    const finished = todo.Finished;

    console.log(`
        The todo with id: ${id}
        Has a title of: ${title}
        Is it finished? ${finished} 
    `);
});