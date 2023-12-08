import {Button} from 'antd'
import React, {useEffect, useRef} from 'react'

export const ButtonBurger = () => {
  const menu = useRef<HTMLElement | null>(null)

  useEffect(() => {
    menu.current = document.querySelector('.as__left-panel-admin')
  }, [])

  const handleToggleOpenMenu = () => {
    if (menu.current) {
      menu.current.classList.toggle('as__left-panel-admin_active')
    }
  }

  return (
    <Button
      onClick={handleToggleOpenMenu}
      className="as__button-burger"
      icon={<i className="fa-solid fa-bars" />}
    />
  )
}
