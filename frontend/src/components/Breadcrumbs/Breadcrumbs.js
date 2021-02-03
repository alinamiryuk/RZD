import React from 'react'
import { Step, Grid, Menu, Dropdown } from 'semantic-ui-react'
import './Breadcrumbs.css'

export const Breadcrumbs = () => {
  return (
    <Grid className="breadcrumbs">
      <Menu attached="top">
        <Dropdown item icon="bars" simple>
          <Dropdown.Menu>
            <Dropdown.Item>Популярные направления</Dropdown.Item>
            <Dropdown.Item>Поезда</Dropdown.Item>
            <Dropdown.Item>Новости и скидки</Dropdown.Item>
            <Dropdown.Item>Вернуть билет</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <b>Меню</b>
      </Menu>
      <Step.Group>
        <Step>
          <Step.Title>Поиск билета</Step.Title>
        </Step>
        <Step>
          <Step.Title>Выбор поезда и билета</Step.Title>
        </Step>
        <Step active>
          <Step.Title>Данные пассажиров и оплата</Step.Title>
        </Step>
        <Step disabled></Step>
      </Step.Group>
    </Grid>
  )
}
