import { writable } from 'svelte/store';

const isLoadingStore = writable(false);

export default isLoadingStore;
