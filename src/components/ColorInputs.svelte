<script lang="ts">
	import textColorStore from '../stores/textColor.store';
	import backgroundColorStore from '../stores/backgroundColor.store';
</script>

<section class="color-inputs">
	<div class="color-picker">
		<label for="text-color">Text Color</label>
		<input type="color" bind:value={$textColorStore} id="text-color" />
	</div>

	<div class="color-picker">
		<label for="background-color">Background Color</label>
		<input
			type="color"
			bind:value={$backgroundColorStore}
			id="background-color"
		/>
	</div>
</section>

<style lang="scss">
	.color-inputs {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		margin-top: 2rem;
		width: 80%;
	}
	.color-picker {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
