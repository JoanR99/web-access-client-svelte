<script lang="ts">
	import Spinner from './Spinner.svelte';
	import ErrorCard from './ErrorCard.svelte';
	import isLoadingStore from '../stores/isLoading.store';
	import resultsStore from '../stores/results.store';
	import errorStore from '../stores/error.store';
	import { evaluateByCode } from '../api';

	let code: string;

	async function submitHandler() {
		$isLoadingStore = true;
		$errorStore = '';

		try {
			const results = await evaluateByCode({ code });
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
			<label for="code">Code</label>
			<textarea
				rows={5}
				name="code"
				id="code"
				bind:value={code}
				placeholder="<html> </html>"
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
