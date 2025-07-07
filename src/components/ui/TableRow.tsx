'use client'

import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { TableRowProps } from '../../../types/dashboard'

export function TableRow({ title, type, status, target, limit, reviewer }: TableRowProps) {
  return (
    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
      <td className="px-6 py-4 whitespace-nowrap">
        <input type="checkbox" className="glass-checkbox" />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-white drop-shadow-sm">{title}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-white/80 drop-shadow-sm">{type}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={cn(
            'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium glass-badge drop-shadow-sm',
            status === 'Done' ? 'glass-badge-success' : 'glass-badge-info'
          )}
        >
          {status === 'Done' ? '●' : '○'} {status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-white drop-shadow-sm">{target}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-white drop-shadow-sm">{limit}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-white drop-shadow-sm">{reviewer}</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button className="glass-button glass-interactive">
          <Menu className="h-4 w-4" />
        </button>
      </td>
    </tr>
  )
}