<script lang="ts">
	import { Link, useLocation } from 'svelte-navigator';
	let location = useLocation();

	$: isEvaluation = $location.pathname == '/evaluation';
	$: isContrast = $location.pathname == '/contrast';

	function isRef(ref) {
		if (ref) return 'navbar__link active';
		else return 'navbar__link';
	}
</script>

<header class="header">
	<nav class="navbar container">
		<Link to="/"><span class="main-logo">WEBACCESS</span></Link>
		<ul class="navbar__list">
			<li class="navbar__item">
				<Link to="evaluation"
					><span class={isRef(isEvaluation)}>Evaluation</span></Link
				>
			</li>
			<li class="navbar__item">
				<Link to="contrast"
					><span class={isRef(isContrast)}>Contrast</span></Link
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

	.active {
		color: $color-action;
	}
</style>
