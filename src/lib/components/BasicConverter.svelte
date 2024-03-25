<script lang="ts">
	import { onMount } from 'svelte';

	export let converter: any;
	export let defaultValue: any;
	export let from: string;
	export let to: string;

	let loading = true;

	let conversionFunction;

	let value = defaultValue;
	$: convertedValue = !loading && !!conversionFunction && conversionFunction(value);
	// {typeof converter(value)}

	onMount(() => {
		loading = false;
		conversionFunction = converter;
	});
</script>

<input bind:value />
{from} = {convertedValue}
{to}
