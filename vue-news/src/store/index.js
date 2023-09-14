import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchJobsList, fetchAsksList } from '../api/index.js';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        newses: [],
        jobs: [],
        asks: []
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
        }
    },
    mutations,
    actions
});

