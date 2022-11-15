<script>
export default {
	data() {
		return {
			operation: "add",
			grow: false,
		};
	},
	methods: {
		setOperation(new_operation) {
			this.grow = true;
			setTimeout(() => {
				this.grow = false;
			}, 200);
			this.operation = new_operation;
		},
	},
};
</script>
<template>
	<select
		disabled
		name="operation"
		id="operation_select"
		ref="operation_select"
		:class="[{ grow: grow }, operation]"
		v-model="operation">
		<option value="add" key="add">+</option>
		<option value="sub" key="sub">-</option>
		<option value="mul" key="mul">*</option>
		<option value="div" key="div">/</option>
	</select>
</template>
<style scoped>
select:disabled {
	background-color: #6c757d;
	color: black;
	font-size: 20px;
	width: 60px;
	height: 60px;
	margin: 0 30px;
	text-align: center;
	appearance: none;
	border-radius: 10px;
	transition: 0.35s;
}
.grow {
	scale: 1.15;
}
</style>
