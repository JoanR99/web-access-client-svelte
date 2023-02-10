<script lang="ts">
	export let name, element_count, error_count, successCriterion, description;
</script>

<article class="card">
	<div class="card-header">
		<h3>{name}</h3>
	</div>
	<div class="card-body">
		<div class="card-data">
			<span class="card-data-elements">
				{element_count}{' '}
				{`${element_count > 1 ? 'elements' : 'element'} evaluated`}
			</span>
			<span class="card-data-errors">
				{error_count}
				{`${error_count > 1 ? 'errors' : 'error'} found`}
			</span>
		</div>
		<div class="card-description">
			<h4>Description</h4>
			<p>{description}</p>
		</div>
		<div class="more-info">
			<h4>More Info</h4>
			<ul class="link-list">
				{#each successCriterion as criterion, i (i)}
					<li class="link-item">
						<a href={criterion.link} target="_blank" rel="noopener noreferrer">
							{criterion.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</article>

<style lang="scss">
	@import '../theme';

	.card {
		border-radius: 20px;
		width: 100%;
		overflow: hidden;
		background-color: #ffff;
		box-shadow: 0 0 20px 8px #d0d0d0;
		border-top: 3px solid $color-primary-dark;
		padding: 2rem;

		& a {
			text-decoration: none;
			color: $color-secondary;
		}

		&-header {
			color: $color-primary-dark;
		}

		&-data {
			display: flex;
			flex-wrap: wrap;
			gap: 1rem;
			margin-top: 1rem;

			&-elements {
				border: 2px solid yellow;
				border-radius: 10px;
				padding: 1rem;
			}

			&-errors {
				border: 2px solid $color-action;
				border-radius: 10px;
				padding: 1rem;
			}
		}

		&-description {
			margin-top: 2rem;
		}
	}

	.more-info {
		margin-top: 2rem;
	}

	.link-list {
		list-style: none;
	}
</style>
