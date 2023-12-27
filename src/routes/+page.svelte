<script lang="ts">
	import Title from '$lib/Title.svelte';
	import Box from '$lib/Box.svelte';
	import PromptTitle from '$lib/PromptTitle.svelte';
	import Input from '$lib/Input.svelte';
	import LimitedChecbox from '$lib/LimitedChecbox.svelte';
	import RadioButton from '$lib/RadioButton.svelte';

	const dhLevels = [
		{ id: 'low', label: 'Ниска' },
		{ id: 'middle', label: 'Средна' },
		{ id: 'high', label: 'Висока' }
	];

	type FormValues = {
		hdLevel: number;
		newborn: string[];
		mass?: number;
	};

	let formValues: FormValues = {
		hdLevel: 0,
		newborn: []
	};

	function onSubmit() {
		let dhName = ['niska', 'sredna', 'visoka'][formValues.hdLevel];
		alert(`submitted hdLevel: ${dhName} ${formValues.newborn} ${formValues.mass}кг`);
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
						<RadioButton
							{label}
							{id}
							name="level"
							value={index}
							bind:group={formValues.hdLevel}
							required={true}
						/>
					</li>
				{/each}
			</ul>
		</Box>
		<LimitedChecbox
			title="Новородено"
			options={['Доносено', 'Недоносено']}
			max={1}
			bind:selectedOptions={formValues.newborn}
		/>
		<Box>
			<PromptTitle title="Тегло" />
			<Input label="кг" id="mass" bind:value={formValues.mass} />
		</Box>
	</form>
	<button form="form">Submit</button>
</body>
