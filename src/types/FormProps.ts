export interface FormProps {
  inputGroup: InputProps[]
  checkEmail: boolean,
  setCheckEmail: (status: boolean) => void
}

export interface InputProps {
  name: string
  label: string
  value: string
  setValue: (newValue: string) => void
}
