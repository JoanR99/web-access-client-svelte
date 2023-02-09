<script>
	import { Route } from 'svelte-router-spa';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';

	export let currentRoute;
</script>

<div class="layout">
	<Navbar />
	<main class="container">
		<Route {currentRoute} />
	</main>
	<Footer />
</div>

<style lang="scss">
	.layout {
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 100vh;
	}
</style>
