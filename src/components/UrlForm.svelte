<script lang="ts">
	import Spinner from './Spinner.svelte';
	import ErrorCard from './ErrorCard.svelte';
	import isLoadingStore from '../stores/isLoading.store';
	import errorStore from '../stores/error.store';
	import resultsStore from '../stores/results.store';
	import { evaluateByUrl } from '../api';

	let url: string;

	async function submitHandler() {
		$isLoadingStore = true;
		$errorStore = '';

		try {
			const results = await evaluateByUrl({ url });
			$resultsStore = results;
			$isLoadingStore = false;
		} catch (e) {
			console.log(e);
			$errorStore = e.message;
			$isLoadingStore = false;
		}
	}
</script>

<form on:submit|preventDefault={submitHandler} class="form">
	{#if $isLoadingStore}
		<Spinner />
	{:else}
		<div class="form-group">
			<label for="url">URL</label>
			<input
				type="url"
				name="url"
				id="url"
				bind:value={url}
				placeholder="https://www.example.com"
				required
			/>
			{#if $errorStore}
				<ErrorCard>{$errorStore}</ErrorCard>
			{/if}
		</div>

		<button type="submit" class="btn" disabled={$isLoadingStore}>
			Evaluate
		</button>
	{/if}
</form>
