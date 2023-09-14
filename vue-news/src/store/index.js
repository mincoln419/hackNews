import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchJobsList, fetchAsksList } from '../api/index.js';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        newses: [],
        jobs: [],
        asks: []
    },
    mutations: {
        SET_NEWS(state, data){
            state.newses = data;
        },
        SET_JOBS(state, data){
            state.jobs = data;
        },
        SET_ASKS(state, data) {
            state.asks = data;
        },
    },
    actions: {
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
                .then(response => {
                    console.log(response.data);
                    context.commit('SET_JOBS', response.data);
                })
                .catch(function () {
                    console.log(" error callback");
                });
        },
        FETCH_ASKS(context) {
            fetchAsksList()
                .then(response => {
                    console.log(response.data);
                    context.commit('SET_ASKS', response.data);
                })
                .catch(function () {
                    console.log(" error callback");
                });
        },  
    }
});

