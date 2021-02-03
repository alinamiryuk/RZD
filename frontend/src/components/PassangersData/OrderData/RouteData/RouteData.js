import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import './RouteData.css'

export const RouteData = ({ stationName, time, timeZone, date }) => {
  return (
    <Container className="routeData">
      <Header size="small">{stationName}</Header>
      <Container textAlign="center">
        <Header size="small" className="datetime">
          {time}
        </Header>
        <span> {timeZone} | </span>
        <Header size="small" className="datetime">
          {date}
        </Header>
      </Container>
    </Container>
  )
}
