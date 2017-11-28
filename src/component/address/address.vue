<template>
	<div class="address">
		<ul class="my_address">
    		<li v-for = "(item, idx) in addresses" :key = "idx" :data-id = "idx">
    			<p>
    				<span class = "name" v-text = "item.name"></span>
    				<span class = "tel" v-text = "item.tel"></span>
    			</p>
    			<p>
    				{{item.province + ',' + item.city + ',' + item.area + '&nbsp;' + item.street}}
    			</p>
				<div class = "editable">
					<div class="left" v-if = "!item.value" @click = "set">
						<em></em>
						设为默认
					</div>
					<div class="left1" v-if = "item.value">
						<em></em>
						默认地址
					</div>

					<div class="right">
						<div class="edit">
							<em></em>
							修改
						</div>
						<div class="del">
							<em></em>
							删除
						</div>
					</div>
				</div>
    		</li>
        </ul>
        <router-link to = "/add" class = "add_address">新增地址</router-link>
        <Foot></Foot>

	</div>
</template>
<script>
	import './address.scss';
	import Foot from '../footer/footer.vue';
    import router from '../../router';
    import url from '../../assets/common/common.js';
    import axios from 'axios';
	import qs from 'qs';
	export default {
		data: function(){
			return {
				addresses: []                        
			}
		},
		components:{
	      Foot
	    },
	    mounted: function(){
	    	var username = this.$store.state.home.username || JSON.parse(localStorage.username).username;
   			//读取数据库；
   			axios.post(url.global.baseurl + 'getAddress', qs.stringify({username})).then(function(res){
   				console.log(res.data.data[0].address);
   				this.addresses = JSON.parse(res.data.data[0].address);
   			}.bind(this));
	    },
        methods: {
       		set: function(e){
       			console.log($(e.target).parents('li').data('id'));
       			var currentId = $(e.target).parents('li').data('id');
       			this.addresses.map((item, idx)=>{
       				if(idx == currentId){
       					item.value = true;
	       				this.$message({
		       				showClose: true,
							message: '默认修改成功！',
							type: 'success'
		       			})
       				} else {
       					item.value = false;
       				}
       				//重新写入数据库；
       			})
       		}
        }
	}
</script>