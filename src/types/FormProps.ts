export interface FormProps {
  inputGroup: InputProps[]
}

export interface InputProps {
  name: string
  label: string
  value: string
  setValue: (newValue: string) => void
}
