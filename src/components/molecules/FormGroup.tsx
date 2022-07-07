import { Grid } from '@mui/material'
import { FormProps } from '../../types/FormProps'
import { TextInput } from '../atom/InputGroup'
import { isEmail, isValidPassword } from '../../libs/signup.module'
import React, { useEffect, useRef } from 'react'
import { CheckButton } from '../atom/ButtonGroup'
import { callCheckEmailApi, callPostApi } from '../../api/api.module'

const SignupForm: React.FC<FormProps> = ({ inputGroup, checkEmail, setCheckEmail }) => {

  const passwordValue = inputGroup.find((v) => v.name === 'password')?.value

  const checkEmailAvailability = async (email: string, idx: number) => {
    if(email.length > 0) {
      const res = await callCheckEmailApi('user/check-email', { userEmail: email });
    
      if(res.result === 'duplicate') {
        alert('이미 회원가입이 된 이메일 입니다.')
        inputGroup[idx].setValue('')
      } else if(res.result === 'available') {
        setCheckEmail(!checkEmail)
        alert('사용 가능한 이메일입니다!')
      }
    } else alert('이메일을 입력해주세요')
  }

  const renderInputGroup = inputGroup.map((v, i) => {
    if (v.name === 'email') {
      return (
        <>
          <Grid item xs={8} key={`grid-${i}`}>
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
          <Grid item xs={4} key={`grid-button-${i}`}>
            <CheckButton key={`button-${i}`} onClick={() => checkEmailAvailability(v.value, i)}>Check</CheckButton>
          </Grid>
        </>
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
