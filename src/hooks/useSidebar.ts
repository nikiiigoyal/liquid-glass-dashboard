'use client'

import { useState, useEffect } from 'react'
import { useResponsive } from './useResponsive'

export function useSidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const { isMobile } = useResponsive()
  
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false)
    }
  }, [isMobile])
  
  const toggle = () => setIsOpen(!isOpen)
  const close = () => setIsOpen(false)
  const open = () => setIsOpen(true)
  
  return { isOpen, toggle, close, open }
}