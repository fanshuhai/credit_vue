<template>
	<div id="">
		<el-dialog
			:show-close="false"
			:visible.sync="dialogVisible"
			width="30%">
			<span>这是一段信息</span>
			<span id="" slot="footer" class="dialog-footer">
				<el-button @click="close">取  消</el-button>
				<el-button type="primary" @click="dialogVisible=false">确  定</el-button>
			</span>
			
		</el-dialog>
	</div>
</template>

<script>
	export default{
		name:'v-dialog',
		props:{
			dialogVisible:{
				type:Boolean,
				default:function(){
					return false;
				}
			}	
		},
		data(){
			return{
				
			}
		},
		methods:{
			close(){
				this.$emit('showClose',false)
			}
		},
		computed:{
			
		},
		mounted(){
			
		},
		created(){
			
		}
	}
</script>

<style scoped>
</style>