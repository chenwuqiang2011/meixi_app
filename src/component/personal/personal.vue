<template>
	<div class="personal">
		<div class="acc_bg">
            <div class="acc_user">
                <div class="acc_user_img"><img src="../../assets/imgs/acc_user.gif" width="76"></div>
            </div>
            <div class="acc_info">
                <span class="acc_name">{{username}}</span><br>
                <span class="acc_level">欢迎您，美西普通会员!</span>
                <span class = "acc_logout" @click = "logout">退出</span>
            </div>
            <div class="acc_bg_mask"></div>
        </div>
        <div class="accList">
            <ul class="clearfix">
                <li>
                    <router-link to = "/account">
                        <em></em>
                        <div class="accList_txt">
                            我的账户<br><span>ACCOUNT</span>
                        </div>
                    </router-link>
                </li>
                <li style="width:34%">
                    <a class="accList_order" href="/member/account/myorder.html">
                        <em></em>
                        <div class="accList_txt">
                            我的订单<br><span>ORDER</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a class="accList_fav" href="/member/myfavorite.html" style="border-right:none;">
                        <em></em>
                        <div class="accList_txt">
                            我的收藏<br><span>FAVORITE</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a class="accList_coupon" href="/member/account/mycoupon.html">
                        <em></em>
                        <div class="accList_txt">
                            我的优惠券<br><span>COUPON</span>
                        </div>
                    </a>
                </li>
                <li style="width:34%">
                    <router-link class="accList_address" to="/address">
                        <em></em>
                        <div class="accList_txt">
                            我的地址<br><span>ADDRESS</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <a class="accList_about" href="/services/about.html" style="border-right:none;">
                        <em></em>
                        <div class="accList_txt">
                            关于美西<br><span>ABOUT</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <a class="acc_phone" href="tel:4000-250-630">客服人热线：<img src="../../assets/imgs/phone.png" width="10">4000-250-630</a>
        <Foot></Foot>

	</div>
</template>
<script>
	import './personal.scss';
	import Foot from '../footer/footer.vue';
    import router from '../../router';
	export default {
		data: function(){
			return {
				username: ''
			}
		},
		components:{
	      Foot
	    },
	    created: function(){
            var username = localStorage.getItem('username');
            if(username){
                username = JSON.parse(localStorage.getItem('username')).username;
            } else {
                username = null;
            }
	    	
	    	console.log('username', username);
	    	this.username = username;
            this.$store.state.home.username = username;
            console.log('name', this.$store.state.home.username)
	    },
        methods: {
            logout: function(){
                console.log('logout');
                localStorage.removeItem('username');
                router.push('/login');
            }
        }
	}
</script>