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
import add from '../component/add/add.vue';
import nav2 from '../component/nav/nav2.vue';


Vue.use(VueRouter);

const router = new VueRouter({
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
				{path: '/add', component: add}
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