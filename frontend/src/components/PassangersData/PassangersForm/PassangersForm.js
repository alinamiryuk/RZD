import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Icon, Label, Segment } from 'semantic-ui-react'
import {
  addChild,
  agreementChange,
  deleteChild,
} from '../../../redux/actions/passangerDataActions'
import { fetchPassengersData } from '../../../redux/thunks'
import { Passanger } from './Passanger/Passanger'
import './PassangersForm.css'

export const PassangersForm = () => {
  const passengers = useSelector((store) => store.passengerData)
  const dispatch = useDispatch()
  const [childForm, setChildForm] = useState(false)
  return (
    <Segment floated="left">
      <Form>
        <Passanger passengerType="adult" />
        {childForm ? (
          <>
            <Button
              icon
              onClick={() => {
                setChildForm((state) => !state)
                dispatch(deleteChild())
              }}
            >
              <Icon name="minus" />
            </Button>
            <Passanger passengerType="child" />
          </>
        ) : (
          <Button as="div" labelPosition="right">
            <Button
              icon
              onClick={() => {
                setChildForm((state) => !state)
                dispatch(addChild())
              }}
            >
              <Icon name="plus" />
            </Button>
            <Label>Добавить ребенка(до 5 лет)</Label>
          </Button>
        )}

        <Form.Checkbox
          label="Я согласен наобработку персональных данных"
          onClick={() => dispatch(agreementChange(!passengers.agreement))}
        />
        {passengers.agreement &&
        passengers.adult.lastName &&
        passengers.adult.firstName &&
        // passengers.adult.gender &&
        passengers.adult.birthDate &&
        // passengers.adult.citizenship &&
        // passengers.adult.documentType &&
        // passengers.adult.cell &&
        passengers.adult.documentNumber
        ? (
          <Form.Button
            content="Оформить билет"
            onClick={() => dispatch(fetchPassengersData(passengers))}
          />
        ) : (
          <Form.Button disabled content="Оформить билет" />
        )}
      </Form>
  </Segment>
  )
}
