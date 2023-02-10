<script lang="ts">
	import failTestData from '../assets/failTestData';
	import ResultCard from './ResultCard.svelte';
	import resultsStore from '../stores/results.store';

	function reset() {
		$resultsStore = null;
	}
</script>

<div class="results-page">
	<h1 class="text-center mb-4">Results</h1>

	<h3>Elements evaluated: {$resultsStore.elements_evaluated_count}</h3>
	<h3>Errors found: {$resultsStore.errors_found_count}</h3>
	<div class="results-grid">
		{#each $resultsStore.results_details as result (result.test_name)}
			<ResultCard {...result} {...failTestData[result.test_name]} />
		{/each}
	</div>

	<button on:click={reset} class="btn">Go Back</button>
</div>

<style lang="scss">
	.results-grid {
		display: grid;
		width: 100%;
		grid-template-columns: repeat(auto-fit, minmax(350px, 45%));
		gap: 4rem;
		margin-top: 4rem;
		margin-bottom: 4rem;
		justify-content: center;
	}

	.btn {
		margin-bottom: 2rem;
	}
</style>
