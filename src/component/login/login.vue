<template>
	<!-- <div class="mx-login">
		<form action="#" class="login">
			<p>
				<label for="username">
					<i class = "iconfont icon-admin"></i>
					<input type="text" id = "username" name = "username" class = "username">
				</label>
			</p>
			<p>
				<label for="password">
					<i class = "iconfont icon-password"></i>
					<input type="password" id = "password" name = "password" class = "password">
				</label>
			</p>
		</form>
	</div> -->
	<div class="mx-login">
		<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
			<el-form-item  prop="pass" class = "mx-icon">
				<i class = "iconfont icon-admin"></i>
				<el-input type="text" v-model="ruleForm2.pass" auto-complete="off" placeholder = "手机号/邮箱"></el-input>
			</el-form-item>
			
			<el-form-item prop="age" class = "mx-icon">
				<i class = "iconfont icon-password"></i>
				<el-input type="password" v-model.number="ruleForm2.age" auto-complete="off" placeholder = "密码"></el-input>
			</el-form-item>
			<el-form-item class = "submit-btn">
				<el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
				<router-link to = "/register">
          <el-button >注册</el-button>
        </router-link>
			</el-form-item>
			<p class = "forget-pwd">忘记密码</p>
			<div class="other-login">
				<div class="mx-line"></div>
				<p>其他登录方式</p>
			</div>
			<div class="weibo"></div>
		</el-form>
    <Foot></Foot>
	</div>
</template>
<script>
	import './login.scss';
  import axios from 'axios';
  import qs from 'qs';
  import router from '../../router';
  import Foot from '../footer/footer.vue';
  import url from '../../assets/common/common.js';

  // import axios2 from '../http.js';
	export default {
    components:{
      Foot
    },
		data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('密码不能为空'));
        }
        // setTimeout(() => {
        //   if (!Number.isInteger(value)) {
        //     callback(new Error('请输入数字值'));
        //   } else {
            
        //     callback();
            
        //   }
        // }, 1000);
        callback();

      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      // var validatePass2 = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请再次输入密码'));
      //   } else if (value !== this.ruleForm2.pass) {
      //     callback(new Error('两次输入密码不一致!'));
      //   } else {
      //     callback();
      //   }
      // };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          // checkPass: [
          //   { validator: validatePass2, trigger: 'blur' }
          // ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    created: function(){
      var username, password;
      username = localStorage.getItem('username');
      if(!username) return false;
      username = JSON.parse(localStorage.getItem('username')).username;
      password = JSON.parse(localStorage.getItem('username')).password;
      console.log('username', username);
       
      axios.post(url.global.baseurl + 'login', qs.stringify({username: username, password: password})).then(function(res){
        console.log('登录成功！', res);
        if(res.data.status){
          router.push('/personal');
        }
      })
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('login', this.ruleForm2.pass, this.ruleForm2.age);
            axios.post('http://localhost:1000/login',  qs.stringify({username: this.ruleForm2.pass, password: this.ruleForm2.age})).then(function(res){
              console.log(res);
              if(res.data.status){
                var username = localStorage.getItem('username');
                console.log(username)
                if(!username){
                  localStorage.setItem('username', JSON.stringify({username: this.ruleForm2.pass, password: this.ruleForm2.age}));
                }
                this.$message({
                  message: '恭喜你！登录成功！',
                  type: 'success', 
                  onClose:()=>{
                    router.push('/personal');
                  }
                });
              } else {
                this.$message({
                  message: '对不起！用户名或者密码错误！',
                  type: 'error'
                });
                // return false;
              }
            }.bind(this))

           /* http.js测试用；
            var data = qs.stringify({username: this.ruleForm2.pass, password: this.ruleForm2.age});
            console.log(data)
            axios2.login(data).then(function(res){
              console.log('axios2',res)
            })

*/

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      // resetForm(formName) {
      //   this.$refs[formName].resetFields();
      // }
    }
	}
</script>