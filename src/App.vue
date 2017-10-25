<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <spinner v-show="false"></spinner>
  </div>
</template>

<script type="text/javascript">

  var deviceWidth = document.documentElement.clientWidth;   
  document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
  //1rem=100px  就是所有的css属性的属性值都是用rem来表示

  import spinner from './component/spinner/spinner.vue';

  export default {
    name: "app",
    components: {
      spinner
    }
  }

</script>

<style lang="scss">
  *{margin:0;padding:0;}
  #app {
    position: relative;
    width: 100%;
    height:100%;
    overflow: hidden;
  }
</style>


