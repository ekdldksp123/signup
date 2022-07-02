import styled from "@emotion/styled";
import React from "react";

const BannerWrapper = styled.section`
margin: 0;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
//gap: 40px;
margin-bottom: 15px;

padding: 40px;

background: linear-gradient(to right, #00DECC, #00A1FC);
`

const BannerBox = styled.section`
img {
    width: 100%;
    height: 120px;

    border-radius: 50%;
}

div {
    display: flex;
    flex-direction: column;
}
`

const BannerTitle = styled.h1`
    //font-family: 'Jua', sans-serif;
    margin: 0;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 40px;
    color: white;
    text-align: center;
`;
interface BannerProps {
    title: string;
}

export const Banner:React.FC<BannerProps> = ({title}) => {
    return (
        <BannerWrapper>
            <BannerBox>
                <BannerTitle>{title}</BannerTitle>
            </BannerBox>
        </BannerWrapper>
    )
}
