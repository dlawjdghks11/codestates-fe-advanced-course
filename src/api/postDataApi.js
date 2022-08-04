import axios from "axios";

function postData(){
    return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.data)
}

export default postData;