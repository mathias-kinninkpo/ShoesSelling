import styled from 'styled-components'
import { ItemContainer} from './AllProducts'
import {dataBlog} from './image/dataBlog'
import Blog from './Blog'
import Card from './Card'
import {SearchInput as Hdr} from './AllProducts'
import {dataImage} from './imageHome/dataImage'
import {  useCart } from "react-use-cart";
import {dataProfile} from './profile/dataProfile'
import {Animation} from './Register'
//import {Carousel} from '3d-react-carousal';
// import FaChevronLeft from 'react-icons'
// import FaChevronRight from 'react-icons'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import load from '../load.gif'

import { useEffect, useState } from 'react'

const WelcomeText = styled.h1`
    background-color : #90cf90cc;
    font-size:40px;
    border: 1px solid #90cf90;
    padding:20px;
    color:#fff;
    animation: ${Animation} 5s linear infinite;
    animation-delay: 2s;




`
let slides =  dataProfile.map((card) => {
    return (
      <div >
          <Card card = {card} key = {card.id}/>
      </div>
    )
})


export default function HomePage(){

const [loading, setLoading] = useState(true)
useEffect(()=>{
  setInterval(() => {
    setLoading(false)
  },0);
},[])

  const {items} =useCart()
  
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 500 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1
  }
};


    var i = 0
    const [image, setImage] = useState(dataImage[1])
    /*setTimeout(()=>{
      setImage(dataImage[i])
      i = i+1
      if(i===5){
        i=0
      }
      i = i+1
    }, 5000) */
    const Home = styled.div`
    position: relative;
    width: 100%;
    height:90vh;
    background:url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display:flex;
    color:#fff;
    justify-content: center;
    align-items:center;
    font-size:40px;


`
const LoadImage = styled.div`
    position:relative;
    margin-top:3px;
    width:100%;
    height:100vh;
    z-index:1000;


`
const ImageLoding = styled.div`
    


`
    return (
       <>
       { loading ?
       <LoadImage>
         <img src = {load} />
       </LoadImage>

       :
         <>
        <Home>
            <WelcomeText>
                welcome to my shoes shopping
            </WelcomeText>
        </Home>
        <Hdr>
            <h2><span></span>Our Products<span></span></h2>
        </Hdr>
        <div >
          <ItemContainer>
            { 
                dataBlog.filter((data, index) => index < 3).map (data =>{
                    return <Blog item = {data} />
                })
            }
          </ItemContainer>
        </div>
        <Hdr><h2><span></span>Our Startup<span></span></h2></Hdr>

        <div style = {{position:'relative',width:'72%', margin:'auto'}}>
         { /*<Carousel axis='horizontal' autoPlay={true}>
            {slides}
          </Carousel>
          */}
          <Carousel responsive={responsive} autoPlay={true} interval={100} infinite={true} transitionDuration={1000}>
            {slides}
          </Carousel>;
        </div>
        </>
        }
       </>
    )
}
