import AccessibilityEvaluation from './views/AccessibilityEvaluation.svelte';
import ContrastEvaluation from './views/ContrastEvaluation.svelte';
import Home from './views/Home.svelte';
import MainLayout from './views/MainLayout.svelte';

const routes = [
	{
		name: '/',
		component: Home,
		layout: MainLayout,
	},
	{
		name: 'evaluation',
		component: AccessibilityEvaluation,
		layout: MainLayout,
	},
	{
		name: 'contrast',
		component: ContrastEvaluation,
		layout: MainLayout,
	},
];

export { routes };
