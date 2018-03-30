<template>
    <div class="recommed">
        <slide :loop = 'loop' :autoPlay='autoPlay' style = "background-color: red">
            <div class="slider-item"><img src="../../assets/imgs/1.jpg" alt=""></div>
            <div class="slider-item"><img src="../../assets/imgs/2.jpg" alt=""></div>
            <div class="slider-item"><img src="../../assets/imgs/3.jpg" alt=""></div>
            <div class="slider-item"><img src="../../assets/imgs/4.jpg" alt=""></div>
        </slide>
    </div>
</template>
<script>
    import Slide from './slider.vue';
    export default {
        name:'recommend',
        components:{
            Slide
        },
        data (){
            return {
                loop:false,
                autoPlay:false
            }
        }
    }
</script>
<style>
    .slide-group{
       
    }
    .slider-item{
        float: left;
        height: 100%;
        width: 375px;
    }
    .slider-item img{
        height: 100%;
        width: 100%;
    }
</style>
