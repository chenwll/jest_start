import axios from 'axios'

export const runCallback = (callback: any) => {
    callback('abc');
}


export const getData = () => {
    return axios.get('/api').then(res => res.data);
}