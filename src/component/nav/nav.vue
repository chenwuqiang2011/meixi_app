<template>
	<transition enter-active-class="slideInLeft" leave-active-class="slideOutLeft">
		<div class="mx-nav" v-show="this.$store.state.home.show">
			<span class = "mx-del" @click = "isShow">&times;</span>
			<div class="ph_d">
				<div class="nav_search float_l">
		            <div class="nav_search_m float_l">
		            	<input id="sch_kwd" class="searchValue_top" type="text" value="" placeholder="请输入商品关键词便于搜索">
		            </div>
		            <button class="nav_search_btn float_l" @click="search"></button>
		        </div>
			</div>
			<div class="isrollMask"></div>
			<Nav2></Nav2>
		</div>
	</transition>
</template>
<script>
	import './nav.scss';
	import Nav2 from './nav2.vue';
	export default {
		data: function(){
			return {
				show: true
			}
		},
		components:{
			Nav2
		},
		methods: {
			isShow: function(){
				this.$store.state.home.show = false;
			},
			search: function(){
				console.log(123);
			}
		},
		created: function(){
			console.log('created!')
		}
	}
</script>