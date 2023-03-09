<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<style>
	button {
        @apply bg-none border-b-2 border-solid border-white m-0 text-gray-400 px-4 py-1;
	}

	.selected {
        @apply border-b-2 border-solid border-gray-700 text-gray-700;
	}
</style>

<button class:selected="{$selectedTab === tab}" on:click="{() => selectTab(tab)}">
	<slot></slot>
</button>
