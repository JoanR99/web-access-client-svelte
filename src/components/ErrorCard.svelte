<div class="error-card"><slot /></div>

<style lang="scss">
	@import '../theme';
	.error-card {
		border: 1px solid $color-action-dark;
		color: $color-action-dark;
		border-radius: 1rem;
		margin-top: 1rem;
		padding: 1rem;
	}
</style>
