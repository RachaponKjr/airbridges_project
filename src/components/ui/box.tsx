import React from 'react'

interface BoxBodyProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

interface BoxContentProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

function BoxBody({ children, className, style }: Readonly<BoxBodyProps>) {
  return (
    <div
      className={`w-full h-max p-[60px] rounded-[23.04px] border border-white/20 bg-[radial-gradient(48.77%_44.41%_at_51.18%_-3.02%,_#071738_0%,_#020816_100%)] space-y-4 ${className}`}
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
