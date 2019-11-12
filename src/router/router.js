import Vue from 'vue';
import Router from 'vue-router';
import store from '../vuex/store.js'


Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: []
});

// router.beforeEach((to, from, next) => {
//   if (to.fullPath !== '/login') {
//     if (!store.state.isRegistered && !store.state.isAuth) {
//       next('/login');
//     }
//   }
//   next();
// });

export default router;