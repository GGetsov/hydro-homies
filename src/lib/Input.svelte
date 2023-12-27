<script lang="ts">
	export let label: string;
	export let id: string;
	export let value: number | undefined;
</script>

<div class="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 p-1 pl-4">
	<div class="flex flex-row rounded-md bg-blue-50">
		<input
			type="number"
			{id}
			min="0"
			step="0.01"
			bind:value
			required
			class="inline-flex w-full cursor-pointer rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text p-2 text-lg font-semibold text-transparent caret-blue-500 arrow-hide focus:outline-none"
		/>
		<label
			for={id}
			class="inline-flex cursor-pointer rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text p-2 text-lg font-semibold text-transparent"
			>{label}</label
		>
	</div>
</div>
