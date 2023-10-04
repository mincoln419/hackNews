import { fetchNewsList, fetchJobsList, fetchAsksList, fetchUserInfo, fetchItemInfo, fetchList } from '../api/index.js';

export default {
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
        return fetchList(pageName).then(({data}) =>{
            context.commit('SET_LIST', data);
        })
        .catch(function () {
            console.log(" error callback");
        });
    }
}