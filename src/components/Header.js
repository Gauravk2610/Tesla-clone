import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';


function Header({ setBlur }) {

    const[Burgerstatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)
    console.log(window.innerWidth)

    useEffect(() => {
        var width = window.innerWidth;
        window.addEventListener('resize', () => {
            if (window.innerWidth !== width) {
                width = window.innerWidth
                setBurgerStatus(false);
                setBlur(false)
            }
        })
        return () => window.removeEventListener("resize");

    }, [])



    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {cars && cars.map((car, index) => (
                    <a href="#" key={index} >{car}</a>
                ))}
                {/* <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panel</a> */}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
            </RightMenu>
            <CustomMenu onClick={() => {
                setBurgerStatus(true) 
                setBlur(true)}}>Menu
            </CustomMenu>

            <BurgerNav show={Burgerstatus}>
                <CloseWrap>
                    <CustomClose onClick={() => {
                        setBurgerStatus(false)
                        setBlur(false)
                        }} />
                </CloseWrap>
                {window.innerWidth<=1050 && cars && cars.map((car, index) => (
                    <li><a key={index} href="#">{car}</a></li>     
                ))}
                <li><a href="#">Existing Inventory</a></li>     
                <li><a href="#">Used Inventory</a></li>     
                <li><a href="#">Trade-in</a></li>     
                <li><a href="#">Test Drive</a></li>     
                <li><a href="#">Powerwall</a></li>     
                <li><a href="#">Commercial Energy</a></li>     
                <li><a href="#">Utilities</a></li>     
                <li><a href="#">Charging</a></li>     
                <li><a href="#">Find Us</a></li>     
                <li><a href="#">Support</a></li>     
                <li><a href="#">Account</a></li>     
                <li className="more"><a href="#">More</a><span>&gt;</span></li>     
            </BurgerNav>   
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    background-color: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 36px;
    margin-top: 6px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    img {
        width: 120px;
        height: 18px;
    }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a{
        font-weight: 600;
        // text-transform: uppercase;
        // padding: 0px 14px;
        padding: 6px 16px;
        flex-wrap: nowrap;
        border-radius: 10px;
    }

    a:hover {
        background-color: #0000001a;
        transition: ease-in 0.4s;
    }

    @media (max-width: 1050px) {
        display:none;
    }
`

const RightMenu = styled.div`
    @media (max-width: 1050px) {
        display:none;
    }
    a {
        font-weight: 600;
        // text-transform: uppercase;
        // margin-right: 12px;
        padding: 6px 16px;
        border-radius: 10px;
    }

    a:hover {
        background-color: #0000001a;
        transition: ease-in 0.4s;
    }
`

const CustomMenu = styled.button`
    border: none;
    background-color: inherit;
    font-size: inherit;
    font-weight: 600;
    padding: 6px 16px;
    border-radius: 10px;
    cursor: pointer;
    margin-right: -20px;

    :hover{
        background-color: #0000001a;
        transition: ease-in 0.4s;       
    }
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    overflow: scroll;
    transform: ${props => props.show ? 'translaX(0)':'translateX(100%)'};
    transition: transform 0.2s;
    li {
        margin-top: 10px;
        display: flex;
        padding: 12px 10px;
        // border-bottom: 1px solid rgba(0, 0, 0, .2);
        border-radius: 20px;
        transition: ease-in 0.2s;       
        cursor: pointer;

        a {
            font-weight: 600;
        }

        span {
            margin-left: auto;
            margin-right: 10px;
        }

    }

    li:hover{
        background-color: #0000001a;
    }
`

const CloseWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 12px;
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    // padding: 0 10px;
    // border-radius: 20px;
    :hover{
        background-color: #0000001a;
        transition: ease-in 0.4s;       
    }
`