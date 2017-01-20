import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
//import index from './components/index';
import details from './components/details/details';
import working from './components/working/working';
import weekend from './components/weekend/weekend';
import vacation from './components/vacation/vacation';

import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

let app = Vue.extend(App);
let router = new VueRouter({
	linkActiveClass: 'active'
});
router.map({
	'/details': {
		component: details
	},
	'/working': {
		component: working
	},
	'/weekend': {
		component: weekend
	},
	'/vacation': {
		component: vacation
	}
});

router.start(app, '#app');

router.go('/details');
