import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0'
}

const fetchUserInfo = (userId) => {
    return axios.get(`${config.baseUrl}/user/${userId}.json`);
};

const fetchItemInfo = (itemId) => {
    return axios.get(`${config.baseUrl}/item/${itemId}.json`);
}

const fetchList = (pageName) => {
    return axios.get(`${config.baseUrl}/${pageName}/1.json`);
}

export {
    fetchUserInfo, fetchItemInfo, fetchList
}