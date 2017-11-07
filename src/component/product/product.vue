<template>
	<div class="meixi-details">
		<div class="details">
			<div class="details-img">
				<img :src='"src/assets/imgs/" + product.imgurl'  alt="">
			</div>
			<div class="details-name">
	            <div class="prodetailName">
	            	<span class="cp_global" v-show = "product.isFamous == 'Y' ? true : false">全球购</span>
	            	<a href="#" v-text = "product.name"></a><br>
	            	<span v-text = "product.category"></span>
	                
	            </div>
	            <div class="prodetailPrice">
	                <div class="float_l" v-text = "product.nowPrice">
	                </div>
	                <div class="float_r">
	                    <em></em><span v-text = "product.sales"></span>
	                </div>
	            </div>
	        </div>
	        <div class="desc">
	        	<table>
	        		<tr>
	        			<th>颜色:</th>
	        		</tr>
	        		<tr>
	        			<td>
	        				<span class="color">蓝色</span>
	        			</td>
	        		</tr>
	        		<tr>
	        			<th>尺码:</th>
	        		</tr>
	        		<tr>
	        			<td>
	        				<ul class = "size">
	        					<li>S</li>
	        					<li>M</li>
	        					<li>L</li>
	        					<li>XL</li>
	        					<li>XLL</li>
	        				</ul>
	        			</td>
	        		</tr>
	        	</table>
	        </div>
	        <div class="product-msg">
	        	<p>商品信息</p>
	        	<table>
		        	<tr>
		        		<th>美西编号：</th>
		        		<td>	90516</td>
		        	</tr>
		        	<tr>
		        		<th>颜　　色：</th>
		        		<td>	蓝色</td>
		        	</tr>
		        	<tr>
		        		<th>商品货号：</th>
		        		<td>	16P0980 200</td>
		        	</tr>
		        	<tr>
		        		<th>材　　质：</th>
		        		<td>	全棉</td>
		        	</tr>
		        	<tr>
		        		<th>产　　地：</th>
		        		<td>	意大利</td>
		        	</tr>
		        	<tr>
		        		<th>适用人群：</th>
		        		<td>	男士</td>
		        	</tr>
		        	<tr>
		        		<th>商品描述：</th>
		        		<td>	蓝色全棉材质，品牌Logo绣饰，纽扣闭合，长袖POLO衫款式</td>
		        	</tr>
		        	<tr>
		        		<th>到货时间：</th>
		        		<td>	该商品到货时间预计5-10个工作日</td>
		        	</tr>
		        	<tr>
		        		<th>退货说明：</th>
		        		<td>	若该商品无质量问题不支持退换货。</td>
		        	</tr>
	        	</table>
	        	<div class="picture">
	        		<img :src='"src/assets/imgs/" + product.imgurl'  alt="">
	        	</div>
	        </div>
		</div>
        <div class="cartFooter">
        	<div class="cartFooter_l">
        		<ul>
        			<li>
						<em class="contact"></em>
        			</li>
        			<li>
						<em class="collected"></em>
        			</li>
        			<li>
						<em class="share"></em>
        			</li>
        		</ul>
        	</div>
        	<div class="cartFooter_r">
        		<span class="addCart cart" @click = "addCart">
        			<i id="end"></i>
        			加入购物车
        		</span>
        		<span class="buyNow">立即购买</span>
        	</div>
        	<div id="msg">已成功加入购物车！</div>
        </div>
	</div>
</template>
<script>
	import './product.scss';
	import url from '../../assets/common/common.js';
	import axios from 'axios';
	import qs from 'qs';
	import '../../assets/common/jquery.fly.min.js';
	export default {
		data: function(){
			return {
				product: [],
				currentProduct: []
			}
		},
		created: function(){
			var id = this.$store.state.home.currentId;
			console.log(123, id, this.product)
			axios.post(url.global.baseurl + 'getProduct', qs.stringify({id})).then(function(res){
				console.log(res.data.data);
				if(res.data.status){
					this.product = res.data.data[0];
					this.$store.state.home.product = [res.data.data[0]];
					this.currentProduct.push(res.data.data[0])
					console.log(this.product, this.$store.state.home.product)
					// this.product.qty = 1;
				}
			}.bind(this));

		},
		mounted: function(){
			$("<li/>").text('123').appendTo($('.size'));
			//码数选择；
			$('.size').on('click', 'li', function(e){

				$(this).addClass('size-active').siblings().removeClass('size-active');
			});

			
			//购物车飞人动画；
			var offset = $("#end").offset();
			var that = this;
			$(".addCart").click(function(event){
				// //购物车商品信息;
				// var product;
				// if(localStorage.product){
				// 	product = JSON.parse(localStorage.product);
				// 	that.$store.state.home.product = JSON.parse(localStorage.product);
				// 	console.log('product', product, localStorage.product, JSON.parse(localStorage.product)[0])
					
				// } else {
				// 	product = [];
				// };
				

				// if(product.length <= 0){
				// 	that.$store.state.home.product.push(that.product);
				// 	product.push(that.product);
				// 	//将数据写到localStorage；
				// 	localStorage.setItem('product', JSON.stringify(that.$store.state.home.product));
				// }else{

				// 	that.$store.state.home.product.map((item, idx)=>{
				// 		console.log(item.ID,product.indexOf(that.currentProduct),  that.$store.state.home.currentId, product,that.currentProduct[0])
						
				// 		if(item.ID == that.$store.state.home.currentId){
				// 			item.qty++;                                                           
				// 		}

				// 	});

				// 	if(that.$store.state.home.product.indexOf(that.currentProduct[0]) < 0){
				// 		console.log(that.$store.state.home.product, that.product)
				// 		alert('没有该商品')
				// 	}
				// 	//将数据写到localStorage；
				// 	localStorage.setItem('product', JSON.stringify(that.$store.state.home.product));
				// }

				

				var addcar = $(this);
				
				var flyer = $('<img class="u-flyer" src="src/assets/imgs/'+that.product.imgurl+'">');
				flyer.fly({
					start: {
						left: 0,
						top: 0
					},
					end: {
						left: offset.left+10,
						top: offset.top+10,
						width: 0,
						height: 0
					},
					onEnd: function(){
						$("#msg").show().animate({width: '50%'}, 200).fadeOut(1000);
					}
				});
			});
		},
		methods: {
			addCart: function(e){
				console.log(this.$store.state.home.currentId, e.target);

			}
		}

	}
</script>