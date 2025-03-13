import React from 'react'

function Tick({ color, size = 21 }: Readonly<{ color: string; size: number }>) {
  return (
    <svg
      className="min-w-max"
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.4719 4.53766C19.8988 7.96454 19.8383 13.558 16.2992 16.9158C13.0277 20.0147 7.7191 20.0147 4.43897 16.9158C0.891243 13.558 0.830809 7.96454 4.26632 4.53766C7.63277 1.16258 13.1054 1.16258 16.4719 4.53766Z"
        stroke={color}
        strokeWidth="1.29479"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.70056 10.623L9.1434 13.0658L14.0377 8.18018"
        stroke={color}
        strokeWidth="1.29479"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Tick
