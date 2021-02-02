import React from 'react'
import {
  Container,
  Divider,
  Header,
  Segment,
  Card,
  Label,
  Icon,
} from 'semantic-ui-react'
import './OrderData.css'
import { RouteData } from './RouteData/RouteData'

const description = `Указана примерная стоимость на одного пассажира по тарифу "Полный"! Она может отличаться от суммы после резервирования мест.

После резервирования вы можете отказаться от оплаты`

export const OrderData = () => {
  return (
    <Segment floated="right">
      <Header size="large">Ваш выбор</Header>

      <Divider fitted />

      <Container className="routeInfo">
        <Header size="medium">Поезда</Header>
        <Container className="durationLabel">
          <Label color="red" horizontal>
            Туда
          </Label>
          <span>В ПУТИ 12 Ч. 15 М</span>
        </Container>
        <Container>
          <Icon name="subway" size="large" />
          <span className="trainNumber">№045Я</span>
          <span>ФПК</span>
        </Container>
        <div className="route">Иваново - С-Петер-Гл</div>
        <RouteData
          stationName="Ярославль-Главный"
          time="20:38"
          timeZone="МСК"
          date="12.09.2019"
        />
        <Container className="durationIcon">
          <Icon name="long arrow alternate down" size="large" />
          <b>в пути 12 ч. 15 м.</b>
        </Container>
        <RouteData
          stationName="Санкт-Петербург-Главн."
          time="08:53"
          timeZone="МСК"
          date="13.09.2019"
        />
      </Container>

      <Divider fitted />
      <Container className="priceInfo">
        <Container textAlign="right">
          <b>
            <span>от </span>2 234 ₽
          </b>
        </Container>
        <Card>
          <Card.Content description={description} />
          <Label basic color="red" floating>
            Важно
          </Label>
        </Card>
        <Container textAlign="justified">
          <b>Страхование НС</b>
          <b className="insurancePrice">150₽</b>
        </Container>
      </Container>
    </Segment>
  )
}
