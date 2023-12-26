<script lang="ts">
	export let title: string;
	export let options: string[];
	export let max: number;

	import Box from '$lib/Box.svelte';
	import PromptTitle from '$lib/PromptTitle.svelte';

	interface OptionTracker {
		[key: string]: boolean;
	}

	let selectedOptions: string[] = [];
	let checked: OptionTracker = {};

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
				<div class="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 p-1 pl-4">
					<input
						type="checkbox"
						name="options"
						value={option}
						id="option{index}"
						on:input={handleInput}
						bind:checked={checked[option]}
						class="peer hidden"
					/>
					<label
						for="option{index}"
						class="inline-flex w-full cursor-pointer rounded-md bg-blue-50 p-2 text-blue-500 peer-checked:hidden"
					>
						<div class="block">
							<div
								class="w-full bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-lg font-semibold text-transparent peer-checked/radio:bg-blue-50"
							>
								{option}
							</div>
						</div>
					</label>
					<div class="hidden peer-checked:block">
						<label
							for="option{index}"
							class="inline-flex w-full cursor-pointer rounded-md bg-blue-50 bg-clip-text p-2 text-lg font-semibold text-transparent"
							>{option}
						</label>
					</div>
				</div>
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
