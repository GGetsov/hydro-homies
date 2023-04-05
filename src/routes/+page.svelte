<script>
	import Button from '$lib/Button.svelte';
	import Title from '$lib/Title.svelte';
	import Box from '$lib/Box.svelte';
	import PromptTitle from '$lib/PromptTitle.svelte';
	import Input from '$lib/Input.svelte';
</script>

<body class="bg-gradient-to-r from-cyan-500 to-blue-500">
	<Title />
	<Box>
		<PromptTitle title="Степен на дехидратация" />
		<ul class="space-y-2 p-2">
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
		<Input />
	</Box>
</body>

<style lang="postcss"></style>
