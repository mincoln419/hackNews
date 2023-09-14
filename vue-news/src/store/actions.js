import { fetchNewsList, fetchJobsList, fetchAsksList } from '../api/index.js';

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                console.log(response.data);
                context.commit('SET_NEWS', response.data);
            })
            .catch(function () {
                console.log(" error callback");
            });
    },
    FETCH_JOBS(context) {
        fetchJobsList()
            .then(({data}) =>{
                console.log(data);
                context.commit('SET_JOBS', data);
            })
            .catch(function () {
                console.log(" error callback");
            });
    },
    FETCH_ASKS(context) {
        fetchAsksList()
            .then(({data}) =>{
                console.log(data);
                context.commit('SET_ASKS', data);
            })
            .catch(function () {
                console.log(" error callback");
            });
    },  
}