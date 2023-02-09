<script>
	import { Router, Route } from 'svelte-navigator';
	import Footer from './components/Footer.svelte';
	import Navbar from './components/Navbar.svelte';
	import AccessibilityEvaluation from './views/AccessibilityEvaluation.svelte';
	import ContrastEvaluation from './views/ContrastEvaluation.svelte';
	import Home from './views/Home.svelte';
</script>

<div class="layout">
	<Router>
		<Navbar />
		<main class="container">
			<Route path="/">
				<Home />
			</Route>
			<Route path="/evaluation">
				<AccessibilityEvaluation />
			</Route>
			<Route path="contrast">
				<ContrastEvaluation />
			</Route>
		</main>
		<Footer />
	</Router>
</div>

<style lang="scss">
	.layout {
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 100vh;
	}
</style>
