import axios from 'axios';

export const axisWithAuth =()=>{


    return axios.create({
        baseURL: '',
        headers:{
            'Content-type': 'application/json'
        }
    });
};