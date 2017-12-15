<template>
	<div class="meixi-details">
		<div class="details">
			<div class="details-img">
				<img :src='"src/assets/imgs/" + product.imgurl'  alt="">
				<!-- <img-zoom :src='"src/assets/imgs/" + product.imgurl' width="450" height="250" :bigsrc= '"src/assets/imgs/" + product.imgurl' :configs="configs"></img-zoom> -->
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
						<em @click = "collected"></em>
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
	//放大镜;
	// import imgZoom from 'vue2.0-zoom';

	export default {
		data: function(){
			return {
				product: {},
				currentProduct: [],
				collectGoods: []
			}
		},
		components: {
			// imgZoom
		},
		created: function(){
			var id = this.$store.state.home.currentId;
			console.log(123, id, this.product)
			axios.post(url.global.baseurl + 'getProduct', qs.stringify({id})).then(function(res){
				console.log(res.data.data);
				if(res.data.status){
					res.data.data[0].qty = 1;
					this.product = res.data.data[0];
					// this.$store.state.home.product[0] = res.data.data[0];
					this.currentProduct[0] = res.data.data[0];
					console.log(this.product, (this.currentProduct[0] == this.$store.state.home.product[0]))
					//判断两个数组是否相等；
					// alert(this.product.toString() == this.$store.state.home.product.toString());
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
				//购物车商品信息;
				var cart;
				if(localStorage.cart){
					cart = JSON.parse(localStorage.cart);
					that.$store.state.home.product = JSON.parse(localStorage.cart);					
				} else {
					cart = [];
				};
				
				console.log("that.$store.state.home.product", that.$store.state.home.product)
				if(cart.length <= 0){
					//购物车为空时，加入购物车
					that.$store.state.home.product.push(that.product);
					cart.push(that.product);

					//将数据写到localStorage；
					localStorage.setItem('cart', JSON.stringify(that.$store.state.home.product));
					console.log('cart', cart);
				}else{
					that.$store.state.home.product.map((item, idx)=>{
						if(item.ID == that.$store.state.home.currentId){

							//购物车有相同的商品时，直接数量+1；
							item.qty++;
							console.log('qty++', that.$store.state.home.product);
						}else if(idx == that.$store.state.home.product.length - 1 ){

							//当购物车没有相同的商品时，添加商品到购物车
							that.$store.state.home.product.push(that.product);
						}
					})

					//将最近购物车重新写到localStorage;
					localStorage.setItem('cart', JSON.stringify(that.$store.state.home.product));

				}

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

			},
			collected: function(e){
				//获取用户收藏的商品；
				var collected;
				var id = this.$store.state.home.currentId;
	            var username = localStorage.getItem('username');
	            if(username){
	                username = JSON.parse(localStorage.getItem('username')).username;
	            } else {
	                username = null;
	            }
		    	
		    	if(username){
		    		$(e.target).toggleClass('collected');
		    		if($(e.target).hasClass('collected')){
						axios.post(url.global.baseurl + 'getCollected', qs.stringify({username})).then(function(res){
							console.log(res);

							//没有收藏商品数据返回时，
							if(!res.data.status){
								this.collectGoods.push(id);
							} else {
								this.collectGoods = res.data.data;

								//遍历收藏的商品；
								var arr = res.data.data.filter(item=>{
									return item == id;
								});
								if(arr.length <= 0 ){
									this.collectGoods.push(id);
								}
							}
							//将要收藏的商品写入数据库；
							axios.post(url.global.baseurl + 'setCollected', qs.stringify({collected: this.collectGoods})).then(function(res){

							}.bind(this));

							
							// console.log('collected', this.collectGoods, this.$store.state.home.currentId);
						}.bind(this));
		    		
		    		}

		    	}


				
			}
		}

	}
</script>