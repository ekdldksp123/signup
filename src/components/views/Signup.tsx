import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Banner } from '../layout/Banner';
import { SubmitButton } from '../atom/ButtonGroup';
import SignupForm from '../molecules/FormGroup';
import { InputProps } from '../../types/FormProps';

const SignupView:React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const inputGroupProps: InputProps[] = [
        {name: 'username', label: 'Username', value: username, setValue: setUsername},
        {name: 'email', label: 'Email Address', value: email, setValue: setEmail},
        {name: 'password', label: 'Password', value: password, setValue: setPassword},
        {name: 'confirmPassword', label: 'Confirm Password', value: confirmPassword, setValue: setConfirmPassword}
    ]

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            username: data.get('username'),
            email: data.get('email'),
            password: data.get('password'),
        });
    };
  
    return (
      <>
        <Banner title="Sign up"/>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={3.5}>
              <SignupForm inputGroup={inputGroupProps}/>
              <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <SubmitButton disabled={true} type="submit" />
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                    Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </>
    );
  }

export default SignupView;