import React, { useEffect, useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Banner } from '../layout/Banner'
import { SubmitButton } from '../atom/ButtonGroup'
import SignupForm from '../molecules/FormGroup'
import { InputProps } from '../../types/FormProps'
import { isValidSignupForm } from '../../libs/signup.module'
import Router from 'next/router'
import Link from 'next/link'
import { SignUpData } from '../../types/Signup'
import { callPostApi } from '../../api/api.module'

const SignupView: React.FC = () => {
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [agreement, setAgreement] = useState<boolean>(false)

  const [disabled, setDisabled] = useState<boolean>(true)

  useEffect(() => {
    console.log()
    if (!isValidSignupForm(username, email, password, confirmPassword, agreement)) {
      setDisabled(!disabled)
    }
  }, [username, email, password, confirmPassword, agreement])

  const inputGroupProps: InputProps[] = [
    { name: 'username', label: 'Username', value: username, setValue: setUsername },
    { name: 'email', label: 'Email Address', value: email, setValue: setEmail },
    { name: 'password', label: 'Password', value: password, setValue: setPassword },
    { name: 'confirmPassword', label: 'Confirm Password', value: confirmPassword, setValue: setConfirmPassword },
  ]

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const signupData: SignUpData = {
      userName: username,
      userEmail: email,
      userPassword: password,
    }

    const res = await callPostApi('user/sign-up', signupData)
    if(res) Router.push({ pathname: '/login'})
    else alert('회원가입에 실패했습니다. 잠시후 다시 시도해주세요..')
  }

  return (
    <>
      <Banner title="Sign up" />
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={3.5}>
          <SignupForm inputGroup={inputGroupProps} />
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  value="agree"
                  color="primary"
                  onChange={(e) => e.target.value === 'agree' && setAgreement(!agreement)}
                />
              }
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <SubmitButton disabled={disabled} type="submit" />
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="#">Already have an account? Sign in</Link>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default SignupView
