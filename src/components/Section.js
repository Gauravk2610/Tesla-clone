import React, { useEffect } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal'

function Section({ title, description, backgroundImg, leftBtnText, rightBtnText }) {
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
        //   if (window.scrollY/2) {
        //     handleShow(true);
        //   } else handleShow(false);
        // });
        console.log(window.scrollTop/700)
        return () => {
          window.removeEventListener("scroll");
        };
      }, []);})
    
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText &&
                        <RightButton>
                            {rightBtnText}
                        </RightButton>}
                        
                    </ButtonGroup>
                </Fade>    
                <DownArrow src="images/down-arrow.svg"></DownArrow>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: auto;
    height:100vh;
    background-image: ${props => `url("/images/${props.bgImage}")`} ;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

    > h1 {
        font-size: 40px;
        font-weight: 600;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 26px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity 0.85;
    text-transform: uppercase;
    font-size: 13px;
    cursor: pointer;
    font-weight: 500;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    overflow-x: hidden;
    height: 44px;
    animation: animateDown infinite 1.5s;
    margin-bottom: 12px;
    width: 100%
`

const Buttons = styled.div``

