import styled from "styled-components";

export const CardContainer = styled.div`
    background: ${props => props.theme.cardGradient};
    max-width: 41.2rem;
    padding: 3.2rem;
    border-radius: 3rem;
    h1 {
        font-size: 2.8rem;
        color: ${props => props.theme.white};
        margin-bottom: 1.5rem;
        text-align: center;
    }
    p{
        font-size: 1.5rem;
        line-height: 2.4rem;
        color: ${props => props.theme.textColor};
        text-align: center;
    }
    & > button {
        width: 100%;
        padding-block: 1.1rem;
        border-radius: 2.25rem;
        border: none;
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
        background: ${props => props.theme.submitbuttonColor};
        color: ${props => props.theme.white};
        cursor: pointer;
        transition: all.3s;
        &:hover {
            background: ${props => props.theme.white};
            color: ${props => props.theme.submitbuttonColor};
        }
    }
    & > img {
        display: block;
        margin: 1.3rem auto 3.2rem;
}
`

export const IconConteiner = styled.div`
    background: ${props => props.theme.feedbackbuttonColor};
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
`

export const ButtonConteiner = styled.div`    margin-top: 2.4rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3.2rem;
    button {
        width: 5.1rem;
        height: 5.1rem;
        border-radius: 50%;
        border: none;
        background: ${props => props.theme.feedbackbuttonColor};
        color: ${props => props.theme.feedbackbuttonText};
        font-weight: 700;
        line-height: 2.4rem;
        cursor: pointer;
        transition: all .4s;
        &:focus {
            color: ${props => props.theme.white};
            background: ${props => props.theme.feedbackbuttonText};
        }
        &:hover {
            color: ${props => props.theme.white};
            background: ${props => props.theme.submitbuttonColor};
        }
    }
`

export const ResultConteiner = styled.p`
padding: 0.4rem 1.8rem;
background: ${props => props.theme.feedbackbuttonColor};
width: fit-content;
margin-inline: auto;
margin-bottom: 3.2rem;
border-radius: 2.25rem;

p {
    color: ${props => props.theme.submitbuttonColor};
}
`