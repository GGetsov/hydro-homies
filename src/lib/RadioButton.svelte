<script lang="ts">
	export let label: string;
	export let id: string;
	export let name: string;
	export let value: string | number;
	export let group: string | number;
	export let required: boolean;

	import ButtonHandler from './ButtonHandler.svelte';
</script>

<ButtonHandler {label} {id}>
	<input type="radio" {id} {name} {value} bind:group {required} class="peer hidden" />
</ButtonHandler>
