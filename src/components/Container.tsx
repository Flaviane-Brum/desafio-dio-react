import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="mx-auto max-w-[1160px] px-4">{children}</div>
}

export default Container
