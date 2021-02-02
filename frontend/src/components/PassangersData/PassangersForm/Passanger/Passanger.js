import React from 'react'
import { Button, Form, Icon, Popup } from 'semantic-ui-react'
import './Passanger.css'

const optionsGender = [
  { key: 'male', text: 'Male', value: 'male' },
  { key: 'female', text: 'Female', value: 'female' },
  { key: 'other', text: 'Other', value: 'other' },
]

const optionsCountry = [
  { key: 'ru', text: 'Россия', value: 'ru' },
  { key: 'kz', text: 'Казахстан', value: 'kz' },
  { key: 'pol', text: 'Польша', value: 'pol' },
]

const optionsCell = [
  { key: 'full', text: 'Полный', value: 'full' },
  { key: 'child', text: 'Детский', value: 'child' },
  { key: 'childNoSeat', text: 'Детский без места', value: 'childNoSeat' },
]

const optionsDocumentType = [
  { key: 'ruPassport', text: 'Российский паспорт', value: 'ruPassport' },
  {
    key: 'ruForeignPassport',
    text: 'Заграничный паспорт РФ',
    value: 'ruForeignPassport',
  },
  {
    key: 'foreignPassport',
    text: 'Иностранный документ',
    value: 'foreignPassport',
  },
  {
    key: 'birthСertificate',
    text: 'Cвидетельство о рождении',
    value: 'birthСertificate',
  },
]
const popupMiddleName =
  'Если в вашем документе, удостоверяющем личность, не указано отчество, поставьте прочерк (дефис).'
const popupBirthDate =
  'Вводится, как указано в документе, удостоверяющем личность.'
const popupDocumentType =
  'Если пассажир не является гражданином России, выбирайте «Иностранный документ».'
const popupDocumentNumber =
  'Символ № не вводится. Если в документе есть серия, указывается серия и номер документа без пробела. Для иностранных документов и свидетельства о рождении при вводе римских цифр используйте заглавные латинские буквы (I, V, X). Например: Российский паспорт - 2345123456, Свидетельство о рождении - XIVБЮ123456, Иностранный документ - ВМ0472680, Заграничный паспорт РФ - 601522106'

export const Passanger = ({ passengerType }) => {
  return (
    <>
      <Form.Group widths="equal">
        <Form.Input fluid label="Фамилия" placeholder="Введите фамилию" />
        <Form.Input fluid label="Имя" placeholder="Введите имя" />
        <Popup
          content={popupMiddleName}
          trigger={
            <Form.Input fluid label="Отчество" placeholder="Введите отчество" />
          }
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Select
          fluid
          label="Пол"
          options={optionsGender}
          placeholder="не выбрано"
        />
        <Popup
          content={popupBirthDate}
          trigger={
            <Form.Input
              fluid
              label="Дата рождения"
              type="date"
              className="formDate"
            />
          }
        />
        <Form.Select
          fluid
          label="Гражданство"
          options={optionsCountry}
          placeholder="не выбрано"
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Popup
          content={popupDocumentType}
          trigger={
            <Form.Select
              fluid
              label="Тип документа"
              options={optionsDocumentType}
              placeholder="не выбрано"
            />
          }
        />
        <Popup
          content={popupDocumentNumber}
          trigger={
            <Form.Input
              fluid
              label="Номер документа"
              placeholder="Номер документа"
            />
          }
        />
        <Form.Select
          fluid
          label="Тариф"
          options={optionsCell}
          placeholder="Тариф"
        />
      </Form.Group>
    </>
  )
}
