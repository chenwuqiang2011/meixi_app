<template>
	<div class="meixi-details">
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
                <!--<em class="priceTip"></em>-->
            </div>
            <!--  -->
        </div>
	</div>
</template>
<script>
	import './product.scss';
	import url from '../../assets/common/common.js';
	import axios from 'axios';
	import qs from 'qs';
	export default {
		data: function(){
			return {
				product: []
			}
		},
		created: function(){
			var id = this.$store.state.home.currentId;
			console.log(123, id)
			axios.post(url.global.baseurl + 'getProduct', qs.stringify({id})).then(function(res){
				console.log(res);
				if(res.data.status){
					this.product = res.data.data[0];
				}
			}.bind(this))
		}

	}
</script>