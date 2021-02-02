import React, { useState } from 'react'
import { Button, Form, Icon, Label, Popup, Segment } from 'semantic-ui-react'
import { Passanger } from './Passanger/Passanger'
import './PassangersForm.css'

export const PassangersForm = () => {
  const [childForm, setChildForm] = useState(false)
  return (
    <Segment floated="left">
      <Form>
        <Passanger passengerType="disabled" />
        {childForm ? (
          <Passanger passengerType="child" />
        ) : (
          <Button as="div" labelPosition="right">
            <Button icon>
              <Icon name="plus" />
            </Button>
            <Label>Добавить ребенка(до 5 лет)</Label>
          </Button>
        )}

        <Form.Checkbox label="Я согласен наобработку персональных данных" />
        <Form.Button>Оформить билет</Form.Button>
      </Form>
    </Segment>
  )
}
