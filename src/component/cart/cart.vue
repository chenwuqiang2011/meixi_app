<template>
  <div class="mx_cart">
    <div class="cart_tit">
      <div class="cart_name">购物袋</div>
      <div class="cart_right cart_edit" v-show = "show" @click = "toggle">编辑</div>
      <div class="cart_right cart_completed" v-show = "!show" @click = "toggle">完成</div>
    </div>
    <div class="goods">
      <ul class="goodslist">
        <li v-for = "(item, idx) in goods" :key = "idx" :data-id = "idx">
          <div class="img">
            <em class = "unchecked" @click = "unchecked"></em>
           
            <img :src='"./src/assets/imgs/" + item.imgurl' alt="">
          </div>
          <div class="discribe">
            <p class="category" v-text = "item.category"></p>
            <p class="name" v-text = "item.name"></p>
            <p class="nowPrice" v-text = "item.nowPrice"></p>
          </div>
          <div class="qty">
            <span @click = "sub">-</span>
            <input type = "text" class = "num" maxlength="3" :value = "item.qty" onkeyup="this.value=this.value.replace(/^0|\D/g,'')" />
            <span @click = "add">+</span>
          </div>
        </li>
      </ul>
      <Foot></Foot>
    </div>
   
    <div class="cartFix">
      <div class="select">
        <div class="select_all">
          <em class = "selected" v-show = "selected" @click = "all"></em>
          <em class = "unselected" v-show = "!selected" @click = "all"></em>
          全选
        </div>
        <div class="total" v-show = "show">
          <p class="sum">
            合计：￥<span v-text = "total"></span>
          </p>
          <p class="discount">
            已为您省去：￥<span>0.00</span>
          </p>
        </div>
        <div class="collect_del" v-show = "!show">
          <span class="collect">移入收藏</span>
         
        </div>
      </div>
      <div class="buy" v-show = "show">
        <em></em>
        立即结算
      </div>
      <div class="buy" v-show = "!show">
        <span @click = "del">删除</span>
      </div>
    </div>
  </div>
</template>
<script>
  import './cart.scss'; 
  import Foot from '../footer/footer.vue';
  import router from '../../router';
  import url from '../../assets/common/common.js';
  import axios from 'axios';
  import qs from 'qs';
  export default {
    data: function(){
      return {
        show: true,
        selected: true,
        goods: [],
        total: 0.00
      }
    },
    created: function(){
      //购物车商品信息;
      var cart;
      if(localStorage.cart){
        cart = JSON.parse(localStorage.cart);
        this.goods = cart;
        // that.$store.state.home.product = JSON.parse(localStorage.cart);         
      } else {
        cart = [];
      };
      console.log(cart);

    },
    mounted: function(){
      var that = this;
      $('.num').on('change', function(e){
        var index = $(e.target).parents('li').data('id');
        console.log(index)
        if($(this).val() == ''){
          $(this).val('1');
        };
        var value = $(this).val();
        that.goods.map((item, idx)=>{
          if(index == idx){
            item.qty = value;
          }
        });
        localStorage.cart = JSON.stringify(that.goods);

        //计算总价；
        count(that);
      })
      //计算总价；
      count(this);
    },
    components: {
      Foot
    },
    methods:{
      toggle:function(){
        this.show = !this.show;
        $('.unchecked').addClass('checked');
        this.selected = false;
        this.total = 0.00;
      },
      all: function(){
        this.selected = !this.selected;

        //全选反选；
        if(!this.selected){
          $('.unchecked').addClass('checked');
        } else {
          $('.unchecked').removeClass('checked');
        };

        //计算总价；
        count(this);
      },
      unchecked: function(e){
        //单选切换；
        $(e.target).toggleClass('checked');

        //当有一个商品没选中时，全选按钮消失；
        $('.unchecked').map((idx, item)=>{
          if($(item).hasClass('unchecked')){
            this.selected = false;
          }
        });

        //所有商品选中时，全选按钮自动勾选；
        if($('.checked').length > 0){
          this.selected = false;
        } else {
          this.selected = true;

        };

        //计算总价；
        count(this);
      },
      sub: function(e){
        var value = $(e.target).next('input').val();
        var index = $(e.target).parents('li').data('id');
        console.log(index);
        this.goods.map((item, idx)=>{
          if(index == idx){
            item.qty--;
            if(item.qty <= 1){
              item.qty = 1;
            }
          }
        });
        localStorage.cart = JSON.stringify(this.goods);
        

        //计算总价；
        count(this);
      },
      add: function(e){
        var value = $(e.target).prev('input').val();
        var index = $(e.target).parents('li').data('id');
        this.goods.map((item, idx)=>{
          if(index == idx){
            item.qty++;
            console.log($(e.target).prev('input').val())
          }
        });
        console.log("goods", this.goods)
        localStorage.cart = JSON.stringify(this.goods);


        //计算总价；
        count(this);
      },
      del: function(){
        
        $('.unchecked').map((idx, item)=>{
          //删除选中商品；
          if(!$(item).hasClass('checked')){
            console.log(idx);
            this.goods.map((item2, idx2)=>{
              if(idx == idx2){
                this.goods.splice(idx, 1);
              }
            })
          };

        })
        //去除选中；
        $('.unchecked').map((idx3, item3)=>{
          $(item3).addClass('checked');
        })

        //更新数据；
        localStorage.cart = JSON.stringify(this.goods);
      }
    }
  }
  function count(that){
    that.total = 0;
    $('.unchecked').map((idx, item)=>{
      if(!$(item).hasClass('checked')){
    
        that.goods.map((item2, idx2)=>{
         
          if(idx == idx2){
            that.total += item2.nowPrice * item2.qty;
          }
        })
      }
    })
  }
</script>