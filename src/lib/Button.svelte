<script lang="ts">
	export let label: string;
	export let id: string;
	export let name: string;
</script>

<div class="bg-gradient-to-r from-cyan-500 to-blue-500 pl-4 rounded-lg p-1">
	<input type="radio" {id} {name} class="hidden peer" required />
	<label
		for={id}
		class="inline-flex w-full p-2 text-blue-500 bg-blue-50 rounded-md cursor-pointer peer-checked:hidden"
	>
		<div class="block">
			<div
				class="w-full text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 peer-checked/radio:bg-blue-50"
			>
				{label}
			</div>
		</div>
	</label>
	<div class="hidden peer-checked:block">
		<label
			for={id}
			class="inline-flex w-full p-2 bg-blue-50 rounded-md cursor-pointer text-lg font-semibold text-transparent bg-clip-text"
			>{label}
		</label>
	</div>
</div>
