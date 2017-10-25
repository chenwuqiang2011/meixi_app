<template>
	<div class="mx-login">
		<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
		<el-form-item  prop="age" class = "mx-icon">
			<i class = "iconfont icon-admin"></i>
			<el-input v-model.number="ruleForm2.age" type = "number" placeholder = "手机号"></el-input>
		</el-form-item>
		<el-form-item  prop="pass" class = "mx-icon">
			<i class = "iconfont icon-password"></i>
			<el-input type="password" v-model="ruleForm2.pass" auto-complete="off"  placeholder = "请输入密码"></el-input>
		</el-form-item>
		<el-form-item  prop="checkPass" class = "mx-icon">
			<i class = "iconfont icon-password"></i>
			<el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"  placeholder = "请确认密码"></el-input>
		</el-form-item>
		<el-form-item class = "submit-btn">
			<el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
		</el-form-item>
			<router-link to = "/login">
				<p class = "forget-pwd to-login">已注册，请登录</p>
			</router-link>
		</el-form>
		<Foot></Foot>
	</div>
</template>
<script>
	import './register.scss';
  //axios请求
  import axios from 'axios';
  import qs from 'qs';
  import Foot from '../footer/footer.vue';

	export default {
    components:{
      Foot
    },
		 data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
          	
          	//利用正则判断手机号是否合法；
            if (!/^1[34578]\d{9}$/.test(value)) {
              callback(new Error('手机号格式不正确！'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if(!/^[^\s]{6,20}$/.test(value)){
        	callback(new Error('密码长度不能小于6位'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
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
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('submit', this.ruleForm2);
            axios.post('http://localhost:1000/register', qs.stringify({username: this.ruleForm2.age, password: this.ruleForm2.pass})).then(function(res){
              console.log(res);
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
	}
</script>