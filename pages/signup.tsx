import * as React from 'react'
import { ContainerCenter } from '../src/components/layout/ContainerGroup'
import SignupView from '../src/components/views/Signup'

export default function SignUp() {
  return <ContainerCenter children={<SignupView />} />
}
