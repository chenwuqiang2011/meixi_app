<template>
	<div class="mx-lamp block">
		<el-carousel :interval = "5000" height = "3.75rem">
			<el-carousel-item v-for="item in 4" :key="item">
				<img :src="'src/assets/imgs/' + item + '.jpg'" alt="">
			</el-carousel-item>
		</el-carousel>
		<ul class="indexNav">
			<li v-for = "(val, key) in indexNav">
				<p>{{val}}</p>
				<span>{{key}}</span>
			</li>
		</ul>
		<div class="special-offer">
			<div class = "mx-title1">
				<p>特别推荐</p>
				<span>Special Offer</span>
			</div>
			<div class="mx-pic1">
				<img src="../../assets/imgs/2.jpg" alt="">
			</div>
		</div>
		<div class="special-offer goods-select">
			<div class = "mx-title1">
				<p>单品推荐</p>
				<span>Goods Offer</span>
			</div>
			<div class="mx-pic1">
				<img src="../../assets/imgs/3.jpg" alt="">
			</div>
		</div>
	</div>
</template>
<script>
	import './man.scss';
	export default {
		data: function(){
			return {
				indexNav: {News: '新品', Clothes: '服装', Shoes: '鞋履', Bags: '包袋', Accessories: '配饰'}
			}
		}
	}
</script>