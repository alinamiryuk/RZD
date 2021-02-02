import React from 'react'
import './Navbar.css'
import { List, Image, Grid, Flag } from 'semantic-ui-react'
export const Navbar = () => {
  return (
    <Grid>
      <Image src="/images/svg/rzd.svg" size="large" />
      <List horizontal className="middleWrapper">
        <List.Item as="a">Мобильная версия</List.Item>
        <List.Item as="a">Для слабовидящих</List.Item>
        <List.Item as="a">На главную</List.Item>
        <List.Item as="a">Обратная связь</List.Item>
      </List>
      <List horizontal className="rigntWrapper">
        <List.Item as="a">
          <Flag name="ru" />
        </List.Item>
        <List.Item as="a">
          <Flag name="gb" />
        </List.Item>
        <List.Item as="b">Максим Меньшенин</List.Item>
        <List.Item as="a">Выйти</List.Item>
      </List>
    </Grid>
  )
}
