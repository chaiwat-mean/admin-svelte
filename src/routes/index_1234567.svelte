<script>
// @ts-nocheck
	
	import UserLogs from './../lib/components/home/UserLogs.svelte';
	import TodoList from '$lib/components/home/TodoList.svelte';
	import TransactionList from '$lib/components/home/TransactionList.svelte';
	import Sumcomponet from './../lib/components/home/Sumcomponet.svelte';
	import { table } from '../lib/store';

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="" />
	<script src="../main.js"></script>
</svelte:head>

<section>
	<div class="flex flex-wrap -mx-4 -mb-4 md:mb-0">
		<div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
			<Sumcomponet />
			<TransactionList />
			<TodoList />
		</div>
		<div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
			<UserLogs selectdata={$table} />
		</div>

	</div>
</section>

<style>
</style>
