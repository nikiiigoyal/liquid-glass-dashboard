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
  X,
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
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={close}
        />
      )}

      <div className="relative z-10 min-h-screen flex">
        {/* Sidebar */}
        <div className={cn(
          // Mobile: Fixed overlay sidebar
          'fixed inset-y-0 z-50 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:z-20',
          // Desktop: Always visible
          'md:block',
          // Mobile transform
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}>
          <div className="h-full w-64 glass-panel glass-sidebar flex flex-col">
            {/* Sidebar Header */}
            <div className="p-4 flex items-center justify-between border-b border-white/30">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center glass-button shadow-xl">
                  <CircleUser className="h-5 w-5 text-white drop-shadow-sm" />
                </div>
                <div>
                  <h1 className="font-medium text-white drop-shadow-sm">Acme Inc.</h1>
                </div>
              </div>
              
              {/* Mobile close button */}
              <button 
                onClick={close}
                className="md:hidden glass-button glass-interactive"
              >
                <X className="h-4 w-4 text-white" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
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
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <header className="sticky top-0 z-30 glass-panel glass-header">
            <div className="flex items-center justify-between h-14 px-4 sm:px-6">
              <div className="flex items-center gap-3">
                <button 
                  onClick={toggle} 
                  className="glass-button glass-interactive md:hidden"
                >
                  <Menu className="h-4 w-4 text-white drop-shadow-sm" />
                </button>
                
                {/* Desktop sidebar toggle */}
                <button 
                  onClick={toggle} 
                  className="hidden md:block glass-button glass-interactive"
                >
                  <Menu className="h-4 w-4 text-white drop-shadow-sm" />
                </button>
                
                <h2 className="text-base sm:text-lg font-medium text-white drop-shadow-sm truncate">
                  Documents
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative">
                  <button className="glass-button-secondary glass-interactive">
                    <Search className="h-4 w-4" />
                    <span className="hidden sm:inline ml-2">Quick Search</span>
                  </button>
                </div>

                <button className="glass-button-primary glass-interactive">
                  <Plus className="h-4 w-4" />
                  <span className="hidden sm:inline ml-2">Quick Create</span>
                </button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6 overflow-x-hidden">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {statsData.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            {/* Chart Section */}
            <div className="glass-panel glass-content">
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-lg font-medium text-white drop-shadow-sm">
                      Total Visitors
                    </h3>
                    <p className="text-sm text-white/70 drop-shadow-sm">
                      Total for the last 3 months
                    </p>
                  </div>
                  
                  {/* Mobile-friendly tabs */}
                  <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto">
                    <TabButton active>Last 3 months</TabButton>
                    <TabButton>Last 30 days</TabButton>
                    <TabButton>Last 7 days</TabButton>
                  </div>
                </div>

                <div className="h-48 sm:h-64 w-full glass-inner rounded-xl flex items-center justify-center">
                  <div className="text-white/60 text-sm drop-shadow-sm text-center">
                    Chart visualization would appear here
                  </div>
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className="glass-panel glass-content">
              {/* Table Header */}
              <div className="p-4 sm:p-6 border-b border-white/20">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Tabs */}
                  <div className="flex items-center gap-2 overflow-x-auto">
                    <TabButton active>Outline</TabButton>
                    <TabButton badge="3">Past Performance</TabButton>
                    <TabButton badge="2">Key Personnel</TabButton>
                    <TabButton>Focus Documents</TabButton>
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-2 sm:ml-auto">
                    <button className="glass-button-secondary glass-interactive">
                      <Menu className="h-4 w-4" />
                      <span className="hidden lg:inline ml-2">Customize Columns</span>
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </button>

                    <button className="glass-button-secondary glass-interactive">
                      <Plus className="h-4 w-4" />
                      <span className="hidden lg:inline ml-2">Add Section</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-white/20 bg-white/5">
                      <th className="px-3 sm:px-6 py-3 w-8">
                        <input type="checkbox" className="glass-checkbox" />
                      </th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider drop-shadow-sm">
                        Header
                      </th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider drop-shadow-sm">
                        Section Type
                      </th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider drop-shadow-sm">
                        Status
                      </th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider drop-shadow-sm">
                        Target
                      </th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider drop-shadow-sm">
                        Limit
                      </th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider drop-shadow-sm">
                        Reviewer
                      </th>
                      <th className="px-3 sm:px-6 py-3" />
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, index) => (
                      <TableRow key={index} {...row} />
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table Footer */}
              <div className="p-3 sm:p-4 border-t border-white/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="text-sm text-white/70 drop-shadow-sm">
                  0 of 68 row(s) selected.
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-white/70 drop-shadow-sm whitespace-nowrap">
                      Rows per page:
                    </span>
                    <select className="glass-select">
                      <option>10</option>
                      <option>25</option>
                      <option>50</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center justify-between sm:justify-start gap-4">
                    <div className="text-sm text-white drop-shadow-sm">
                      Page 1 of 7
                    </div>
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
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}