<script>
export default {
	data() {
		return {
			result: null,
			grow: false,
			cleared: false,
		};
	},
	methods: {
		setResult(number) {
			this.result = number;

			this.grow = true;
			setTimeout(() => {
				this.grow = false;
			}, 200);
		},
		clear(silent = false) {
			this.result = null;

			if (silent == false) {
				this.cleared = true;
				setTimeout(() => {
					this.cleared = false;
				}, 150);
			}
		},
	},
};
</script>
<template>
	<input
		disabled
		class="result"
		:class="{ grow: grow, cleared: cleared }"
		type="text"
		inputmode="numeric"
		name=""
		id="result"
		ref="result"
		:value="result" />
</template>
<style scoped>
input {
	margin: 0 20xp;
	padding: 0;
	padding: 1px 2px;
	background-color: rgb(142, 157, 171);
	color: inherit;
	margin-top: 5px;
	width: 200px;
	height: 80px;
	border-radius: 5px;
	border: none;
	background-color: lightslategrey;
	text-align: center;
	font-size: 20px;
	transition: 0.4s;
}
.grow {
	scale: 1.15 !important;
}

.cleared {
	background-color: rgb(212, 212, 212) !important;
}
</style>
