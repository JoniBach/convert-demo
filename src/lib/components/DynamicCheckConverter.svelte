<script lang="ts">
	import {
		checkCondition,
		checkConditions,
		filterByObjectCondition,
		filterByObjectConditions,
		operationList,
		rgbToHsl
	} from '@jonibach/convert';
	import { onMount } from 'svelte';

	let loading = true;
	let value = '';

	let options = operationList;

	let selected: any = options[0];

	let fromValue = '';
	let toValue = '';

	let fromValue2 = '';
	let toValue2 = '';
	let selected2: any = options[0];

	const sampleData = [
		{ id: 1, category: 'fruit', name: 'Apple' },
		{ id: 2, category: 'vegetable', name: 'Carrot' },
		{ id: 3, category: 'fruit', name: 'Banana' },
		{ id: 4, category: 'fruit', name: 'Cherry' }
	];

	// $: conversionFunction = selected?.function;
	// $: conversionFunction = checkCondition;

	$: conversionArray = [fromValue, selected.operation, toValue];
	$: conversionArrays = [conversionArray, [fromValue2, selected2.operation, toValue2]];

	// $: convertedValue = !loading && !!conversionFunction && conversionFunction(conversionArray);

	// $: conversionArrayDisplay = JSON.stringify(conversionArray, null, 2);

	const formatForDisplay = (value) => {
		return JSON.stringify(value, null, 2);
		return value;
	};

	onMount(() => {
		loading = false;
	});
	$: console.log(selected);
</script>

{#if loading}
	<p>Loading...</p>
{:else}
	<div>
		<h3 class="page-title">checkCondition</h3>
		<div class="display">
			<input class="from" bind:value={fromValue} />
			<select bind:value={selected}>
				{#each options as question}
					<option value={question}>
						{question.operation}
					</option>
				{/each}
			</select>
			<input class="to" bind:value={toValue} />
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
			<p>{formatForDisplay(checkCondition(conversionArray))}</p>
		</div>
		<div class="implamentation">
			<p>const query = {formatForDisplay(conversionArray)}</p>
			<p>
				const matches = checkCondition(query) // {formatForDisplay(checkCondition(conversionArray))}
			</p>
		</div>
	</div>

	<!--  -->

	<h3 class="page-title">checkConditions</h3>
	<div class="display">
		<input class="from" bind:value={fromValue} />
		<select bind:value={selected}>
			{#each options as question}
				<option value={question}>
					{question.operation}
				</option>
			{/each}
		</select>
		<input class="to" bind:value={toValue} />
	</div>
	<div class="display">
		<input class="from" bind:value={fromValue2} />
		<select bind:value={selected2}>
			{#each options as question}
				<option value={question}>
					{question.operation}
				</option>
			{/each}
		</select>
		<input class="to" bind:value={toValue2} />
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
		<p>{formatForDisplay(checkConditions(conversionArrays))}</p>
	</div>
	<div class="implamentation">
		<p>const query = {formatForDisplay(conversionArrays)} // etc</p>
		<p>
			const matches = checkConditions(query) // {formatForDisplay(
				checkConditions(conversionArrays)
			)}
		</p>
	</div>

	<!-- x  -->

	<div>
		<h3 class="page-title">filterArrayByString</h3>
		<div class="display">
			<input class="from" bind:value={fromValue} placeholder="enter key" />
			<select bind:value={selected}>
				{#each options as question}
					<option value={question}>
						{question.operation}
					</option>
				{/each}
			</select>
			<input class="to" bind:value={toValue} placeholder="enter value" />
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
			<p>{formatForDisplay(filterByObjectCondition(sampleData, conversionArray))}</p>
		</div>
		<div class="implamentation">
			<p>const query = {formatForDisplay(sampleData, conversionArray)}</p>
			<p>
				const matches = filterByObjectCondition(query) // {formatForDisplay(
					filterByObjectCondition(sampleData, conversionArray)
				)}
			</p>
		</div>
	</div>

	<!--  -->

	<h3 class="page-title">filterByObjectConditions</h3>
	<div class="display">
		<input class="from" bind:value={fromValue} placeholder="enter key" />
		<select bind:value={selected}>
			{#each options as question}
				<option value={question}>
					{question.operation}
				</option>
			{/each}
		</select>
		<input class="to" bind:value={toValue} placeholder="enter value" />
	</div>
	<div class="display">
		<input class="from" bind:value={fromValue2} placeholder="enter key" />
		<select bind:value={selected2}>
			{#each options as question}
				<option value={question}>
					{question.operation}
				</option>
			{/each}
		</select>
		<input class="to" bind:value={toValue2} placeholder="enter value" />
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
		<p>{formatForDisplay(filterByObjectConditions(sampleData, conversionArrays))}</p>
	</div>
	<div class="implamentation">
		<p>const query = {formatForDisplay(sampleData, conversionArrays)} // etc</p>
		<p>
			const matches = filterByObjectConditions(query) // {formatForDisplay(
				filterByObjectConditions(sampleData, conversionArrays)
			)}
		</p>
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
	.title {
		margin: 0;
		padding: 10px;
		background-color: #aaa;
	}
</style>
