/* eslint-disable import */

import Vue from 'vue';
import Router from 'vue-router';

const routerOptions = [
  { path: '/', component: 'Landing' },
  { path: '/home', component: 'Home' },
  { path: '/signup', component: 'SignUp' },
  { path: '/signin', component: 'SignIn' },
  { path: '/airbnbtest', component: 'AirbnbTest' },
  { path: '/results', component: 'Results' },
];

// This uses lazy loading
const routes = routerOptions.map(route => ({
  ...route,
  component: () => import(`@/components/${route.component}.vue`),
}));

Vue.use(Router);

// This allows use of HTML5 history
export default new Router({
  mode: 'history',
  routes,
});
