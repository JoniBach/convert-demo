<script>
	import { onMount } from 'svelte';

	export let data;

	let search = ''

	$: filteredData = data.filter(category => {
		const items = category.items.filter(graph => {
			return graph.title.toLowerCase().includes(search.toLowerCase());
		});
		return items.length > 0 ? { ...category, items } : null;
	}).filter(Boolean);
	let isSmallScreen = false;


	function navigateToElement(elementId) {
		const element = document.getElementById(elementId + '-title');
		console.log(elementId, element);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}

	// Check screen width on component mount and on window resize
	function checkScreenSize() {
		isSmallScreen = window.innerWidth <= 600;
	}

	onMount(() => {
		window.addEventListener('resize', checkScreenSize);
		checkScreenSize();
	});
</script>

<div class="sidebar {isSmallScreen ? 'hidden' : ''}">
	<div class="sidebar-content">
		<input type="text" placeholder="Search" class='search' bind:value={search} />
		{#each filteredData as category}
			<div class="category title" on:click={() => navigateToElement(category.title)}>
				{category.title}
			</div>
			{#each category.items as graph}
				<div class="item" on:click={() => navigateToElement(graph.title)}>
					{graph.title}
				</div>
			{/each}
		{/each}
	</div>
</div>

<style>
	.sidebar {
		width: 200px;
		background-color: #f0f0f0;
		position: relative;
	}

	.sidebar-content {
		overflow-y: scroll;
		max-height: 100vh;

		position: sticky;
		top: 0;
	}

	.category {
		font-weight: bold;
		margin-bottom: 5px;
		cursor: pointer;
		background-color: #ccc;
		padding: 5px;
	}

	.item {
		cursor: pointer;
		margin-left: 20px;
		margin-bottom: 5px;
	}

	.sidebar-content::-webkit-scrollbar {
		display: none;
	}

	.hidden {
		display: none;
	}

	@media (max-width: 600px) {
		.sidebar {
			display: none;
		}
	}

	.title {
		position: sticky;
		top: 0;
		margin: 0;
		z-index: 2;
	}
	.search {
		padding: 10px;
		width: 100%;
		box-sizing: border-box;

		border: 1px solid #aaa;
		background-color: #aaa;
		
		
	}
</style>
