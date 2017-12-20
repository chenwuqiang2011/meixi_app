<template>
  <div class="meixi-collected">
    <div class="collected">
      <div class="collected-title" v-show = "collectedGoods.length > 0">
        
        <label for = "collected-all"><input type="checkbox" id = "collected-all" @click = "all">全选</label>
        <button>加入购物车</button>
        <button>取消收藏</button>
      </div>
      <div class="collected-none" v-show = "collectedGoods.length <= 0">
        <p>暂时没有收藏商品哦!</p>
        <router-link to = "/goodslist" >
          <button>更多商品</button>
        </router-link>
      </div>
      <ul>
        <li v-for = "(item, idx) in collectedGoods" :key = "item.ID" :data-id = "item.ID">
          <div class="collected-img">
            <input type="checkbox" class = "checkbox" @click = "checked" >
            <img :src='"./src/assets/imgs/" + item.imgurl' alt="" @click = "detail">
          </div>
          <div class="collected-p">
            <p class="collected-name" v-text = "item.name"></p>
            <p class="collected-price" v-text = "item.nowPrice"></p>
          </div>
          <div class="btn">
            <button>加入购物车</button>
            <button @click = "cancle">取消收藏</button>
          </div>
        </li>
      </ul>
    </div>
    <Foot></Foot>
  </div>
</template>
<script>
  import './collected.scss';
  import url from '../../assets/common/common.js';
  import axios from 'axios';
  import qs from 'qs';
  import router from '../../router';

  import '../../assets/common/jquery.fly.min.js';
  import Foot from '../footer/footer.vue';

  export default {
    data: function(){
      return {
        collectedGoods: [],
        username: null
      }
    },
    components: {
      Foot
    },
    created: function(){
      var username = localStorage.getItem('username');
        if(username){
            username = JSON.parse(localStorage.getItem('username')).username;
        } else {
            username = null;
        };
        this.username = username;
        axios.post(url.global.baseurl + 'showCollected', qs.stringify({username: username})).then(function(res){
          console.log('235',res);
          if(res.data.status){
            this.collectedGoods = res.data.data;
          }
        }.bind(this));  
    },
    methods: {
      all: function(e){
        //全选反选；
        if(e.target.checked){
          $(".checkbox").prop("checked", true);  
        }else{   
          $(".checkbox").prop("checked", false);
        } 
      },
      checked: function(){
        var checked_num = $('.checkbox').length;
        $('.checkbox').map((idx,item)=>{
          if(!item.checked){
            //存在商品没有选中时，全选取消
            $('#collected-all').prop('checked', false);
            checked_num--;
          }
        });
        if(checked_num == $('.checkbox').length){
            //商品全部选中时，全选勾选；
          $('#collected-all').prop('checked', true);
        }
      },
      detail: function(e){
        var currentId = $(e.target).parents('li').data('id');
        this.$store.state.home.currentId = currentId;
        router.push('/product');
      },
      cancle: function(e){
        //当前商品ID;
        var currentId = $(e.target).parents('li').data('id');
        console.log(currentId, this.collectedGoods);
       
        //循环商品,将ID放入新数组,然后写入数据库;
        // var goods = [];
        // this.collectedGoods.map(item=>{
        //   goods.push(item.ID);
        // });

        // //消息提示;
        this.$confirm('取消收藏, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.collectedGoods.map((item, idx)=>{
            if(item.ID == currentId){
              this.collectedGoods.splice(idx, 1);
            }
          })

          //循环商品,将ID放入新数组,然后写入数据库;
          var collected = [];
          this.collectedGoods.map(item=>{
            collected.push(item.ID);
          });
        //   //执行取消收藏操作;
        //   // $(e.target).parents('li').remove();

        //   collected.map((item, idx)=>{
        //     console.log(item,currentId)
        //     if(item == currentId){
        //       collected.splice(idx, 1);
        //       this.collectedcollected.splice(idx, 1);
        //     }
        //   })
          //将要收藏的商品写入数据库；
          console.log(collected)
          // if(collected.length == 0){
          //   collected = null;
          // }
          axios.post(url.global.baseurl + 'updateCollected', qs.stringify({collected: collected, username: this.username})).then(function(res){
            console.log('收藏成功');
          }.bind(this));

          this.$message({
            type: 'success',
            message: '收藏已成功取消!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消!'
          });          
        });
      }
    }
  }

</script>