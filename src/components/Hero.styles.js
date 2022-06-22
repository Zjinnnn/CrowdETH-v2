import styled from "styled-components";
import BackgroundImage from '../images/Cosmic.jpeg'

export const Background = styled.div`
    background-image: url(${BackgroundImage});
    height: 910px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 150px;
    gap: 50px;

    h1 {
        font-size: 56px;
        color: white;
        width: 50%;
    }

    p {
        font-size: 20px;
        color: white;
        width: 50%;
    }
`

export const StartButton = styled.button`
    background-color: #A7A7A7;
    color: white;
    font-size: 18px;
    width: 200px;
    height: 60px;
    border-radius: 10px;
    opacity: 80%;
    border: none;
`

export const Gif = styled.img`
    width: 30%;
    height: 60%;
    margin-right: 200px;
    opacity: 80%;
`