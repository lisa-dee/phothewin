
import * as VueRouter from 'vue-router';

import PhoPage from './views/PhoPage.vue'
import HomePage from './views/HomePage.vue';
import AddReview from './views/AddReview.vue';
import SeeReview from './views/SeeReview.vue';
import AboutUs from './views/AboutUs.vue';


export const router = VueRouter.createRouter({
    mode: 'history',
    history: VueRouter.createWebHistory(),
    base: __dirname,
    routes: [
      { path: '/', 
      component: PhoPage, 
      children:[
        { path: '/Home', component: HomePage, name: 'Home' },
        { path: '/AddReview', component: AddReview, name: 'Add Review' },
        { path: '/SeeReview', component: SeeReview, name: 'See Review' },
        { path: '/AboutUs', component: AboutUs, name: 'About' }
      ]},
    ]
  });