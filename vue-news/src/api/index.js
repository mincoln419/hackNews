import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0'
}

const fetchUserInfo = async (userId) => {
    return await axios.get(`${config.baseUrl}/user/${userId}.json`);
};

const fetchItemInfo = async (itemId) => {
    return await axios.get(`${config.baseUrl}/item/${itemId}.json`);
}

const fetchList = async  (pageName) => {
    return await axios.get(`${config.baseUrl}/${pageName}/1.json`);
}

export {
    fetchUserInfo, fetchItemInfo, fetchList
}