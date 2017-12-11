<template>
	<div class="new_address">
		<div class="add_form">
			<form>
				<ul>
					<li class="add_msg">
						<i clsss = ""></i>
						<span>收货人信息</span>
					</li>
					<li class="add_name">
						<label for="add_name">
							<span>姓名：</span><input type = "text" id = "add_name" placeholder="请输入姓名" />
						</label>

					</li>
					<li class="add_tel">
						<label for="add_tel">
							<!--限制11位手机号码-->
							<span>联系电话：</span><input type = "text" id = "add_tel" placeholder="请输入11位电话号码" maxlength="11" onkeyup="this.value=this.value.replace(/\D/g,'')" />
						</label>
					</li>
					<li class="add_msg2">
						<i></i>
						<span>收货地址</span>
					</li>
					<li class="address_detail">
						<span class = "psa">省市区：</span>
						<area-select :level='2' v-model="selected"></area-select>	
					</li>
					<li class="address_area">
						<label for="address_area">
							<span>详细地址：</span><input type = "text" id = "address_area" placeholder="请输入详细街道地址" />
						</label>
					</li>
					<li class = "add_default">
						<span>设为默认地址</span>
						<el-switch v-model="value" active-color="#13ce66" inactive-color="#ddd" ></el-switch>
					</li>
				</ul>
				<button @click = "submit">保存</button>
			</form>
		</div>  
        <Foot></Foot> 
	</div>
</template>
<script>
	import './edit.scss';
	import Foot from '../footer/footer.vue';
    import router from '../../router';
	import url from '../../assets/common/common.js';
    import axios from 'axios';
	import qs from 'qs';

    //地区三级联动插件；
    // import VDistpicker from 'v-distpicker';
	export default {
		data: function(){
			return {
				username: '',
                remain: 0,
                selected: [],
                value: true,
                address: {},
                addresses: [],
                index: ''
			}
		},
		components:{
	      Foot
	    },
	    created: function(){
      		this.username = this.$store.state.home.username;

      		//读取数据库；
      		axios.post(url.global.baseurl + 'getAddress', qs.stringify({username: this.username})).then(function(res){
      			console.log(res.data.data[0].address);
      			this.index = this.$store.state.home.idx;
      			this.addresses = JSON.parse(res.data.data[0].address);
      			this.addresses.map((item, idx)=>{
      				if(this.index == idx){
      					$('#add_name').val(item.name);
	       				$('#add_tel').val(item.tel);
	       				$('.el-input__inner').eq(0).val(item.province);
	       				$('.el-input__inner').eq(1).val(item.city);
	       				$('.el-input__inner').eq(2).val(item.area);
	       				$('#address_area').val(item.street);
	       				if(item.value !== "true"){
	       					this.value = false;
	       				}
	       				console.log(this.value, item.value)
      				}
      			})

      		}.bind(this));
	    },
	    mounted: function(){
      		$(document).mouseup(function(e){
      		    var _con = $('.el-message');   // 设置目标区域
      			if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
      				$('.el-message').hide();
      		   	}
      		});

      		
	    },
        methods: {
       		submit: function(){
       			console.log($('.el-input__inner').val(), this.value);
       			var add_name = $('#add_name').val().trim(),
       				add_tel = $('#add_tel').val(),
       				province = $('.el-input__inner').eq(0).val(),
       				city = $('.el-input__inner').eq(1).val(),
       				area = $('.el-input__inner').eq(2).val(),
       				street = $('#address_area').val().trim();
       			console.log(add_name, add_tel, province, city, area, street)
       			if(add_name == ''){
       				this.$message({
						showClose: true,
						message: '收货人地址不能为空！',
						type: 'warning',
						duration: 0
					});
					return false;
       			}
       			if(add_tel == ''){
       				this.$message({
						showClose: true,
						message: '收货人电话不能为空！',
						type: 'warning',
						duration: 0
					});
					return false;
       			} else if(add_tel.length < 11){
       				this.$message({
						showClose: true,
						message: '收货人电话格式不对！',
						type: 'warning',
						duration: 0
					});
					return false;
       			}
       			if(province == ''){
       				this.$message({
						showClose: true,
						message: '省份不能为空！',
						type: 'warning',
						duration: 0
					});
					return false;
       			}
       			if(province == ''){
       				this.$message({
						showClose: true,
						message: '详细地址不能为空！',
						type: 'warning',
						duration: 0
					});
					return false;
       			}
       			this.address.name = add_name;
       			this.address.tel = add_tel;
       			this.address.province = province;
       			this.address.city = city;
       			this.address.area = area;
       			this.address.street = street;
       			this.address.value = this.value;
       			var username = this.$store.state.home.username || JSON.parse(localStorage.username).username;
       			console.log(this.address, username, '123')
       			this.addresses.map((item, idx)=>{
       				//唯一一个默认地址；
       				if(this.value == 'true'){
       					item.value = false;
       				}

       				//更新地址；
       				if(this.index == idx){
       					this.addresses.splice(idx, 1, this.address);
       				}
       			})
       			console.log('edit', this.addresses);
       			//把数据写入数据库；
       			axios.post(url.global.baseurl + 'updateAddress', qs.stringify({username: username, address: this.addresses})).then(function(res){
       				console.log(res);
       				this.$message({
	       				showClose: true,
						message: '地址新增成功！',
						type: 'success'
	       			});
	       			router.push('/address');
       			}.bind(this));
       			
       		}
        }
	}
</script>