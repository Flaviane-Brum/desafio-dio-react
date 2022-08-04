import React from 'react'

type Props = {
  link: string
  icon: React.ReactNode
}

const ItemLink = ({ icon, link }: Props) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {icon}
    </a>
  )
}

export default ItemLink
