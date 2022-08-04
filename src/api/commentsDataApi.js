import axios from "axios";

function commentsData(){
    return axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.data)
}

export default commentsData;