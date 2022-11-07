import { Link } from "react-router-dom"
import {  useCart } from "react-use-cart";
import styled from 'styled-components'
import {useState, useEffect, useRef} from 'react'
import autoAnimate from '@formkit/auto-animate'
import {CiSquareMore} from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos'
import 'aos/dist/aos.css'


export const ItemWrapper = styled.div`


`
export const AddButtun = styled.button`
    width: 100%;
    height: 3em;
    border: none;
    font-weight: 600;
    border-radius: 8px;
    background-color:#090a;
    font-weight: 700;
    font-size: 18px;
    cursor: pointer;
    transition : .5s;
    color: #fafafd;
`
const Image = styled.img`
    position: relative;
    width: 99%;
    height: 69%;

`
const ImageDesign = styled.div`

`
const Item = styled.div`
    position: relative;
    width: 370px;
    height: 470px;
    margin: 2%;
    padding: .8%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 1px #555;
    border-radius: 5px;
    overflow: hidden;
    transition: all .3s ease-in-out;
    & .buttons{
        display:none;
        position:relative;
        background-color:#9997;
        flex-direction:column;
        z-index:100;
        width:95%;
        dispalay:flex;
        align-items:center;
        padding:10px;
    }
    &:hover&:after{
        position:absolute;
        content:'';
        width:100%;
        height:100%;
        background-color:#ccc3;
        transition:2s;
    }
    &:hover .description{
        display:none;
    }
    &:hover .buttons{
        display:flex;
    }
    &:hover{
        position:relative;
        border: .5px solid #90cf9c;
        width: 380px;
        height: 480px;
        top:-10%;
    }
    ${props => props.isAdded ?`&:before{
        font-weight: 700;
        position:absolute;
        content:'ADDED';
        z-index:100;
        color:#fafafd;
        width:70%;
        height:9%;
        top:5%;
        left:-20%;
        text-align:center;
        transform: rotate(-45deg);
        background-color: #090a;
        font-size: 22px;
        padding: 10px 0 0 0;

        `:``
    }
    
`
const SvgB = styled.div`
    width: 100%;
    height: 3em;
    border: none;
    font-weight: 600;
    border-radius: 8px;
    background-color: #090a;
    font-weight: 700;
    font-size: 18px;
    text-align:center;
    padding:auto;
    cursor: pointer;
    transition : .5s;
    color: #fff;
`
const Para = styled.p`
    font-size: 30px;
    color : #789
`

export default function Blog({item}){

    const parentRef = useRef(null)

  useEffect(() => {
    AOS.init({
        offset: 1,
        duration: 1600,
        easing: 'ease-in-sine',
        delay: 500,
      });
  }, [])

    const { addItem,items,inCart} = useCart();


    const [isAdded , setIsAdded] = useState(false)

    useEffect(function set(){
        setIsAdded(inCart(item.id))
    },[items])
    

    return (
        <div data-aos="fade-right" style={{margin:'2%'}}>
            <Item isAdded = {isAdded}  total = {item.quantity}>
                <Image src={item.src} />
                <Para>{item.nom}</Para>
                <Para>{item.price}€</Para>
                <Para className = 'description' style = {{fontSize:'15px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa in consequatur praesentium, cum, alias minima accusantium fuga ratione vero consequuntur</Para>
                <div className="buttons">
                    <AddButtun onClick={() => addItem(item)}>ADD TO CART</AddButtun>
                </div>
                <Link to = {'/Item/'+item.id} title = {`See More`} className = 'buttons'>
                    < SvgB >
                        <i style = {{backgroundColor:'inherit', color:'inherit',position:"relative", top:'10px'}}>view more</i>   <i class="fa fa-eye" aria-hidden="true" style={{fontSize:'25px',backgroundColor:'inherit',position:"relative", top:'15px'}}></i>
                    </SvgB>
                </Link>  
            </Item>                
        </div>
    )
}