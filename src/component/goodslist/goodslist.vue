<template>
	<div class="goodslist">
		<div class="goodslist-title">
			<ul>
				<li class="goodslist-new">新品</li>
				<li class="goodslist-hot">热门</li>
				<li class="goodslist-price">价格
					<span class = "up-and-down priceUp"></span>
					<span class = "up-and-down priceDown"></span>
					<!-- <span class="priceUp"></span>
					<span class="priceDown"></span> -->
				</li>
				<li class="goodslist-filter">筛选</li>
			</ul>
		</div>
		<div class="goodslist-goods" ref = "wrapper">
			<div class="goodslist-goods-show">
				

				<ul>
					<li v-for = "(val, idx) in goods" :data-id = "val.ID" :key = "idx">
						<div class="meixi-img">
							<img :src='"src/assets/imgs/" + val.imgurl'  alt="" @click = "getProduct">
						</div>
						<p class = "meixi-name" v-text = "val.name"></p>
						<p class = "meixi-price" >
							<span class = "nowPrice" v-text = "val.nowPrice"></span>
							<span class = "oldPrice" v-text = "val.oldPrice"></span>
						</p>
					</li>

				</ul>
				<div class="loadMore" @touchend = "loadMore" >点击加载更多</div>
				<div class="noMore">没有更多商品了</div>
			</div>
			
			<div class="pubgoTop" @click = "toTop">
			</div>
		</div>
		<spinner v-show = "show"></spinner>
	</div>
</template>
<script>
	import './goodslist.scss';
	import url from '../../assets/common/common.js';
	import axios from 'axios';
	import qs from 'qs';
	import router from '../../router';
	import spinner from '../spinner/spinner.vue';

	import Bscroll from 'better-scroll';

	export default {
		components: {
			spinner
		},
		data: function(){
			return {
				goods: '',
				pageNo: 1,
				qty: 20,
				show: false
			}
		},
		created: function(){
			//loading效果;
			this.show = true;
			axios.post(url.global.baseurl + 'queryProducts', qs.stringify({pageNo: this.pageNo, qty: this.qty})).then(function(res){
				console.log(res);
				this.show = false;
				this.goods = res.data.data;
			}.bind(this));
		},
		mounted: function(){
		
			var that = this;
			var data =  qs.stringify({pageNo: that.pageNo, qty: that.qty});
			$('.goodslist-title').on('click', 'li', function(){

				//重置pageNo;
				that.pageNo = 1;

				//loading效果;
				that.show = true;

				//事件委托；
				$(this).addClass('active').siblings().removeClass('active');
				$('.loadMore').show();
				$('.noMore').hide();

				if($(this).hasClass('goodslist-price')){
					$('.priceUp').toggle();
					if($('.priceUp').css('display') == 'block'){
						$('.priceDown').css('display', 'none');

						//价格升序；
						axios.post(url.global.baseurl + 'priceUp', data).then(function(res){
							console.log(123, res)
							//loading效果;
							that.show = false;
							that.goods = res.data.data;
						})
					} else {
						$('.priceDown').css('display', 'block');


						//价格降序;
						axios.post(url.global.baseurl + 'priceDown', data).then(function(res){
							console.log(123, res)
							//loading效果;
							that.show = false;
							that.goods = res.data.data;
						})
					}
					
				} else {
					$('.up-and-down').hide();
					if($(this).hasClass('goodslist-new')){
						//按最新排序;
						console.log(5555)
						axios.post(url.global.baseurl + 'newProducts', data).then(function(res){
							//loading效果;
							that.show = false;
							that.goods = res.data.data;
						})
					} else {

						axios.post(url.global.baseurl + 'queryProducts', data).then(function(res){
							console.log(res);
							//loading效果;
							that.show = false;
							that.goods = res.data.data;
						});
					}
				}

			});
			//惯性滑动；
			// this.$nextTick(() => {
			//     this.scroll = new Bscroll(this.$refs.wrapper, {})
			// })
			setTimeout(() => {
				this.scroll = new Bscroll(this.$refs.wrapper, {click: true})
			}, 20)
		},
		methods: {
			toTop: function(){
				// 返回顶部；
				$('.goodslist-goods').animate({scrollTop: 0});
			},
			loadMore: function(){
				console.log('loadMore', this.pageNo);
				//点击加载更多；
				this.pageNo++;

				//loading效果;
				this.show = true; 

				var data =  qs.stringify({pageNo: this.pageNo, qty: this.qty});

				if($('.priceUp').css('display') == 'block'){
					//价格升序；
					axios.post(url.global.baseurl + 'priceUp', data).then(function(res){
						console.log('up', res)
						sort(res, this);
					}.bind(this));

				/*	//价格升序；
					axios.defaults.baseURL = url.global.baseurl;
					axios({method: 'post', url:'priceUp',data: data}).then(function(res){
						console.log('up', res)
						sort(res, this);
					}.bind(this));
*/
				} else if($('.priceDown').css('display') == 'block'){
					//价格降序;
					axios.post(url.global.baseurl + 'priceDown', data).then(function(res){
						console.log('dowm', res);
						sort(res, this)
					}.bind(this));

				} else {
					axios.post(url.global.baseurl + 'queryProducts', data).then(function(res){
						sort(res, this);
						
					}.bind(this));
				};

				function sort(res, that){
					console.log(res);
					that.show = false;
					if(!res.data.status) {
						$('.loadMore').hide();
						$('.noMore').show();
					} else {
						that.goods = that.goods.concat(res.data.data);
					}
				}
			},
			getProduct: function(e){
				var currentId = $(e.target).parents('li').data('id');
				this.$store.state.home.currentId = currentId;
				console.log(currentId, this.$store.state.home.currentId);
				router.push('/product');
				
			}
		}
	}
</script>