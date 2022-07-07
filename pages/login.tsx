import { NextPage } from "next";
import { ContainerCenter } from "../src/components/layout/ContainerGroup";
import LoginView from "../src/components/views/Login";

const Login:NextPage = () => {
    return <ContainerCenter children={<LoginView />}/> 
}

export default Login;