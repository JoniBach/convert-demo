<script lang="ts">
	import { rgbToHsl } from '@jonibach/convert';
	import { onMount } from 'svelte';

    export let type: string
    export let readOnly: boolean
    export let title: string
    export let converter: any
    export let from: string
    export let to: string
    export let value1: any
    export let value2: any

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

	$: convertedValue = !loading && !!conversionFunction && conversionFunction(value1, value2);

	onMount(() => {
		loading = false;
		conversionFunction = converter;
	});
</script>

{#if loading}
	<p>Loading...</p>
{:else }
	<!-- <div class="display">
		
	</div> -->
	<div class="implamentation">
		<p>const {from} = {value1}</p>
		<p>const {to} = {title}({from}, {value2})</p>
		<p>console.log({to}) // {convertedValue}</p>
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
