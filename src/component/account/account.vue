<template>
	<div class="account">
		<div class="my_message">
            <div class="my_detail" @click = "mydetial">
                <div class="my_pic">
                    <img src="../../assets/imgs/acc_user.gif" width="76">
                </div>
                <div class="my_name">
                    <span v-text = "username"></span><br />
                    <span>美西普通会员</span>
                </div>
                <i class="el-icon-arrow-right"></i>
            </div>
            <ul class="action">
                <li class="my_action remain">
                    <p>我的余额：￥<span v-text = "remain"></span></p>
                    <i class="el-icon-arrow-right"></i>
                </li>
                <li class="my_action validate ">
                    <p>手机验证</p>
                    <i class="el-icon-arrow-right"></i>
                </li>
                <li class="my_action desc">
                    <p>MEICI CLUB介绍</p>
                    <i class="el-icon-arrow-right"></i>
                </li>
                <li class="my_action change">
                    <p>关于退货/换货</p>
                    <i class="el-icon-arrow-right"></i>
                </li>
                <li class="my_action sizes">
                    <p>商品尺码</p>
                    <i class="el-icon-arrow-right"></i>
                </li>
            </ul>
            <button @click = "logout">退出当前账号</button>
        </div>
        <Foot></Foot>

	</div>
</template>
<script>
	import './account.scss';
	import Foot from '../footer/footer.vue';
    import router from '../../router';
	export default {
		data: function(){
			return {
				username: '',
                remain: 0
			}
		},
		components:{
	      Foot
	    },
	    mounted: function(){
            var username = JSON.parse(localStorage.getItem('username'));
            if(!username){
                this.$message({
                  message: '请先登录！',
                  type: 'error', 
                  onClose:()=>{
                    router.push('/login');
                  }
                });
                return false;
            }else {
                this.username = username.username;

            }
            console.log(username);
            $('.action').on('click', '.remain', function(){
                alert("余额！");
            })
            .on('click', '.validate', function(){
                alert("验证！");
            })
            .on('click', '.desc', function(){
                alert("介绍！");
            }) 
            .on('click', '.change', function(){
                alert("退换货！");
            })
            .on('click', '.sizes', function(){
                alert("尺码！");
            })
	    },
        methods: {
            logout: function(){
                console.log('logout');
                localStorage.removeItem('username');
                router.push('/login');
            },
            mydetial: function(){
                router.push('/myInfo');
            }
        }
	}
</script>