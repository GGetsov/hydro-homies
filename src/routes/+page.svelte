<script>
	import Button from '$lib/Button.svelte';
	import Title from '$lib/Title.svelte';
	import Box from '$lib/Box.svelte';
	import PromptTitle from '$lib/PromptTitle.svelte';
</script>

<body class="bg-gradient-to-r from-cyan-500 to-blue-500">
	<Title />
	<Box>
		<PromptTitle title="Степен на дехидратация" />
		<ul class="p-2 space-y-2">
			<li>
				<Button label="Ниска" id="low" name="stepen" />
			</li>
			<li>
				<Button label="Средна" id="middle" name="stepen" />
			</li>
			<li>
				<Button label="Висока" id="high" name="stepen" />
			</li>
		</ul>
	</Box>
	<Box>
		<PromptTitle title="Тегло" />
		<div class="bg-gradient-to-r from-cyan-500 to-blue-500 pl-4 rounded-lg p-1">
			<div class="flex flex-row bg-blue-50 rounded-md">
				<input
					type="number"
					min="0"
					class="inline-flex w-full p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md cursor-pointer text-lg font-semibold text-transparent bg-clip-text focus:outline-none [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none caret-blue-500"
				/>
				<label
					class="inline-flex p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md cursor-pointer text-lg font-semibold text-transparent bg-clip-text"
					>кг</label
				>
			</div>
		</div></Box
	>
</body>

<style lang="postcss"></style>
