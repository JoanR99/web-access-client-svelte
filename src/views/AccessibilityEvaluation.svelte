<script lang="ts">
	import Evaluation from '../assets/Evaluation.svg';
	import EvaluationResults from '../components/EvaluationResults.svelte';
	import EvaluationTabs from '../components/EvaluationTabs.svelte';
	import resultsStore from '../stores/results.store';
</script>

{#if !$resultsStore}
	<div class="evaluation-section">
		<div class="section__illustration">
			<img src={Evaluation} alt="Evaluation illustration" />
		</div>
		<div class="inputs-section">
			<h2 class="heading-2 heading-2--primary mb-2">Evaluate Accessibility</h2>
			<EvaluationTabs />
		</div>
	</div>
{:else}
	<EvaluationResults />
{/if}
