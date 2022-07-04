import { Grid, TextField } from '@mui/material'
import { FormProps } from '../../types/FormProps'
import { TextInput } from '../atom/InputGroup'
import { isEmail, isValidPassword } from '../../libs/signup.module'
import React from 'react'

const SignupForm: React.FC<FormProps> = ({ inputGroup }) => {
  const passwordValue = inputGroup.find((v) => v.name === 'password')?.value

  const renderInputGroup = inputGroup.map((v, i) => {
    if (v.name === 'email') {
      return (
        <Grid item xs={12} key={`grid-${i}`}>
          <TextInput
            key={`input-${i}`}
            name={v.name}
            required
            fullWidth
            id={v.name}
            label={v.label}
            autoFocus={i === 0 ? true : false}
            value={v.value}
            onChange={(e) => v.setValue(e.target.value)}
            helperText={isEmail(v.value) ? '' : '올바른 이메일 형식이 아닙니다.'}
            error={isEmail(v.value) ? false : true}
          />
        </Grid>
      )
    } else if (v.name === 'password') {
      return (
        <Grid item xs={12} key={`grid-${i}`}>
          <TextInput
            key={`input-${i}`}
            name={v.name}
            type="password"
            required
            fullWidth
            id={v.name}
            label={v.label}
            autoFocus={i === 0 ? true : false}
            value={v.value}
            onChange={(e) => v.setValue(e.target.value)}
            helperText={
              isValidPassword(v.value) ? '' : '비밀번호는 영문,숫자,특수기호를 포함한 8~20 자리로 구성되어야 합니다.'
            }
            error={isValidPassword(v.value) ? false : true}
          />
        </Grid>
      )
    } else if (v.name === 'confirmPassword') {
      return (
        <Grid item xs={12} key={`grid-${i}`}>
          <TextInput
            key={`input-${i}`}
            type="password"
            name={v.name}
            required
            fullWidth
            id={v.name}
            label={v.label}
            autoFocus={i === 0 ? true : false}
            value={v.value}
            onChange={(e) => v.setValue(e.target.value)}
            helperText={v.value === passwordValue || !v.value ? '' : '입력하신 비밀번호와 일치하지 않습니다.'}
            error={v.value === passwordValue || !v.value ? false : true}
          />
        </Grid>
      )
    } else {
      return (
        <Grid item xs={12} key={`grid-${i}`}>
          <TextInput
            key={`input-${i}`}
            name={v.name}
            required
            fullWidth
            id={v.name}
            label={v.label}
            autoFocus={i === 0 ? true : false}
            value={v.value}
            onChange={(e) => v.setValue(e.target.value)}
          />
        </Grid>
      )
    }
  })

  return <>{renderInputGroup}</>
}

export default SignupForm
