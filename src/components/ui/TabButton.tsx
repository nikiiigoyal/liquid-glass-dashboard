'use client'


import { cn } from '@/lib/utils'
import type { TabButtonProps } from '../../../types/dashboard'

export function TabButton({ children, active = false, badge = null }: TabButtonProps) {
  return (
    <button
      className={cn(
        'h-9 px-4 rounded-full text-sm transition-all duration-300 flex items-center gap-2',
        active
          ? 'glass-button-active text-white shadow-lg'
          : 'glass-button-secondary text-white/80 hover:text-white hover:glass-button-hover'
      )}
    >
      <span className="drop-shadow-sm">{children}</span>
      {badge && (
        <span className="h-5 min-w-5 rounded-full glass-badge text-white/80 text-xs flex items-center justify-center px-1 drop-shadow-sm">
          {badge}
        </span>
      )}
    </button>
  )
}