<template>
	<button
		:style="{
			padding: '15px',
			fontSize: '20px',
			background: background,
			color: color,
		}"
	>
		{{ text }}
	</button>
</template>

<script>
export default {
	name: "CustomSecondButton",
	props: {
		background: {
			default: "#000",
		},
		color: {
			default: "#fff",
		},
		text: {
			default: "My Button 2",
		},
	},
};
</script>