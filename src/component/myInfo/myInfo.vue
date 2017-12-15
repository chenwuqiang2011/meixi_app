<template>
	<div class="myInfo">
		<div class="myMsg">
            <ul>
                <li class="myPic">
                    <span>头像</span>
                    <label for = "file" v-show = "img">选择文件
                        <input type="file" class = "file" id = "file">
                    </label>
                    <div class="myInfo_user" v-show = "!img"></div>
                </li>
                <li class="nick">
                    <span>昵称</span>
                    <input type="text" class = "nickname" placeholder="请输入昵称">
                </li>
                <li class="sexy">
                    <span>性别</span>
                    <select name="sexy" id="sexy">
                        <option value = "男">男</option>
                        <option value = "女">女</option>
                    </select>
                </li>
                <li class="birthday">
                    <span>生日</span>
                    <div class="block">
                        <el-date-picker
                          v-model="value"
                          align="right"
                          type="date"
                          placeholder="选择日期"
                          :picker-options="pickerOptions">
                        </el-date-picker>
                    </div>
                </li>
            </ul>
            <button>保存</button>      
        </div>
        <Foot></Foot>

	</div>
</template>
<script>
    // import imgZoom from 'vue2.0-zoom';
    
	import './myInfo.scss';
	import Foot from '../footer/footer.vue';
    import router from '../../router';
	export default {
        data: function(){
            return {
                value: '',
                img: true,
                pickerOptions: {
                    disabledDate: function(time){
                        return time.getTime() > Date.now();
                    }
                }
            }
        },
		components: {
            Foot
        },
        mounted: function(){
            var that = this;
            $("#file").on("change", function() {
                let fileReader = new FileReader(),
                    fileType = this.files[0].type;
                fileReader.onload = function() {
                    if (/^image|[jpeg|png|gif]/.test(this.type)) {
                        // console.log(this.result)
                        // 读取结果在fileReader.result里面
                        that.img = false;

                        //删除上一次上传的图片；
                        $('#add_file').remove();
                        
                        $(`<img src="${this.result}" id = "add_file" />`).appendTo(".myInfo_user");
                    }
                }
                // 打印原始File对象
                console.log(this.files[0]);
                // base64方式读取
                fileReader.readAsDataURL(this.files[0]);    
            });

            //点出图片触发上传文件；
            $('.myInfo_user').on('click', '#add_file', function(){
                return $('label').click();
            }) 
        }
	}
</script>