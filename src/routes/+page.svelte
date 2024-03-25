<script lang="ts">
	import { onMount } from 'svelte';

	import Collection from '$lib/components/Collection.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import BasicConverter from '$lib/components/BasicConverter.svelte';
	import data from './data';
	import { rgbToHex } from '@jonibach/convert';

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

	$: console.log('hsl', rgbToHex({ r: 255, g: 255, b: 255 }));
</script>

<body style="margin: 0;">
	<div class="page">
		<Menu {data} />
		<div class="page-content">
			<h1 class="page-title">npm i @jonibach/convert</h1>

			{#each data as category}
				<Collection title={category.title}>
					{#each category.items as item}
						<div>
							<h3 id="{item.title}-title">{item.title}</h3>
							<BasicConverter
								readOnly={item.readOnly}
								defaultValue={item.defaultValue}
								converter={item.converter}
								from={item.from}
								to={item.to}
							/>
							<p class="implamentation">const {item.to} = {item.title}({item.from})</p>
						</div>
					{/each}
				</Collection>
			{/each}
		</div>
	</div></body
>

<style>
	.implamentation {
		padding: 10px;
		border: 1px solid #ccc;
	}
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
