import { writable } from 'svelte/store';

const errorStore = writable('');

export default errorStore;
