<template>
	<div class="nav2">
		<ul class = "categroies">
			<li class = "categroies-name" v-for = "(val, idx) in categroies" :key = "idx" @click = "showChild">
				<i class="el-icon-arrow-right"></i>
				<p>{{val.name}}</p>
				<ul class = "subNav">
					<li class = "subNav-name" v-for = "(key, index) in val.subnav" :key = "index">
						<span>{{key}}</span>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>
<script>
	import './nav2.scss';
	export default {
		data: function(){
			return {
				categroies: [
					{name: '首页', subnav: ''},
					{name: '新品', subnav: ['所有商品', '包袋', '配饰', '鞋履', '服装']},
					{name: '女士', subnav: ['所有女士商品', '包袋', '配饰', '鞋履', '服装']},
					{name: '男士', subnav: ['所有男士商品', '包袋', '配饰', '鞋履', '服装']},
					{name: '腕表', subnav: ['所有腕表商品', '古英表', '机械表']},
					{name: '品牌', subnav: ['']},
					{name: '童装', subnav: ['所有童装商品', '男童', '女童']},
					{name: '特惠', subnav: ['所有特惠商品', '包袋', '配饰', '鞋履', '服装']},
					{name: 'Mzine', subnav: ''}
				]
			}
		},
		methods: {
			showChild: function(){
				// console.log(666, $('.categroies'));

			}
		},
		mounted: function(){
		/*	$('.categroies').click(function(event){
				console.log(event.target.tagName, $(event.target).next('ul').css('display'))
				if(event.target.tagName.toLowerCase() == 'p'){
					console.log('1234')
					$(event.target).next('ul').slideToggle();
					$(event.target).prev('.el-icon-arrow-right').css({transform: 'rotate(90deg)'});
					$(event.target).parent().siblings().children('ul').slideUp()
				}
			})*/

			$('.categroies').click(function(event){
				// console.log(event.target.tagName, $(event.target).next('ul').css('display'))
				if(event.target.tagName.toLowerCase() == 'p' && $(event.target).next('ul').css('display') == 'none'){
					// console.log('1234')
					$(event.target).next('ul').slideDown();
					$(event.target).prev('.el-icon-arrow-right').css({transform: 'rotate(90deg)'});
					$(event.target).parent().siblings().children('.el-icon-arrow-right').css({transform: 'rotate(0deg)'});
					$(event.target).parent().siblings().children('ul').slideUp()
				}else{
					$(event.target).next('ul').slideUp();
					$(event.target).prev('.el-icon-arrow-right').css({transform: 'rotate(0deg)'});
					$(event.target).parent().siblings().children('.el-icon-arrow-right').css({transform: 'rotate(0deg)'});
					$(event.target).parent().siblings().children('ul').slideUp()
				}
			}).on('click', 'span', function(e){
				console.log($(e.target).text())
			})
		}
	}
</script>