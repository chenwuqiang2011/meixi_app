<template>
	<div class="new_address">
		
        
        <Foot></Foot>

	</div>
</template>
<script>
	import './add.scss';
	import Foot from '../footer/footer.vue';
    import router from '../../router';
	export default {
		data: function(){
			return {
				username: '',
                remain: 0                         
			}
		},
		components:{
	      Foot
	    },
	    mounted: function(){
      
	    },
        methods: {
       
        }
	}
</script>