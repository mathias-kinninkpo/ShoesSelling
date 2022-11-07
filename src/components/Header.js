import logo from '../logo.png'
import {Link, NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {useCart} from "react-use-cart";
import {FaCartArrowDown} from "react-icons/fa";
import {useContext, useEffect} from 'react'
import { ConnexionContext, CheckoutContext } from './Context';
import 'font-awesome/css/font-awesome.min.css';

const CardDesign =  styled.span`
    color: #90cf9c;
    font-size: 40px;
    position : relative;
    top:5px;

`

const Count = styled.span`
    font-size: 20px;
    font-weight:800;
    color: white;
    background-color:#090a;
    padding:7px 12px;
    border-radius: 50%;
    margin-left:10px ;
    position:relative;
    top:-5px;
    
`
const Li = styled.li`
    cursor: pointer;
`
const Wellcome = styled.h2`
    display: inline-block;
    color:green;
`
export default function Header(){

    const {
        totalUniqueItems,
    } = useCart();

    const {handleConnexion, connected} = useContext(ConnexionContext)
    const {isConnected,  checkoutHandler} = useContext(CheckoutContext)

    function logout(){
        localStorage.setItem('con', 'false')
        localStorage.setItem('check', 'false')
        alert(`${JSON.parse(localStorage.getItem('data')).surname}, vous vous deconnecté avec succès!`)
        console.log(isConnected)
        function setCheckout() {return checkoutHandler()}
        setCheckout()
        console.log(isConnected)
        return handleConnexion()

    }

    return (
        <header>
            { 
                connected ?
                <nav>
                    <img src={logo} className='logo' />
                    <Wellcome >    
                        {connected && `Welcome ${JSON.parse(localStorage.getItem('data')).surname}`}
                    </Wellcome>
                    
                    <ul className='nav-element'>
                        <li><NavLink to="/">HOME</NavLink></li>
                        <li><NavLink   to="/home">ALL PRODUCT</NavLink></li>
                        <li><NavLink  to = '/contact'>CONTACT</NavLink></li>
                        <div>
                            <Count>{totalUniqueItems}</Count>
                            <Link to = '/Panier'>
                                    <CardDesign>
                                        <span style = {{color:"red"}}><FaCartArrowDown /></span>
                                    </CardDesign>
                            </Link>
                        </div>
                        <Li></Li>
                        <Li onClick = {() => logout()}>LOGOUT</Li>
                    </ul>
                </nav>
                :
                <nav>
                    <img src={logo} className='logo' />
                    
                    <ul className='nav-element'>
                        <li><NavLink   to="/">HOME</NavLink></li>
                        <li><NavLink  to="/home">ALL PRODUCT</NavLink></li>
                        <div>
                            <Count>{totalUniqueItems}</Count>
                            <Link to = '/Panier'>
                                    <CardDesign>
                                        <FaCartArrowDown />
                                    </CardDesign>
                            </Link>
                        </div>
                        <li><NavLink to = '/contact'>CONTACT</NavLink></li>
                        <li><NavLink  to = '/Login'>LOGIN</NavLink></li>
                        <li><NavLink  to = '/Register' >REGISTER</NavLink></li>
                    </ul>
                </nav>
        }
        </header>
    )
}