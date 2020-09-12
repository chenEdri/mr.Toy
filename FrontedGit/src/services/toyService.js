import axios from 'axios'
import httpService from './httpService';
// const BASE_URL = 'http://localhost:3030/api/toy'
const BASE_URL = (process.env.NODE_ENV !== 'development') ? '/api/toy' : 'http://localhost:3030/api/toy';


const resolveData = res => res.data

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmpty,
    getRandomColor
    // getToysForDisplay,
}

function query(filterBy = {}) {
    // return httpService.get('toy',filterBy)
    return axios.get(`${BASE_URL}`,{params : filterBy})
        .then(resolveData)
}

function getById(toyId) {
    return httpService.get(`toy/${toyId}`, toyId)
    // return axios.get(`${BASE_URL}/${toyId}`)
    //     .then(resolveData)
}

function remove(toyId) {
    return httpService.delete(`toy/${toyId}`)
    // return axios.delete(`${BASE_URL}/${toyId}`)
}

function save(toy) {
console.log('toy', toy);
    if (toy._id) {
        return httpService.put(`toy/${toy._id}`, toy)
        // return axios.put(`${BASE_URL}/${toy._id}`, toy).then(resolveData)
    } else {
        return httpService.post('toy', toy)
        // return axios.post(BASE_URL, toy).then(resolveData)
    }
}


function getEmpty(){
    return  {
        name: '',
        price: 0,
        category: '',
        inStock: false
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }