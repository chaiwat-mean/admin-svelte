<script>
  import { dashboard_com1 } from "$lib/store";
</script>

<section class="py-8">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
          <div class="p-6 bg-blue-300 rounded">
            <svg class="h-8 w-8 text-white m-3" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"></path>  <circle cx="9" cy="7" r="4"></circle>  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>  <path d="M16 11h6m-3 -3v6"></path></svg>         
            <h3 class="text-2xl font-bold m-3">{ $dashboard_com1.approved.sum }</h3>
            <h3 class="text-lg font-bold m-3">{ $dashboard_com1.approved.title }</h3>
          </div>
        </div>
        <div class="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
          <div class="p-6 bg-gray-300 rounded">
            <svg class="h-8 w-8 text-white m-3" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"></path>  <polyline points="3 8 6 5 9 8"></polyline>  <polyline points="3 16 6 19 9 16"></polyline>  <line x1="6" y1="5" x2="6" y2="19"></line>  <line x1="13" y1="6" x2="20" y2="6"></line>  <line x1="13" y1="12" x2="20" y2="12"></line>  <line x1="13" y1="18" x2="20" y2="18"></line></svg>
            <h3 class="text-2xl font-bold m-3">{ $dashboard_com1.transactions_made.sum }</h3>
            <h3 class="text-lg font-bold m-3">{ $dashboard_com1.transactions_made.title }
            </h3>
          </div>
        </div>
        <div class="w-full lg:w-1/3 px-4">
          <div class="p-6 rounded">
            <h3 class="text-lg font-bold m-4 text-blue-400">All logs here</h3>
            <h3 class="text-2xl font-bold m-3">{ $dashboard_com1.logs.sum }</h3>
            <h3 class="text-sm font-bold m-3">{ $dashboard_com1.logs.title }
              <svg class="h-8 w-8 text-gray-400 mt-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
  
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
