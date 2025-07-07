'use client'

import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { StatCardProps } from '../../../types/dashboard'

export function StatCard({ title, value, change, trend, description, subdescription }: StatCardProps) {
  return (
    <div className="glass-panel glass-card group hover:glass-card-hover transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm text-white/70 drop-shadow-sm">{title}</div>
          <div
            className={cn(
              'text-xs font-medium px-2 py-0.5 rounded-full glass-badge flex items-center gap-1 drop-shadow-sm',
              trend === 'up' ? 'glass-badge-success' : 'glass-badge-danger'
            )}
          >
            {change}
            {trend === 'up' ? '↑' : '↓'}
          </div>
        </div>

        <div className="text-2xl font-semibold text-white mb-4 drop-shadow-sm">{value}</div>
        <div className="flex items-center gap-1 text-sm text-white/90 drop-shadow-sm">
          {description}
          <ArrowUpRight className="h-3 w-3" />
        </div>
        <div className="text-xs text-white/60 mt-1 drop-shadow-sm">{subdescription}</div>
      </div>
    </div>
  )
}
