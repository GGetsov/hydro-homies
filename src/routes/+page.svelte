<script>
	import Button from './Button.svelte';
</script>

<body class="bg-gradient-to-r from-cyan-500 to-blue-500">
	<div class="bg-blue-50 flex justify-left p-2 border-4 rounded-b-lg border-blue-50 border-t-0">
		<h1
			class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"
		>
			Hydro homies
		</h1>
	</div>
	<br />
	<div class="border-4 mx-auto rounded-lg border-blue-50 max-w-xl bg-blue-50 p-2">
		<h2
			class="flex justify-center p-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"
		>
			Степен на дехидратация
		</h2>
		<ul class="p-2 space-y-2">
			<li>
				<Button label="Ниска" id="low" />
			</li>
			<li>
				<Button label="Средна" id="middle" />
			</li>
			<li>
				<Button label="Висока" id="high" />
			</li>
		</ul>
	</div>
</body>

<style lang="postcss"></style>
