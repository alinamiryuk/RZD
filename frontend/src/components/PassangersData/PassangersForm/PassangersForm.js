import React, { useState } from 'react'
import { Button, Form, Icon, Label, Segment } from 'semantic-ui-react'
import { Passanger } from './Passanger/Passanger'
import './PassangersForm.css'

export const PassangersForm = () => {
  const [childForm, setChildForm] = useState(false)
  return (
    <Segment floated="left">
      <Form>
        <Passanger passengerType="disabled" />
        {childForm ? (
          <>
            <Button icon onClick={() => setChildForm((state) => !state)}>
              <Icon name="minus" />
            </Button>
            <Passanger passengerType="child" />
          </>
        ) : (
          <Button as="div" labelPosition="right">
            <Button icon onClick={() => setChildForm((state) => !state)}>
              <Icon name="plus" />
            </Button>
            <Label>Добавить ребенка(до 5 лет)</Label>
          </Button>
        )}

        <Form.Checkbox label="Я согласен наобработку персональных данных" />
        <Form.Button content='Оформить билет' />
      </Form>

      <pre>{JSON.stringify({  }, null, 2)}</pre>
    </Segment>
  )
}
