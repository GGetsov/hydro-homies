<script lang="ts">
	export let label: string;
	export let id: string;
	export let gradient: string = 'from-cyan-500 to-blue-500';

	$: nonPressedDivClass = `rounded-lg bg-gradient-to-r ${gradient} p-1 pl-4`;
	$: pressedDivClass = `w-full bg-gradient-to-r ${gradient} bg-clip-text text-lg font-semibold text-transparent peer-checked/radio:bg-blue-50`;
</script>

<div class={nonPressedDivClass}>
	<slot />
	<label
		for={id}
		class="inline-flex w-full cursor-pointer rounded-md bg-blue-50 p-2 peer-checked:hidden"
	>
		<div class="block">
			<div class={pressedDivClass}>
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
