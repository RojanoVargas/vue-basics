<script setup lang="ts">
import HelloWorld from "./components/Counters.vue";

const popup = (): void => { // void is common for event handlers with TypeScript
	alert("You are hired");
};
</script>

<template>
	<div>
		<a @click="popup" >
			<img src="./assets/justwatchlogo.png" class="logo" alt="JustWatch logo" />
		</a>
	</div>
	<HelloWorld msg="Movie Rating Counter" />
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #fffc57e5);
}
</style>
