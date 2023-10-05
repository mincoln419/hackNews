import { fetchNewsList, fetchJobsList, fetchAsksList, fetchUserInfo, fetchItemInfo, fetchList } from '../api/index.js';

export default {
    async FETCH_USER(context, userId) {
        try{
            const { data } = await fetchUserInfo(userId);
            context.commit('SET_USER', data);
            return data;    
        }catch(error){
            console.log(error);
        }
    }, 
    async FETCH_ITEM(context, itemId){
        try{
            const { data } = await fetchItemInfo(itemId);
            context.commit('SET_ITEM', data);
            return data;
        }catch(error){
            console.log(error);
        }        
    },
    async FETCH_LIST(context, pageName){
        try{
            const { data } = await fetchList(pageName);
            context.commit('SET_LIST', data);
            return data;
        }catch(error){
            console.log(error);
        }
        
    }
}