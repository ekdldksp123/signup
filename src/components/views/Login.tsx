import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { callPostApi } from '../../api/api.module'
import { LoginProps } from '../../types/Login'
import { LoginButton } from '../atom/ButtonGroup'
import { TextInput } from '../atom/InputGroup'
import { LoginBanner } from '../layout/Banner'

const LoginView: React.FC = () => {

    const router = useRouter()

    const [form, setForm] = useState<LoginProps>({
        userEmail: '',
        userPassword: ''
    })

    const handleSubmit = async () => {
        if(!form.userEmail) alert('이메일을 입력해주세요')
        else if(!form.userPassword) alert('비밀번호를 입력해주세요')
        else {
            const res =  await callPostApi('user/sign-in', form)
            if(res) router.push('/')
            else console.dir(res)
        }
    }

    const onChangeHandler = (e:any) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    return (
        <>
            <LoginBanner title="Sign in"/>
            <Box component="form" onSubmit={() => handleSubmit()} sx={{ mt: 3 }}>
                <Grid container spacing={3.5} marginTop={8}>
                    <Grid item xs={12}>
                        <TextInput
                            name='userEmail'
                            label='Email'
                            required
                            fullWidth
                            autoFocus={true}
                            value={form.userEmail}
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextInput
                            name='userPassword'
                            label='Password'
                            type="password"
                            required
                            fullWidth
                            value={form.userPassword}
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" marginTop={2}>
                    <LoginButton type="submit">Login</LoginButton>
                </Grid>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href="/signup">Don't have an account yet? Sign up</Link>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default LoginView