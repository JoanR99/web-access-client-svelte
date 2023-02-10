import { writable } from 'svelte/store';
import type { Results } from '../schemas';

const resultsStore = writable<Results | null>(null);

export default resultsStore;
