import React from 'react'
import { Segment } from 'semantic-ui-react'
import { OrderData } from './OrderData/OrderData'
import { PassangersForm } from './PassangersForm/PassangersForm'

export const PassangersData = () => {
  return (
    <>
      <PassangersForm />
      <OrderData />
    </>
  )
}
