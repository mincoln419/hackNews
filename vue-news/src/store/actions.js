import { fetchNewsList, fetchJobsList, fetchAsksList, fetchUserInfo, fetchItemInfo, fetchList } from '../api/index.js';

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                context.commit('SET_NEWS', response.data);
                return response;
            })
            .catch(function () {
                console.log(" error callback");
            });
    },
    FETCH_JOBS(context) {
        fetchJobsList()
            .then(({data}) =>{
                context.commit('SET_JOBS', data);
            })
            .catch(function () {
                console.log(" error callback");
            });
    },
    FETCH_ASKS(context) {
        fetchAsksList()
            .then(({data}) =>{
                context.commit('SET_ASKS', data);
            })
            .catch(function () {
                console.log(" error callback");
            });
    },
    FETCH_USER(context, userId) {
        fetchUserInfo(userId)
            .then(({data}) =>{
                context.commit('SET_USER', data);
            })
            .catch(function () {
                console.log(" error callback");
            });
    }, 
    FETCH_ITEM(context, itemId){
        fetchItemInfo(itemId)
            .then(({data}) =>{
                context.commit('SET_ITEM', data);
            })
            .catch(function () {
                console.log(" error callback");
            });
    },
    FETCH_LIST(context, pageName){
        fetchList(pageName).then(({data}) =>{
            context.commit('SET_LIST', data);
        })
        .catch(function () {
            console.log(" error callback");
        });
    }
}