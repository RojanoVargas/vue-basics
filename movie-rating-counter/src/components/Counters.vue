<script setup lang="ts"> // Came by default but I saw the theory behind this in docs: 'Usage in Single-File Components'
import { ref, computed } from "vue";

defineProps<{ msg: string }>();

const count = ref<number>(5);

const messageRating = computed(() => {
	if (count.value <= 0) {
		return "Terrible movie!";
	} else if (count.value >= 15) {
		return "WOW, " + count.value + " good scenes, this might be the movie of the decade";
	} else {
		return "Current rating is " + count.value;
	}
});

const isTerribleMovie = computed(() => count.value <= 0);
</script>

<template>
	<h1>{{ msg }}</h1>

	<div class="card">
		<button type="button" @click="count++">Good scene</button>
		<button type="button" @click="count--">Bad scene</button>
	</div>

	<div>
		{{ messageRating }}
		<span v-if="isTerribleMovie">
			Check the best rated movies of 2025 <a href="https://www.justwatch.com/uk/movies?release_year_from=2025&tomatoMeter=100" target="_blank">here</a>.
		</span>
	</div>
</template>

<style scoped>
button {
	background-color: #fbc500;
	margin: 2em;
}
button:hover {
	border: solid 1px black;
}
</style>
