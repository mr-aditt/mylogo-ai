import axios from 'axios';

export const getUsers = ()=>{
    return axios.get('http://localhost:5000/users/').then(
        data=>data.data
    )
}

export const register = async (useremail, password)=>{
    return axios.post('http://localhost:5000/users/signup', { useremail, password }).then(
        data => data.data
    );
}

export const login = async (useremail, password)=>{
    return axios.post('http://localhost:5000/users/signin', { useremail, password }).then(
        data => data.data
    );
}