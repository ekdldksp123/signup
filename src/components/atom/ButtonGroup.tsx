import styled from "@emotion/styled";

export const SubmitButton = styled.button`
    outline:none;
    height: 40px;
    text-align: center;
    width: 130px;
    border-radius:40px;
    background: #fff;
    border: 2px solid #1ECD97;
    color:#1ECD97;
    letter-spacing:1px;
    text-shadow:0;
    font-size:12px;
    font-weight:bold;
    cursor: pointer;
    transition: all 0.25s ease;

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
`