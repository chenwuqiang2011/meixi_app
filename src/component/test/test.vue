<!-- <template>
	<div class = "test" ref = "wrapper">
		<div class="wrapper">
			<p v-for = "(item, index) in 100" :key = "index">{{item}}</p>
		</div>
		<swiper :options="swiperOption">
		        <swiper-slide v-for="slide in swiperSlides" :key="slide.id">I'm Slide {{ slide }}</swiper-slide>
		        <div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
<div class="list-wrapper list-wrapper-hook">
	<div>
		<div class="top-tip">
			<span class="refresh-hook">下拉刷新</span>
		</div>
		<ul class="list-content list-content-hook">
			<li v-for = "(item, idx) in 20"></li>
		</ul>
		<div class="bottom-tip">
			<span class="loading-hook">查看更多</span>
		</div>
	</div>
</div>
</template>
<script>
import 'swiper/dist/css/swiper.css';

import { swiper, swiperSlide } from 'vue-awesome-swiper';
import Bscroll from 'better-scroll';


export default {
	data () {
	    return {
	      swiperOption: {　
	      	loop: true,　　　　
	        autoplay:true,//自动切换
	        duration: 200,
	        pagination: {
	          el: '.swiper-pagination'//分页器
	        }
	      },
	      swiperSlides: [1, 2, 3],
	      tabList: ['one', 'two', 'three']
	    }
	},
	mounted() {
		// setTimeout(() => {
		//    this.scroll = new Bscroll(this.$refs.wrapper, {})
		//   }, 20)
		this.$nextTick(() => {
		    this.scroll = new Bscroll(this.$refs.wrapper, {})
		})
		    
	}
}
</script> -->
<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li v-for="item in data">{{item.ID}}</li>
    </ul>
    <div class="loading-wrapper"></div>
  </div>
</template>
<script>
	import axios from 'axios';
	import qs from 'qs';
	import url from '../../assets/common/common.js';
  	import Bscroll from 'better-scroll';
	export default {
	    data() {
	      return {
	        data: []
	      }
	    },
	    created() {
	    	var data =  qs.stringify({pageNo: 1, qty: 40});
	    	axios.post(url.global.baseurl + 'queryProducts', data).then(function(res){console.log(res.data.data);
	    		this.data = res.data.data;
	    	}.bind(this));
	      	this.loadData()
	    },
	    methods: {
	      loadData() {
	      		//惯性滑动；
	      		this.$nextTick(() => {
	      		  if (!this.scroll) {
	      		    this.scroll = new Bscroll(this.$refs.wrapper, {
	      		    	click: true,      //允许点击事件；
	      		    	scrollbar: true, //滚动条显示；
	      		    	fade: true,     //滚动条淡入淡出；
	      		    	pullDownRefresh: function(){
	      		    		return {
	      		    			threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
	      		    			stop: 20      // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
	      		    		}
		      		    },
		      		    pullUpLoad: function(){
		      		    	return {
		      		    		threshold: -20  // 在上拉到超过底部 20px 时，触发 pullingUp 事件
		      		    	}
		      		    }
		      		})
	      		  	
	      		  	//下拉刷新事件；
	      		    this.scroll.on('pullingDown', ()=>{
	      		    	var data =  qs.stringify({pageNo: 1, qty: 40});
	      		    	axios.post(url.global.baseurl + 'queryProducts', data).then((res)=>{
	      		    		this.data = res.data.data;
	      		    		this.scroll.finishPullDown();
	      		    	});
	      		    });

	      		  	//上拉加载事件；
	      		  	this.scroll.on('pullingUp',()=>{
	      		  		var data =  qs.stringify({pageNo: 2, qty: 40});
	      		    	axios.post(url.global.baseurl + 'queryProducts', data).then((res)=>{console.log(123)
	      		    		res.data.data.map(item=>{
	      		    			this.data.push(item);
	      		    		})
	      		    		
	      		    		console.log(this.data);
	      		    		this.scroll.finishPullUp();

	      		    	});
	      		  	})

	      		  } else {
	      		  	console.log(123)
	      		    this.scroll.refresh()
	      		  }
	      		})
	      

	        /*requestData().then((res) => {
	          this.data = res.data.concat(this.data)
	          this.$nextTick(() => {
	            if (!this.scroll) {
	              this.scroll = new Bscroll(this.$refs.wrapper, {})
	              this.scroll.on('touchend', (pos) => {
	                // 下拉动作
	                if (pos.y > 50) {
	                  this.loadData()
	                }
	              })
	            } else {
	              this.scroll.refresh()
	            }
	          })
	        })*/
	      }
	    }
	}
</script>