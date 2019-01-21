import axios from 'axios';

const instance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

instance.defaults.headers.common['Autthorization'] = 'Auth Token From Instance';

export default instance;