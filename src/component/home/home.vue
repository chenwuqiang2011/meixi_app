<template>
	<div class="mx-home">
		<transition-group enter-active-class="slideInLeft" leave-active-class="slideOutLeft">
			<Navi v-show="this.$store.state.home.show" class="animated" key = "1"></Navi>
		</transition-group>
		<div class="mx-header">
			<!-- <router-link to = "/nav"> -->
				<div class="mx-nav-p" @click = "isShow"></div>
			<!-- </router-link> -->
			<h1>美西</h1>
			<div class="mx-header-r">
				<div class="mx-car"></div>
				<router-link to = "/login">
					<div class="mx-information"></div>
				</router-link>
			</div>
		</div>
		<router-view></router-view>
		
	</div>
</template>
<script>
	import './home.scss';
	import Navi from '../nav/nav.vue';
	
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

			}
		},
		created: function(){

		}

	}
</script>