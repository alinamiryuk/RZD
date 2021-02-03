import React from 'react'
import { Form, Popup } from 'semantic-ui-react'
import { useForm } from '../../../../hooks/useForm'
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
  const [passangerData, setPassangerData] = useForm({
    lastName: '',
    firstName: '',
    middleName: '',
    gender: '',
    birthDate: '',
    citizenship: '',
    documentType: '',
    documentNumber: '',
    cell: '',
    passengerType,
  })

  return (
    <>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="Фамилия"
          name="lastName"
          placeholder="Введите фамилию"
        />
        <Form.Input
          fluid
          label="Имя"
          name="firstName"
          placeholder="Введите имя"
        />
        <Popup
          content={popupMiddleName}
          trigger={
            <Form.Input
              fluid
              label="Отчество"
              name="middleName"
              placeholder="Введите отчество"
            />
          }
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Select
          fluid
          label="Пол"
          name="gender"
          options={optionsGender}
          placeholder="не выбрано"
        />
        <Popup
          content={popupBirthDate}
          trigger={
            <Form.Input
              fluid
              label="Дата рождения"
              name="birthDate"
              type="date"
              className="formDate"
            />
          }
        />
        <Form.Select
          fluid
          label="Гражданство"
          name="citizenship"
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
              name="documentType"
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
              name="documentNumber"
              placeholder="Номер документа"
            />
          }
        />
        <Form.Select
          fluid
          label="Тариф"
          name="cell"
          options={optionsCell}
          placeholder="Тариф"
        />
      </Form.Group>
    </>
  )
}
