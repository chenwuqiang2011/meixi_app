<template>
	<el-tabs v-model="activeName"  @tab-click="handleClick">
		    <el-tab-pane label="男仕" name="first">
		    	<Man></Man>
		    </el-tab-pane>
		    <el-tab-pane label="女士" name="second">
		    	<Woman></Woman>
		    </el-tab-pane>
		    <el-tab-pane label="LifeStyle" name="third">
		    	<LifeStyle></LifeStyle>
		    </el-tab-pane>
		</el-tabs>
</template>
<script>
	import Man from '../tag/man.vue';
	import Woman from '../tag/woman.vue';
	import LifeStyle from '../tag/LifeStyle.vue';
	export default {
		data: function(){
			return {
				activeName: 'first'
			}
		},
		components: {
			Man,
			Woman,
			LifeStyle
		},
		methods: {
			handleClick: function(tab, event){
		    	console.log(tab, event);
		    }
		}
	}
</script>