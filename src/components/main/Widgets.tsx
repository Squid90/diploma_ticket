import { FC } from 'react'
import { WidgetItemProp, Widget__item } from './Widget__item'


interface WidgetDataProp {
    items: WidgetItemProp[]
}

export const Widgets: FC<WidgetDataProp> = (data) => {
    const { items } =data
   
  return (
    <>
        {items.map(item => <Widget__item key={item.title} {...item} />)}
    </>
  )
}