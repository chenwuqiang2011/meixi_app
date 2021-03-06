import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../component/home/home.vue';
import tag from '../component/tag/tag.vue';
import login from '../component/login/login.vue';
import register from '../component/register/register.vue';
import personal from '../component/personal/personal.vue';
import account from '../component/account/account.vue';
import goodslist from '../component/goodslist/goodslist.vue';
import product from '../component/product/product.vue';
import address from '../component/address/address.vue';
import edit from '../component/edit/edit.vue';
import add from '../component/add/add.vue';
import nav2 from '../component/nav/nav2.vue';
import cart from '../component/cart/cart.vue';
import myInfo from '../component/myInfo/myInfo.vue';
import collected from '../component/collected/collected.vue';
import about from '../component/about/about.vue';
import test from '../component/test/test.vue';
import loop from '../component/test/loop.vue';
import vertical from '../component/test/vertical.vue';


Vue.use(VueRouter);

const router = new VueRouter({
	//mode: 'history',去除 # 符号；
	mode: 'history',
	routes:[
		
		{path:'/',component:home,redirect: '/',
			children: [
				{path: '/', component: tag},
				{path: '/login', component: login},
				{path: '/register', component: register},
				{path: '/personal', component: personal},
				{path: '/account', component: account},
				{path: '/nav2', component: nav2},
				{path: '/goodslist', component: goodslist},
				{path: '/product', component: product},
				{path: '/address', component: address},
				{path: '/edit', component: edit},
				{path: '/add', component: add},
				{path: '/cart', component: cart},
				{path: '/myInfo', component: myInfo},
				{path: '/collected', component: collected},
				{path: '/about', component: about},
				{path: '/test', component: test},
				{path: '/loop', component: loop},
				{path: '/vertical', component: vertical}
			]
		}
		//{path: '/home', component: foodlist},设置默认级路由并显示；

		// {path:'/home',component:home, redirect: '/home', 
		// 	children: [
		// 		{path: '/home', component: home}
		// 	]
		// }
	]
})

export default router ;