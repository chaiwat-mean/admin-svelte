<script>
    import { dashboard_com4 } from "$lib/store";
</script>

<table class="table-auto w-full">
    <tbody>
        {#each $dashboard_com4.user_logs_table.data as item }

        <tr class="border-b border-blue-50">
            <td class="flex items-center py-4 px-6 font-medium">
                <div class="flex px-4 py-3">
                    <img
                        class="w-8 h-8 mr-4 object-cover rounded-md"
                        src="https://images.unsplash.com/photo-1559893088-c0787ebfc084?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                        alt=""
                    />
                    <div>
                        <p class="text-sm font-medium">{item.name}</p>
                        <p class="text-xs text-gray-500">...</p>
                    </div>
                </div>
            </td>
            <td class="font-medium">
                <p class="text-sm">{item.datetime}</p>
            </td>
            <td class="pr-6">
                <div class="flex">
                    <p class="text-sm">Detail {item.detail}</p>
                </div>
            </td>
        </tr>
        {/each}
    </tbody>
</table>