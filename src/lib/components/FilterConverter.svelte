<script lang="ts">
	import { rgbToHsl } from '@jonibach/convert';
	import { onMount } from 'svelte';

	export let converter: any;
	export let defaultValue: any;
	export let from: string;
	export let to: string;
	export let readOnly: boolean;
	export let title: string;

	export let data: any[];

	let loading = true;

	let conversionFunction;

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

	$: convertedValue = !loading && !!conversionFunction && conversionFunction(data, value);

	$: displayValue = convertedValue && formatForDisplay(data);
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
	<div />
{:else}
	<div class="display">
		<input class="from" bind:value />
		<div class="break">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
				/>
			</svg>
		</div>
		<div class="to">{displayConvertedValue}</div>
	</div>

	<div class="implamentation">
		<p>const {from} = {displayValue}</p>
		<p>const searchString = {value}</p>
		<p>const {to} = {title}(searchString, {from})</p>
		<p>console.log({to}) // {displayConvertedValue}</p>
	</div>
{/if}

<style>
	.break {
		width: 20px;
		height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		height: auto;
		padding: 5px;
	}
	.display {
		display: flex;
	}

	.from {
		padding: 10px;
	}

	.to {
		padding: 10px;
	}
	.implamentation {
		padding: 10px;
		border: 1px solid #ccc;
		margin-top: 10px;
	}
</style>
