import styled from '@emotion/styled'
import { Button } from '@mui/material'

export const SubmitButton = styled(Button)`
  height: 55px;
  width: 100%;
  outline: none;
  text-align: center;
  border-radius: 25px;
  background: linear-gradient(to right, #00dea4, #1ecd97);
  box-shadow: 0 4px 15px 0 rgb(36 199 218 / 75%);
  border: 1px solid #1ecd97;
  color: #fff;
  letter-spacing: 1px;
  text-shadow: 0;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  margin: 12.5px 0 12.5px;

  &:hover {
    border: 1px solid #1ecd97;
    color: #1ecd97;
    background: transparent;
  }
  &:active {
    letter-spacing: 2px;
  }
  &:after {
    content: 'Submit';
  }
`


export const LoginButton = styled(Button)`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 55px;
  text-align:center;
  border: none;
  background-size: 300% 100%;

  background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);
  box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);

  border-radius: 50px;
  moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;

  &:hover {
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
  }

  &:focus {
    outline: none;
  }
`
