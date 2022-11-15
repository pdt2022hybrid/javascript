<script setup>
import NumberInput from "./components/NumberInput.vue";
import OperationSign from "./components/OperationSign.vue";
import Result from "./components/Result.vue";
import OperationButtons from "./components/OperationButtons.vue";
</script>

<script>
export default {
	name: "App",
	components: {
		NumberInput,
		OperationSign,
		Result,
		OperationButtons,
	},
	data() {
		return {
			operation: "add",
		};
	},
	methods: {
		clear() {
			this.$refs.num1.clear();
			this.$refs.num2.clear();
			this.$refs.result.clear();
		},
		getResult(number1, number2) {
			let result;

			switch (this.operation) {
				case "add":
					result = number1 + number2;
					break;
				case "sub":
					result = number1 - number2;
					break;
				case "mul":
					result = number1 * number2;
					break;
				case "div":
					result = number1 / number2;
					break;
			}

			//if result is not a number nothing will return
			if (isNaN(result)) {
				this.$refs.result.clear(true);
				return;
			}

			this.$refs.result.setResult(result);
		},
		tryToAutomaticallyCalculate() {
			let num1 = $("#num1").val();
			let num2 = $("#num2").val();
			if (num1 && num2) {
				this.getResult(parseFloat(num1), parseFloat(num2));
			} else {
				this.$refs.result.clear(true);
			}
		},
		setOperation(newOperation = this.operation) {
			this.operation = newOperation;

			this.$refs.operationSelect.setOperation(newOperation);
			this.tryToAutomaticallyCalculate();
		},
	},
};
</script>

<template>
	<div>
		<NumberInput
			numberID="num1"
			ref="num1"
			@numberInput="tryToAutomaticallyCalculate()">
		</NumberInput>

		<OperationSign ref="operationSelect"></OperationSign>

		<NumberInput
			numberID="num2"
			ref="num2"
			@numberInput="tryToAutomaticallyCalculate()">
		</NumberInput>

		<div class="equals d-inline-block">=</div>

		<Result ref="result"></Result>

		<OperationButtons
			@newOperation="setOperation"
			@clear="clear"></OperationButtons>
	</div>
</template>

<style>
.add {
	background-color: limegreen !important;
}

.sub {
	background-color: red !important;
}

.mul {
	background-color: blue !important;
}

.div {
	background-color: yellow !important;
}

.equals {
	color: white;
	text-align: center;
	width: 10px;
	margin: 0 15px;
}
</style>
