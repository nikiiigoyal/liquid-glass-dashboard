'use client'


import { cn } from '@/lib/utils'
import type { SidebarItemProps } from '../../../types/dashboard'

export function SidebarItem({ icon, label, active = false }: SidebarItemProps) {
  return (
    <button
      className={cn(
        'w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all duration-300 group',
        active
          ? 'glass-button-active text-white shadow-lg'
          : 'text-white/80 hover:glass-button-hover hover:text-white'
      )}
    >
      <span className="drop-shadow-sm">{icon}</span>
      <span className="drop-shadow-sm">{label}</span>
    </button>
  )
}