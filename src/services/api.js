import axios from 'axios';

const api = axios.create({
      baseURL: 'https://rocketseatbe-the-hero.herokuapp.com/'      
})

export default api;