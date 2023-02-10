<script lang="ts">
	import {
		Tab,
		TabGroup,
		TabList,
		TabPanel,
		TabPanels,
	} from '@rgossiaux/svelte-headlessui';
	import CodeForm from './CodeForm.svelte';
	import UrlForm from './UrlForm.svelte';
</script>

<TabGroup>
	<TabList class="tabs">
		<Tab class={({ selected }) => (selected ? 'tab tab--active' : 'tab')}>
			URL
		</Tab>
		<Tab class={({ selected }) => (selected ? 'tab tab--active' : 'tab')}>
			Code
		</Tab>
	</TabList>
	<TabPanels class="panel">
		<TabPanel>
			<UrlForm />
		</TabPanel>
		<TabPanel>
			<CodeForm />
		</TabPanel>
	</TabPanels>
</TabGroup>
