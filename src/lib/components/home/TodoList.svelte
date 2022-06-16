<script>
    import { dashboard_com2 } from "$lib/store";
</script>
<section class="py-8">
    <div class="container px-4 mx-auto">
        <div class="pt-6 bg-white shadow rounded">
            <div class="px-6 border-b">
                <div class="flex flex-wrap items-center mb-6">
                    <h3 class="text-xl font-bold">Things to do Lists</h3>
                    <a
                        class="m-4 flex items-center py-2 px-3 text-xs text-white bg-blue-500 hover:bg-indigo-600 rounded"
                        href="/"
                    >
                        <span class="mr-1">
                            <svg
                                class="h-8 w-8 text-white"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" /> <circle cx="12" cy="12" r="9" />
                                <line x1="9" y1="12" x2="15" y2="12" />
                                <line x1="12" y1="9" x2="12" y2="15" /></svg
                            >
                        </span>
                        <span>Create</span>
                    </a>
                    <a
                        class="m-4 flex items-center py-2 px-3 text-xs text-white bg-gray-500 hover:bg-indigo-600 rounded"
                        href="/"
                    >
                        <span class="mr-1">
                            <svg
                                class="h-8 w-8 text-white"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x="4" y="4" width="6" height="6" rx="1" />
                                <rect x="14" y="4" width="6" height="6" rx="1" />
                                <rect x="4" y="14" width="6" height="6" rx="1" />
                                <rect x="14" y="14" width="6" height="6" rx="1" /></svg
                            >
                        </span>
                        <span>See more</span>
                    </a>
                </div>
                <div>
                    <a
                        class="inline-block px-4 pb-2 text-sm font-medium text-indigo-500 border-b-2 border-indigo-500"
                        href="/"
                        >Active Tasks
                    </a><a
                        class="inline-block px-4 pb-2 text-sm font-medium text-gray-500 border-b-2 border-transparent"
                        href="/">Completed</a
                    >
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="table-auto w-full">
                    <tbody>
                      <tr class="border-b border-blue-50">
                        <td class="flex items-center py-4 px-6 font-medium">
                          <div class="flex px-4 py-3">
                            <div>
                              <p class="text-sm font-medium">New project X
                            </p>
                              <p class="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                            </div>
                          </div>
                        </td>
                        <td class="font-medium">
                          <p class="text-sm text-gray-500">122 Comments
                        </p>
                        </td>
                        <td class="pr-6">
                          <p class="mb-1 text-xs text-indigo-500 font-medium">65%</p>
                          <div class="flex">
                            <div class="relative h-1 w-48 bg-indigo-50 rounded-full">
                              <div class="absolute top-0 left-0 h-full w-2/6 bg-indigo-500 rounded-full"></div>
                            </div>
  
                          </div>
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>
            </div>
        </div>
    </div>
</section>