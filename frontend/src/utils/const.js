export const emptyForm = {
  lastName: '',
  firstName: '',
  middleName: '',
  gender: '',
  birthDate: '',
  citizenship: '',
  documentType: '',
  documentNumber: '',
  cell: '',
}

export const optionsGender = [
  { key: 'male', text: 'Мужчина', value: 'male' },
  { key: 'female', text: 'Женщина', value: 'female' },
  { key: 'other', text: 'Другое', value: 'other' },
]

export const optionsCountry = [
  { key: 'ru', text: 'Россия', value: 'ru' },
  { key: 'kz', text: 'Казахстан', value: 'kz' },
  { key: 'pol', text: 'Польша', value: 'pol' },
]

export const optionsCell = [
  { key: 'full', text: 'Полный', value: 'full' },
  { key: 'child', text: 'Детский', value: 'child' },
  { key: 'childNoSeat', text: 'Детский без места', value: 'childNoSeat' },
]

export const optionsDocumentType = [
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

export const popupBirthDate =
  'Вводится, как указано в документе, удостоверяющем личность.'

export const popupDocumentType =
  'Если пассажир не является гражданином России, выбирайте «Иностранный документ».'

export const popupDocumentNumber =
  'Символ № не вводится. Если в документе есть серия, указывается серия и номер документа без пробела. Для иностранных документов и свидетельства о рождении при вводе римских цифр используйте заглавные латинские буквы (I, V, X). Например: Российский паспорт - 2345123456, Свидетельство о рождении - XIVБЮ123456, Иностранный документ - ВМ0472680, Заграничный паспорт РФ - 601522106'
