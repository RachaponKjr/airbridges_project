import { cn } from '@/libs/cn'
import React from 'react'

interface BoxBodyProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  anime?: boolean
}

interface BoxContentProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

function BoxBody({ children, className, style, anime }: Readonly<BoxBodyProps>) {
  return (
    <div
      className={cn(
        `w-full h-max p-[60px] rounded-[41.433px] border border-white/20 
        bg-[radial-gradient(48.77%_44.41%_at_51.18%_-3.02%,_#071738_0%,_#020816_100%)]
     transition-all duration-300 ease-in-out`,

        anime &&
          `hover:shadow-[0px_0px_30px_rgba(0,48,200,0.9)] 
                  hover:border-white/50 backdrop-blur-[54.38px]`,

        className
      )}
      style={style}
    >
      {children}
    </div>
  )
}

function BoxContent({ children, className, style }: Readonly<BoxContentProps>) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}

export { BoxBody, BoxContent }
