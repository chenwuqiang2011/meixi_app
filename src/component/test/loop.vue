<template>
    <div class="recommed">
        <Slide :loop = 'loop' :autoPlay='autoPlay'>
            <div class="slider-item">11</div>
            <div class="slider-item">22</div>
            <div class="slider-item">33</div>
            <div class="slider-item">444</div>
        </Slide>
    </div>
</template>
<script>
    import Slide from './slider.vue'
    export default {
        name:'recommend',
        components:{
            Slide
        },
        data (){
            return {
                loop:true,
                autoPlay:true,
            }
        }
    }
</script>