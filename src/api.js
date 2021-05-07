import axios from "axios";

const API_KEY = process.env.REACT_APP_RAPID_API_KEY
export default {

getData: () =>
axios({
  method: 'GET',
  url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
  params: {limit: '24'},
  headers: {
    'x-rapidapi-key':  process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com'
  }

}),

getDataId: (id) => 
  axios({
    method: 'GET',
  url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers/' + id,
  headers: {
    'x-rapidapi-key':  process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com'
  }
  }),

  getBrand: () =>
    axios({
      method: 'GET',
      url: 'https://v1-sneakers.p.rapidapi.com/v1/brands',
      headers: {
        'x-rapidapi-key':  process.env.REACT_APP_RAPID_API_KEY,
        'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com'
      }
    })
  


}

// f2326766a3msh573dd850eaeab1fp181777jsnf7f3daf5cc0a'





