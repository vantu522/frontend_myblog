import { ArrowUpIcon, CurrencyDollarIcon, UsersIcon, ShoppingCartIcon, ChartBarIcon } from "@heroicons/react/24/outline"



const Admindashboard = () =>{
    const stats = [
        { name: "Total Revenue", stat: "$71,897", icon: CurrencyDollarIcon, change: "12%", changeType: "increase" },
        { name: "New Users", stat: "58.16%", icon: UsersIcon, change: "2.02%", changeType: "increase" },
        { name: "Total Orders", stat: "24.57%", icon: ShoppingCartIcon, change: "4.05%", changeType: "decrease" }, 
      ]

  return ( 
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((item) => (
              <div key={item.name} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <item.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900">{item.stat}</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      View all
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6 mt-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
          <div className="mt-5">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">Chart placeholder</div>
              <div className="text-sm font-medium text-green-600 flex items-center">
                <ArrowUpIcon className="h-4 w-4 mr-1" aria-hidden="true" />
                12%
              </div>
            </div>
            <div className="mt-4">
              <div className="relative h-40">
                <ChartBarIcon className="h-full w-full text-gray-200" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admindashboard
