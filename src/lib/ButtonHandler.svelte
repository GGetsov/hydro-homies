<script lang="ts">
	export let label: string;
	export let id: string;
</script>

<div class="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 p-1 pl-4">
	<slot />
	<label
		for={id}
		class="inline-flex w-full cursor-pointer rounded-md bg-blue-50 p-2 text-blue-500 peer-checked:hidden"
	>
		<div class="block">
			<div
				class="w-full bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-lg font-semibold text-transparent peer-checked/radio:bg-blue-50"
			>
				{label}
			</div>
		</div>
	</label>
	<div class="hidden peer-checked:block">
		<label
			for={id}
			class="inline-flex w-full cursor-pointer rounded-md bg-blue-50 bg-clip-text p-2 text-lg font-semibold text-transparent"
			>{label}
		</label>
	</div>
</div>
