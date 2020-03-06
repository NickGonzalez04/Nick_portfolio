import axios from 'axios';

export const axisWithAuth =()=>{


    return axios.create({
        baseURL: 'https://nick-portfoliobackend.herokuapp.com',
        headers:{
            'Content-type': 'application/json'
        }
    });
};