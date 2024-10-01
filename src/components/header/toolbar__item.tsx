import React from 'react'


export interface ToolbarItemProp {
    title: string;
    link: string;
}

export const Toolbar__item: React.FC<ToolbarItemProp> = (item) => {
    const {title, link} = item
  return (
    <li>
        <a href={link}>{title}</a>
    </li>
  )
}
