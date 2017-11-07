<template>
	<div class="address">
		<div class="my_address">
          
        </div>
        <router-link to = "/add" class = "add_address">新增地址</router-link>
        <a href="tencent://Message/?Uin=1360011&websiteName=q-zone.qq.com&Menu=yes"><img border="0" SRC="http://wpa.qq.com/pa?p=1:396542001:14" alt="点击这里给我发消息"></a>
        <p>点我聊天</p>
        <Foot></Foot>

	</div>
</template>
<script>
	import './address.scss';
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
      
	    },
        methods: {
       		chat: function(){
       			window.location.href = "mqqwpa://im/chat?chat_type=wpa&uin=1234567&version=1&src_type=web&web_src=oicqzone.com"; 
       		}
        }
	}
</script>