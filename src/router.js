import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard';
import Managerment from './views/Managerment';
import Service from './views/Service';
Vue.use(Router);

export default new Router({
	// mode: 'history',
	// base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'dashboard',
			component: Dashboard
		},
		{
			path: '/managerment',
			name: 'managerment',
			component: Managerment
		},
		{
			path: '/service',
			name: 'service',
			component: Service
		}
	]
});
