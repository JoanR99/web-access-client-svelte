<script lang="ts">
	import { Navigate, routeIsActive } from 'svelte-router-spa';
</script>

<header class="header">
	<nav class="navbar container">
		<Navigate to="/"><span class="main-logo">WEBACCESS</span></Navigate>
		<ul class="navbar__list">
			<li class="navbar__item">
				<Navigate to="evaluation"
					><span class="navbar__link" class:active={routeIsActive('evaluation')}
						>Evaluation</span
					></Navigate
				>
			</li>
			<li class="navbar__item">
				<Navigate to="contrast"
					><span class="navbar__link" class:active={routeIsActive('contrast')}
						>Contrast</span
					></Navigate
				>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	@import '../theme';

	.header {
		height: 6rem;
		display: flex;
		align-items: center;
	}

	.navbar {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 100;

		&__list {
			display: flex;
			list-style: none;
			column-gap: 2rem;
		}

		&__link {
			font-family: $font-heading;
			font-size: 1.6rem;
			text-decoration: none;
			color: $color-black;
			transition: all 0.2s;

			&:hover {
				color: $color-action;
			}
		}
	}

	.main-logo {
		font-family: $font-heading;
		font-size: 2.4rem;
		color: $color-primary;
		font-weight: 900;
		text-decoration: none;
	}

	:global(.active) {
		color: $color-action;
	}
</style>
