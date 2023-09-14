import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0'
}

const fetchNewsList = () => {
    return axios.get(`${config.baseUrl}/news/1.json`);
};

const fetchJobsList = () => {
    return axios.get(`${config.baseUrl}/jobs/1.json`);
};


const fetchAsksList = () => {
    return axios.get(`${config.baseUrl}/ask/1.json`);
};

const fetchUserInfo = (userId) => {
    return axios.get(`${config.baseUrl}/user/${userId}.json`);
}
export {
    fetchNewsList, fetchJobsList, fetchAsksList, fetchUserInfo
}