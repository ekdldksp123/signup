import styled from '@emotion/styled'
import React from 'react'

const BannerWrapper = styled.section`
  margin: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-bottom: 15px;

  padding: 40px;
  background-image: linear-gradient(to right, #00decc, #00a1fc);
`

const LoginBannerWrapper = styled.section`
  margin: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-bottom: 15px;

  padding: 40px;
  background-image: linear-gradient(to right, #81FBB8, #28C76F);
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
  margin: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 40px;
  color: white;
  text-align: center;
`
interface BannerProps {
  title: string
}

export const Banner: React.FC<BannerProps> = ({ title }) => {
  return (
    <BannerWrapper>
      <BannerBox>
        <BannerTitle>{title}</BannerTitle>
      </BannerBox>
    </BannerWrapper>
  )
}

export const LoginBanner: React.FC<BannerProps> = ({ title }) => {
  return (
    <LoginBannerWrapper>
      <BannerBox>
        <BannerTitle>{title}</BannerTitle>
      </BannerBox>
    </LoginBannerWrapper>
  )
}
