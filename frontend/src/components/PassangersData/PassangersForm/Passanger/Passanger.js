import React from 'react'
import { Container, Form, Header, Popup } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { useForm } from '../../../../hooks/useForm'
import { changePassengerData } from '../../../../redux/actions/passangerDataActions'
import './Passanger.css'
import {
  emptyForm,
  popupBirthDate,
  popupDocumentNumber,
  popupDocumentType,
  optionsCell,
  optionsCountry,
  optionsDocumentType,
  optionsGender,
} from '../../../../utils/const'

export const Passanger = ({ passengerType }) => {
  const dispatch = useDispatch()
  const [passengerData, setPassangerData] = useForm(emptyForm)

  return (
    <>
    {passengerType === 'adult' ? <Header content="Пассажир №1: взрослый"/> : <Header content="Пассажир №2: детский без места"/>}
      <Form.Group
        widths="equal"
        onChange={(e) => dispatch(changePassengerData(passengerData))}
      >
        <Form.Input
          fluid
          label="Фамилия"
          name="lastName"
          placeholder="Введите фамилию"
          value={passengerData.lastName}
          onChange={setPassangerData}
        />
        <Form.Input
          fluid
          label="Имя"
          name="firstName"
          placeholder="Введите имя"
          value={passengerData.firstName}
          onChange={setPassangerData}
        />
        <Form.Input
          fluid
          label="Отчество(при наличии)"
          name="middleName"
          placeholder="Введите отчество"
          value={passengerData.middleName}
          onChange={setPassangerData}
        />
      </Form.Group>
      <Form.Group
        widths="equal"
        onChange={(e) => dispatch(changePassengerData(passengerData))}
      >
        <Form.Select
          fluid
          label="Пол"
          name="gender"
          options={optionsGender}
          placeholder="не выбрано"
          defaultValue={passengerData.gender}
          onChange={setPassangerData}
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
              value={passengerData.birthDate}
              onChange={setPassangerData}
            />
          }
        />
        <Form.Select
          fluid
          label="Гражданство"
          name="citizenship"
          options={optionsCountry}
          placeholder="не выбрано"
          defaultValue={passengerData.citizenship}
          onChange={setPassangerData}
        />
      </Form.Group>
      <Form.Group
        widths="equal"
        onChange={(e) => dispatch(changePassengerData(passengerData))}
      >
        <Popup
          content={popupDocumentType}
          trigger={
            <Form.Select
              fluid
              label="Тип документа"
              name="documentType"
              options={optionsDocumentType}
              placeholder="не выбрано"
              defaultValue={passengerData.documentType}
              onChange={setPassangerData}
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
              value={passengerData.documentNumber}
              onChange={setPassangerData}
            />
          }
        />
        <Form.Select
          fluid
          label="Тариф"
          name="cell"
          options={optionsCell}
          placeholder="Тариф"
          defaultValue={passengerData.cell}
          onChange={setPassangerData}
        />
      </Form.Group>
    </>
  )
}
