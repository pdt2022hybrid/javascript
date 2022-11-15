<script>
export default {
	props: ["numberID"],
	data() {
		return {
			num1: null,
			num2: null,
			cleared: false,
		};
	},
	methods: {
		clear() {
			$(".number_input").val("");

			this.cleared = true;
			setTimeout(() => {
				this.cleared = false;
			}, 150);
		},
	},
};
</script>

<template>
	<input
		class="number_input"
		:class="{ cleared: cleared }"
		type="text"
		inputmode="numeric"
		name=""
		:id="numberID"
		@input="$emit('numberInput')" />
</template>

<style scoped>
input {
	margin-top: 5px;
	width: 200px;
	height: 80px;
	border-radius: 5px;
	border: none;
	background-color: lightslategrey;
	text-align: center;
	font-size: 20px;
	transition: 0.5s;
}
.cleared {
	background-color: rgb(212, 212, 212) !important;
}
</style>
