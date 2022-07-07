import styled from "@emotion/styled";
import React from "react";
import { Copyright } from "../molecules/Copyright";

const FooterWrapper = styled.footer`
    width: 100%;
    height: 110px;
    bottom: 0px;
    position: absolute;
`

export const Footer:React.FC = () => {
    return (
        <FooterWrapper>
            <Copyright />
        </FooterWrapper>
    )
}