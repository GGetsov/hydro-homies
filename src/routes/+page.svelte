<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Title from '$lib/Title.svelte';
	import Box from '$lib/Box.svelte';
	import PromptTitle from '$lib/PromptTitle.svelte';
	import Input from '$lib/Input.svelte';
	import LimitedChecbox from '$lib/LimitedChecbox.svelte';

	const dhLevels = [
		{ id: 'low', label: 'Ниска' },
		{ id: 'middle', label: 'Средна' },
		{ id: 'high', label: 'Висока' }
	];

	type FormValues = {
		hdLevel: number;
		newborn?: number | undefined;
		mass?: number;
	};

	let formValues: FormValues = {
		hdLevel: 0
	};

	function onSubmit() {
		let dhName = ['niska', 'sredna', 'visoka'][formValues.hdLevel];
		alert(`submitted hdLevel: ${dhName}`);
	}
</script>

<body class="bg-gradient-to-r from-cyan-500 to-blue-500">
	<Title />
	<form id="form" on:submit|preventDefault={onSubmit}>
		<Box>
			<PromptTitle title="Степен на дехидратация" />
			<ul class="space-y-2 p-2">
				{#each dhLevels as { id, label }, index}
					<li>
						<Button {label} {id} name="level" value={index} bind:group={formValues.hdLevel} />
					</li>
				{/each}
			</ul>
		</Box>
		<LimitedChecbox title="Новородено" options={['Доносено', 'Недоносено']} max={1} />
		<Box>
			<PromptTitle title="Тегло" />
			<Input />
		</Box>
	</form>
	<button form="form">Submit</button>
</body>
