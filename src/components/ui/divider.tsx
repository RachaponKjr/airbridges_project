import React from 'react'

interface DividerProps {
  className?: string
  orientation?: 'horizontal' | 'vertical'
}

function Divider({ className, orientation = 'horizontal' }: Readonly<DividerProps>) {
  return (
    <div className={`${orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]'} bg-white/20 ${className}`} />
  )
}

export default Divider
