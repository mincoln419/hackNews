import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchJobsList, fetchAsksList } from '../api/index.js';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: {},
        item: {},
        list: [],
    },
    getters:{
        fetchedAsk(state){
            return state.asks;
        },
        fetchedJobs(state){
            return state.jobs;
        },
        fetchedNews(state){
            return state.newses;
        },
        fetchItem(state){
            return state.item;
        }
    },
    mutations,
    actions
});

