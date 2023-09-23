import Vue from 'vue';
import VueRouter from 'vue-router';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import createListView from '../components/CreatedListView';
import bus from '../utils/bus';
import {store} from '../store/index.js';

Vue.use(VueRouter);

const apiCall = async (to, from, next) => {
    bus.$emit('start:spinner');
    const data  = await store.dispatch('FETCH_LIST', to.name);
    if(data !=null){
       next();
    }
    
}

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            path: '/news',
            name: 'news',
            component: createListView('NewsView'),
            beforeEnter: apiCall,
        },
        {
            path: '/ask',
            name: 'ask',
            component: createListView('AskView'),
            beforeEnter: apiCall,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: createListView('JobsView'),
            beforeEnter: apiCall,
        },{
            path: '/item',
            component: ItemView,
            query: {
                id : 'id'
            }
        },
        {
            path: '/user/:id',
            component:  UserView
        }
    ]
});