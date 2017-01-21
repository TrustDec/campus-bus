import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
	import index from './components/index';
	import test from './components/Test';
	import details from './components/details/details';
	import working from './components/working/working';
	import weekend from './components/weekend/weekend';
	import vacation from './components/vacation/vacation';
import './common/stylus/index.styl';

	Vue.use(VueRouter);
	Vue.use(VueResource);
let app = Vue.extend(App);
let router = new VueRouter();
router.map({
	'*': {
		component: test,
	},
	'/index/:id/:name': {
		name: 'index',
		component: index
	}
});
router.start(app, '#app');

