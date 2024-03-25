<script lang="ts">
	import { rgbToHsl } from '@jonibach/convert';
	import { onMount } from 'svelte';

	export let converter: any;
	export let defaultValue: any;
	export let from: string;
	export let to: string;
	export let readOnly: boolean;

	let loading = true;

	let conversionFunction;

	let typeOfDefaultValue = typeof defaultValue;

	const objectToString = (obj) => {
		return JSON.stringify(obj, null, 2);
	};

	const formatForDisplay = (value) => {
		if (typeof value === 'object') {
			return objectToString(value);
		}
		return value;
	};

	let value = defaultValue;

	$: convertedValue = !loading && !!conversionFunction && conversionFunction(value);

	$: displayValue = convertedValue && formatForDisplay(value);
	$: displayConvertedValue = convertedValue && formatForDisplay(convertedValue);

	// $: console.log(convertedValue, value);

	onMount(() => {
		loading = false;
		conversionFunction = converter;
	});
</script>

{#if loading}
	<p>Loading...</p>
{:else if readOnly}
	<div>
		{displayValue}
		{from} = {displayConvertedValue}
		{to}
	</div>
{:else}
	<div>
		<input bind:value />
		{from} = {convertedValue}
		{to}
	</div>
{/if}
