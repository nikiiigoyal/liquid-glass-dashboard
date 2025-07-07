'use client'


import {
 
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleUser,
  LineChart,
  Menu,
  Plus,
  Search,
  Settings,
  Users,
} from 'lucide-react'
import { cn } from '@/lib/utils'

// Import your new components
import { SidebarItem } from '@/components/ui/SidebarItem'
import { StatCard } from '@/components/ui/StatCard'
import { TabButton } from '@/components/ui/TabButton'
import { TableRow } from '@/components/ui/TableRow'
import { useSidebar } from '@/hooks/useSidebar'
import { useResponsive } from '@/hooks/useResponsive'

export default function Dashboard() {
  const { isOpen, toggle, close } = useSidebar()
  const { isMobile } = useResponsive()

  
  const statsData = [
    {
      title: "Total Revenue",
      value: "$1,250.00",
      change: "+12.5%",
      trend: "up" as const,
      description: "Trending up this month",
      subdescription: "Visitors for the last 6 months"
    },
        {
      title: "New Customers",
      value: "1,234",
      change: "+12.5%",
      trend: "up" as const,
      description: "Down 20% this period",
      subdescription: "Acquisition needs attention"
    },
     {
      title: "Active Accounts",
      value: "45,768",
      change: "+12.5%",
      trend: "up" as const,
      description: "Strong user retention",
      subdescription: "Engagement exceed targets"
    },
    {
      title: "Growth Rate",
      value: "4.5%",
      change: "+12.5%",
      trend: "up" as const,
      description: "Steady performance increase",
      subdescription: "Meets growth projections"
    },
  ]

  const tableData = [
    {
      title: "Cover page",
      type: "Cover page",
      status: "In Progress" as const,
      target: "18",
      limit: "5",
      reviewer: "Eddie Lake"
    },
    {
      title: "Table of contents",
      type: "Table of contents",
      status: "In Progress" as const,
      target: "18",
      limit: "5",
      reviewer: "Eddie Lake"
    },
    {
      title: "Executive summary",
      type: "Executive summary",
      status: "Done" as const,
      target: "18",
      limit: "5",
      reviewer: "Eddie Lake"
    },
     {
      title: "Technical Approach",
      type: "Technical Approach",
      status: "Done" as const,
      target: "18",
      limit: "5",
      reviewer: "Eddie Lake"
    },
     {
      title: "Design",
      type: "Design",
      status: "Done" as const,
      target: "18",
      limit: "5",
      reviewer: "Eddie Lake"
    },
    // ... other table rows
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat"
           style={{ backgroundImage: "url('/background.png')" }} />
      <div className="fixed inset-0 bg-black/10" />

      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-15 md:hidden"
          onClick={close}
        />
      )}

      <div className="relative z-10 min-h-screen flex">
        {/* Sidebar */}
        <div className={cn(
          'fixed inset-y-0 z-20 transition-all duration-500 ease-out',
          isOpen ? 'left-0' : '-left-64'
        )}>
          <div className="h-full w-64 glass-panel glass-sidebar flex flex-col">
            {/* Sidebar Header */}
            <div className="p-4 flex items-center gap-3 border-b border-white/30">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center glass-button shadow-xl">
                <CircleUser className="h-5 w-5 text-white drop-shadow-sm" />
              </div>
              <div>
                <h1 className="font-medium text-white drop-shadow-sm">Acme Inc.</h1>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
              <SidebarItem icon={<LineChart className="h-4 w-4" />} label="Dashboard" active />
              <SidebarItem icon={<Users className="h-4 w-4" />} label="Lifecycle" />
              <SidebarItem icon={<LineChart className="h-4 w-4" />} label="Analytics" />
              <SidebarItem icon={<Menu className="h-4 w-4" />} label="Projects" />
              <SidebarItem icon={<Users className="h-4 w-4" />} label="Team" />
              
              <div className="pt-4 pb-2">
                <div className="px-3 text-xs font-medium text-white/70 drop-shadow-sm">
                  Documents
                </div>
              </div>
              
              <SidebarItem icon={<Menu className="h-4 w-4" />} label="Data Library" />
              <SidebarItem icon={<LineChart className="h-4 w-4" />} label="Reports" />
              <SidebarItem icon={<Menu className="h-4 w-4" />} label="Word Assistant" />
            </nav>

            {/* Settings */}
            <div className="p-4 border-t border-white/30">
              <SidebarItem icon={<Settings className="h-4 w-4" />} label="Settings" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={cn(
          'flex-1 transition-all duration-500 ease-out',
          isOpen ? 'ml-64' : 'ml-0'
        )}>
          {/* Header */}
          <header className="sticky top-0 z-10 glass-panel glass-header">
            <div className="flex items-center justify-between h-14 md:h-16 px-4 md:px-6">
              <div className="flex items-center gap-2 md:gap-4">
                <button onClick={toggle} className="glass-button glass-interactive">
                  <Menu className="h-4 w-4 text-white drop-shadow-sm" />
                </button>
                <h2 className="text-base md:text-lg font-medium text-white drop-shadow-sm">
                  Documents
                </h2>
              </div>

              <div className="flex items-center gap-2 md:gap-3">
                <div className="relative">
                  <button className="glass-button-secondary glass-interactive">
                    <Search className="h-4 w-4" />
                    <span className="hidden sm:inline">Quick Search</span>
                  </button>
                </div>

                <button className="glass-button-primary glass-interactive">
                  <Plus className="h-4 w-4" />
                  <span className="hidden sm:inline">Quick Create</span>
                </button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="p-4 md:p-6 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {statsData.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            {/* Chart Section */}
            <div className="glass-panel glass-content">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-medium text-white drop-shadow-sm">
                      Total Visitors
                    </h3>
                    <p className="text-sm text-white/70 drop-shadow-sm">
                      Total for the last 3 months
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <TabButton active>Last 3 months</TabButton>
                    <TabButton>Last 30 days</TabButton>
                    <TabButton>Last 7 days</TabButton>
                  </div>
                </div>

                <div className="h-64 w-full glass-inner rounded-xl flex items-center justify-center">
                  <div className="text-white/60 text-sm drop-shadow-sm">
                    Chart visualization would appear here
                  </div>
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className="glass-panel glass-content">
              <div className="p-6 border-b border-white/20">
                <div className="flex items-center gap-4 flex-wrap">
                  <TabButton active>Outline</TabButton>
                  <TabButton badge="3">Past Performance</TabButton>
                  <TabButton badge="2">Key Personnel</TabButton>
                  <TabButton>Focus Documents</TabButton>

                  <div className="ml-auto flex items-center gap-2">
                    <button className="glass-button-secondary glass-interactive">
                      <Menu className="h-4 w-4" />
                      <span className="hidden sm:inline">Customize Columns</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    <button className="glass-button-secondary glass-interactive">
                      <Plus className="h-4 w-4" />
                      <span className="hidden sm:inline">Add Section</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px] md:min-w-full">
                  <thead>
                    <tr className="border-b border-white/20 bg-white/5">
                      <th className="px-6 py-3 w-8">
                        <input type="checkbox" className="glass-checkbox" />
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider drop-shadow-sm">
                        Header
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider drop-shadow-sm">
                        Section Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider drop-shadow-sm">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider drop-shadow-sm">
                        Target
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider drop-shadow-sm">
                        Limit
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider drop-shadow-sm">
                        Reviewer
                      </th>
                      <th className="px-6 py-3" />
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, index) => (
                      <TableRow key={index} {...row} />
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 border-t border-white/20 flex items-center justify-between">
                <div className="text-sm text-white/70 drop-shadow-sm">0 of 68 row(s) selected.</div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-white/70 drop-shadow-sm">Rows per page:</span>
                    <select className="glass-select">
                      <option>10</option>
                      <option>25</option>
                      <option>50</option>
                    </select>
                  </div>
                  <div className="text-sm text-white drop-shadow-sm">Page 1 of 7</div>
                  <div className="flex items-center gap-1">
                    <button className="glass-button glass-interactive">
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button className="glass-button glass-interactive">
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}