<script>
export default {
	data() {
		return {};
	},
};
</script>
<template>
	<div class="buttons pt-3 text-center">
		<button
			@click="$emit('newOperation', 'add')"
			class="fw-semibold btn btn-secondary mx-1 add text-black border-0 btn-op">
			+
		</button>
		<button
			@click="$emit('newOperation', 'sub')"
			class="fw-semibold btn btn-secondary mx-1 sub text-black border-0 btn-op">
			-
		</button>
		<button
			@click="$emit('newOperation', 'mul')"
			class="fw-semibold btn btn-secondary mx-1 mul text-black border-0 btn-op">
			x
		</button>
		<button
			@click="$emit('newOperation', 'div')"
			class="fw-semibold btn btn-secondary mx-1 div text-black border-0 btn-op">
			:
		</button>

		<!-- <input type="submit" id="calculate" onclick="getResult()" class="fw-bold btn btn-success mx-1" value="="> -->
		<input
			type="submit"
			id="clear"
			@click="$emit('clear')"
			class="fw-bolder btn btn-danger mx-1 btn-op"
			value="C" />
	</div>
</template>
<style scoped>
.btn-op {
	transition: 0.5s;
}

.btn-op:hover {
	transform: scale(1.3);
}
</style>
