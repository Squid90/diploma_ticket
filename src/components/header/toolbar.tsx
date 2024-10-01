import { FC } from 'react'
import { ToolbarItemProp, Toolbar__item } from './toolbar__item'


interface ToolbarDataProp {
    items: ToolbarItemProp[]
}

export const Toolbar: FC<ToolbarDataProp> = (data) => {
    const { items } =data
   
  return (
    <ul className="toolbar-list">
      {items.map(item => <Toolbar__item key={item.title} {...item} />)}
    </ul>
  )
}
