import axios from 'axios'

const url = 'http://localhost:5000'


export const fetchePost = ()=>axios.get(url);
export const createPost = (url,postData) => axios.post(url,postData`);
