<template>
	<div class="mx-home">
		<transition-group enter-active-class="slideInLeft" leave-active-class="slideOutLeft">
			<Navi v-show="this.$store.state.home.show" class="animated" key = "1"></Navi>
		</transition-group>
		<div class="mx-header">
			<!-- <router-link to = "/nav"> -->
				<div class="mx-nav-p" @click = "isShow"></div>
			<!-- </router-link> -->
			<router-link to = "/">
				<h1>美西</h1>
			</router-link>
			<div class="mx-header-r">
				<router-link to = "/cart">
					<div class="mx-car"></div>
				</router-link>
				<router-link to = "/login">
					<div class="mx-information"></div>
				</router-link>
			</div>
		</div>
		<router-view class="section"></router-view>
		<div class="back" @click = "back"></div>
		
	</div>
</template>
<script>
	import './home.scss';
	import Navi from '../nav/nav.vue';
	import Bscroll from 'better-scroll';
	export default {
		data: function(){
			return {
				show: false
			}
		},
		components: {
			Navi
		},
		methods: {
			isShow: function(){
				console.log(123);
				this.$store.state.home.show = true;

			},
			back: function(){
				// this.$router.go(-1);
				window.history.go(-1);
			}
		},
		created: function(){

		},
		mounted: function(){
			
		}

	}
</script>