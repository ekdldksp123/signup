import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import { TextInput } from '../src/components/atom/InputGroup';
import { Banner } from '../src/components/layout/Banner';
import { createTheme, ThemeProvider } from '@mui/material';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/ekdldksp123">
        Vinchae Kim
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
    // overrides: {
    //           MuiInputBase: {
    //             input: {
    //               '&:-webkit-autofill': {
    //                 transitionDelay: '9999s',
    //                 transitionProperty: 'background-color, color',
    //               },
    //             },
    //           },
    //         },
    components: {
        MuiCssBaseline: {
          styleOverrides: {
            root : {
              input :{
                '&:-webkit-autofill': {
                    transitionDelay: '9999s',
                    transitionProperty: 'background-color, color',
                },
              }
            }
          },
        },
    }
});

const SubmitButton = styled(Button)`
    height: 55px;
    width: 100%;
    outline:none;
    text-align: center;
    border-radius: 25px;
    background: #fff;
    border: 2px solid #1ECD97;
    color:#1ECD97;
    letter-spacing:1px;
    text-shadow:0;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.25s ease;
    margin: 12.5px 0 12.5px;

    &:hover {
        color:white;
        background: #1ECD97;
    }
    &:active {
        letter-spacing: 2px;
    }
    &:after {
        content:"Submit";
    }
`;


export default function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 2}}>
            <AssignmentInd />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography> */}
          <Banner title="Sign up"/>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={3.5}>
              <Grid item xs={12}>
                <TextInput
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  //helperText=""
                  autoFocus
                  autoComplete='false'
                />
              </Grid>
              <Grid item xs={12}>
                <TextInput
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  //helperText="invalid email"
                  //error={true}
                />
              </Grid>
              <Grid item xs={12}>
                <TextInput
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  //helperText=""
                  autoComplete='false'
                />
              </Grid>
              <Grid item xs={12}>
                <TextInput
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  //helperText=""
                  autoComplete='false'
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <SubmitButton type="submit" />
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}