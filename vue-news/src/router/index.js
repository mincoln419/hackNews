import Vue from 'vue';
import VueRouter from 'vue-router';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import createListView from '../components/CreatedListView';

Vue.use(VueRouter);


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
            beforeEnter: (to, from, next) => {
                console.log('to', to);
                console.log('from', from);
                console.log('next', next);
                
                next();
            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: createListView('AskView'),
            beforeEnter: (to, from, next) => {
                console.log('to', to);
                console.log('from', from);
                console.log('next', next);
                
                next();
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: createListView('JobsView'),
            beforeEnter: (to, from, next) => {
                console.log('to', to);
                console.log('from', from);
                console.log('next', next);
                
                next();
            }
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