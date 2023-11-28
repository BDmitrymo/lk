import React from 'react'
import { ReactComponent as Logo } from '../../../assets/img/logo.svg'
import './MenuAdmin.scss'

export const MenuAdmin = () => {
  return (
    <div className="as__admin-menu">
      <Logo className="as__logo" />
      <div className="as__admin-menu_box">
        <button className="as__admin-menu_button as__admin-menu_button-active">
          <i className="fa-solid fa-message" />
        </button>
        <button className="as__admin-menu_button">
          <i className="fa-solid fa-chart-pie" />
        </button>
      </div>
    </div>
  )
}
