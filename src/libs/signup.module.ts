export const isEmail = (email: string) => {
  // email validation
  const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i

  if (email === '') return true
  return regex.test(email)
}

export const isValidPassword = (password: string) => {
  // 8~20 자리 영문,숫자,특수기호 password validation
  const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/ //

  if (password == '') return true
  return regex.test(password)
}

export const isConfirmedPassword = (password: string, confirmPassword: string) => {
  // password 재확인
  if (confirmPassword === '') return true
  return password === confirmPassword
}

export const isValidSignupForm = (
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
  agreement: boolean
) => {
  // signup form validation
  if (username === '') return true
  if (email === '') return true
  if (password === '') return true
  if (!isEmail(email)) return true
  if (!isValidPassword(password)) return true
  if (confirmPassword === '' || confirmPassword !== password) return true
  if (!agreement) return true
  return false
}
