import React from 'react'
import { IItem, WithBalance } from '../../types'
import { ItemCard } from '../itemCard'
import { ItemGridContainer, ItemGridLink } from './style'

interface IItemGridProps {
  items: IItem[]
  selectItem?: (assetId: string) => void
}

export const ItemGrid = (props: IItemGridProps) => {
  const { selectItem } = props

  const items = props.items.map(item => (
    <ItemGridLink
      onClick={ev => {
        if (selectItem) {
          ev.stopPropagation()
          ev.preventDefault()
          selectItem(item.assetId)
        }
      }}
      to={`/item/${item.assetId}`}
      key={item.id}
    >
      <ItemCard item={item}/>
    </ItemGridLink>
  ))

  return (
    <ItemGridContainer>
      {items}
    </ItemGridContainer>
  )
}

export default ItemGrid
