<script lang="ts">
	export let title: string;
	export let options: string[];
	export let max: number;

	import Box from '$lib/Box.svelte';
	import PromptTitle from '$lib/PromptTitle.svelte';
	import ButtonHandler from './ButtonHandler.svelte';

	interface OptionTracker {
		[key: string]: boolean;
	}

	export let selectedOptions: string[] = [];
	export let checked: OptionTracker = {};

	function handleInput(event: any) {
		const value = event.target.value;
		if (event.target.checked) {
			if (selectedOptions.length === max) {
				//const last: string = selectedOptions.pop()!; // removes last selected
				const last: string = selectedOptions.shift()!; // removes first selected
				delete checked[last];
			}
			selectedOptions.push(value);
		} else {
			selectedOptions = selectedOptions.filter((option) => option !== value);
		}
	}
</script>

<Box>
	<PromptTitle {title} />
	<ul class="space-y-2 p-2">
		{#each options as option, index}
			<li>
				<ButtonHandler id="option {index}" label={option}>
					<input
						type="checkbox"
						name="options"
						value={option}
						id="option {index}"
						on:input={handleInput}
						bind:checked={checked[option]}
						class="peer hidden"
					/>
				</ButtonHandler>
			</li>
		{/each}
	</ul>
	<style>
		.option {
			display: flex;
			align-items: center;
		}
		input {
			margin: 0 0.3rem 0 0;
		}
		input:disabled + :global(label) {
			color: lightgrey;
		}
		label {
			user-select: none;
		}
	</style>
</Box>
