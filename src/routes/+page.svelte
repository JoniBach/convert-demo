<script lang="ts">
	import { onMount } from 'svelte';

	import Collection from '$lib/components/Collection.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import BasicConverter from '$lib/components/BasicConverter.svelte';
	import data from './data';

	import { isEqualTo } from '@jonibach/convert';
	import ConditionConverter from '$lib/components/ConditionConverter.svelte';

	let elements = [];
	let screenSize = 400;

	function handleScroll() {
		let currentSection = '';
		elements.forEach((section) => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.clientHeight;
			if (pageYOffset >= sectionTop - sectionHeight / 3) {
				currentSection = section.id;
			}
		});
		if (currentSection) {
			const url = new URL(window.location);
			url.searchParams.set('top', currentSection);
			window.history.pushState({}, '', url);
		}
	}

	// Check screen width on component mount and on window resize
	function checkScreenSize() {
		const innerWidth = window?.innerWidth;
		if (innerWidth <= 600) {
			screenSize = 200;
		} else if (innerWidth <= 900) {
			screenSize = 400;
		} else {
			screenSize = 600;
		}
	}

	onMount(() => {
		checkScreenSize();
		elements = document.querySelectorAll('.scroll-section');
		window.addEventListener('resize', checkScreenSize);
		window.addEventListener('scroll', handleScroll);
	});

	$: console.log('hsl', isEqualTo(5, '5'));
</script>

<body style="margin: 0;">
	<div class="page">
		<Menu {data} />
		<div class="page-content">
			<h1 class="page-title">
				<a href="https://www.npmjs.com/package/@jonibach/convert" target="_blank">
					npm i @jonibach/convert
				</a>
			</h1>

			{#each data as category}
				<Collection title={category.title}>
					{#each category.items as item}
						<div>
							<h3 id="{item.title}-title">{item.title}</h3>
							{#if item.type === 'check'}
							<ConditionConverter
								type={item.type}
								readOnly={item.readOnly}
								title={item.title}
								converter={item.converter}
								from={item.from}
								to={item.to}
								value1={item.value1}
								value2={item.value2}
							/>

							{:else}
							<BasicConverter 
							readOnly={item.readOnly}
							defaultValue={item?.defaultValue}
							converter={item.converter}
							from={item.from}
							to={item.to}
							title={item.title}
							/>
								{/if}
						</div>
					{/each}
				</Collection>
			{/each}
		</div>
	</div></body
>

<style>
	.page {
		display: flex;
	}

	.page-title {
		margin: 0;
		padding: 10px;
		background-color: #aaa;
	}

	.page-content {
		flex: 1;
	}
</style>
