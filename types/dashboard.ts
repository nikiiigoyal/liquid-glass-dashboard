import { ReactNode } from "react"

export interface SidebarItemProps {
  icon: ReactNode
  label: string
  active?: boolean
}

export interface StatCardProps {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  description: string
  subdescription: string
}

export interface TabButtonProps {
  children: ReactNode
  active?: boolean
  badge?: string | number | null
}

export interface TableRowProps {
  title: string
  type: string
  status: 'In Progress' | 'Done'
  target: string
  limit: string
  reviewer: string
}