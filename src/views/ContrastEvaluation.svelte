<script lang="ts">
	import ColorInputs from '../components/ColorInputs.svelte';
	import ExamplePanel from '../components/ExamplePanel.svelte';
	import StatusPanel from '../components/StatusPanel.svelte';
</script>

<div class="contrast-page">
	<ExamplePanel />
	<StatusPanel />
	<ColorInputs />
</div>

<style lang="scss">
	.contrast-page {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
