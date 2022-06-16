<script>
import { table } from "$lib/store";
import TableMenu from "./TableMenu.svelte";
import TableUserLogs from "./TableUserLogs.svelte";

    
</script>

<section class="py-8">
	<div class="container px-4 mx-auto">
		<div class="pt-4 bg-white shadow rounded">
			<div class="px-6 border-b border-blue-50">
			
				<div>

					<button
                    on:click="{() => table.set("logs")}"
                    class="{$table === 'logs' ? 'inline-block px-4 pb-2 text-sm font-medium text-indigo-500 border-b-2 border-indigo-500' : 'inline-block px-4 pb-2 text-sm font-medium text-gray-300 border-b-2 border-transparent hover:border-gray-300'}"
						>Logs from users</button
					><button
                    on:click="{() => table.set("menu1")}"
                    class="{$table === 'menu1' ? 'inline-block px-4 pb-2 text-sm font-medium text-indigo-500 border-b-2 border-indigo-500' : 'inline-block px-4 pb-2 text-sm font-medium text-gray-300 border-b-2 border-transparent hover:border-gray-300'}"
						>menu</button>
					<button
                    on:click="{() => table.set("menu2")}"
                    class="{$table === 'menu2' ? 'inline-block px-4 pb-2 text-sm font-medium text-indigo-500 border-b-2 border-indigo-500' : 'inline-block px-4 pb-2 text-sm font-medium text-gray-300 border-b-2 border-transparent hover:border-gray-300'}"
						>menu</button
					>
				</div>
			</div>
			<div class="overflow-x-auto">
				<!-- <TableUserLogs/> -->
                <!-- svelte-ignore empty-block -->
                {#if $table == "logs"}
                    <TableUserLogs/>
                {/if}
                {#if $table == "menu1"}
                    <TableMenu/>
                {/if}
                {#if $table == "menu2"}
                    <TableMenu/>
                {/if}
				<div class="py-4 text-center">
					<a
						class="inline-flex items-center text-xs text-indigo-500 hover:text-blue-600 font-medium"
						href="/"
					>
						<span class="mr-1">
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M3.99984 8.66669H1.33317C1.15636 8.66669 0.98679 8.73692 0.861766 8.86195C0.736742 8.98697 0.666504 9.15654 0.666504 9.33335V14.6667C0.666504 14.8435 0.736742 15.0131 0.861766 15.1381C0.98679 15.2631 1.15636 15.3334 1.33317 15.3334H3.99984C4.17665 15.3334 4.34622 15.2631 4.47124 15.1381C4.59627 15.0131 4.6665 14.8435 4.6665 14.6667V9.33335C4.6665 9.15654 4.59627 8.98697 4.47124 8.86195C4.34622 8.73692 4.17665 8.66669 3.99984 8.66669ZM3.33317 14H1.99984V10H3.33317V14ZM14.6665 6.00002H11.9998C11.823 6.00002 11.6535 6.07026 11.5284 6.19528C11.4034 6.32031 11.3332 6.48988 11.3332 6.66669V14.6667C11.3332 14.8435 11.4034 15.0131 11.5284 15.1381C11.6535 15.2631 11.823 15.3334 11.9998 15.3334H14.6665C14.8433 15.3334 15.0129 15.2631 15.1379 15.1381C15.2629 15.0131 15.3332 14.8435 15.3332 14.6667V6.66669C15.3332 6.48988 15.2629 6.32031 15.1379 6.19528C15.0129 6.07026 14.8433 6.00002 14.6665 6.00002ZM13.9998 14H12.6665V7.33335H13.9998V14ZM9.33317 0.666687H6.6665C6.48969 0.666687 6.32012 0.736925 6.1951 0.861949C6.07007 0.986973 5.99984 1.15654 5.99984 1.33335V14.6667C5.99984 14.8435 6.07007 15.0131 6.1951 15.1381C6.32012 15.2631 6.48969 15.3334 6.6665 15.3334H9.33317C9.50998 15.3334 9.67955 15.2631 9.80457 15.1381C9.9296 15.0131 9.99984 14.8435 9.99984 14.6667V1.33335C9.99984 1.15654 9.9296 0.986973 9.80457 0.861949C9.67955 0.736925 9.50998 0.666687 9.33317 0.666687ZM8.6665 14H7.33317V2.00002H8.6665V14Z"
									fill="#8880EB"
								/>
							</svg>
						</span>
						<span>See more</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
