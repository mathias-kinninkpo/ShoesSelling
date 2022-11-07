import Blog from "./Blog"
import styled from 'styled-components'
import { dataBlog } from "./image/dataBlog"
import { keyframes } from 'styled-components'
import {useState, useEffect} from 'react'
import all_product_background_image from './all.jpg' 
import Aos from "aos"
import "aos/dist/aos.css"




export const DefileText = keyframes `
    0%{
      transform: translateX(-350px);
    }
    100%{
        transform: translateX(350px);
    }
`

export const ItemContainer = styled.div`
    position: relative;
    width: 72%;
    margin: 5% auto;
    padding-left: 3%;
    padding-right: 0%;
    display: flex;
    align-items:center;
    flex-wrap: wrap;
    background-color : #f9f9f9;
    
`

const Img = styled.img`
    position: relative;
    width: 100%;
    height:100%;
`
export const SearchInput = styled.div`
    margin: 5% auto;
    width:80%;
    text-align: center;
    background-color: #fff5;
    & input{
        position: relative;
        width: 38%;
        border: none;
        background-color: #ccca;
        height: 50px;
        font-size: 18px;
        border-radius:2px;
        padding:10px;
        
    }
    & h2{
        color:#111;
        margin-bottom: 7%;
        background-color: #fff5;
        font-size:35px;

    }
    & span{
        display: inline-block;
        width: 38%;
        height: 7px;
        position: relative; 
        top: -5px;
        background-color: #090a;
        
    }

`

const StyledSelect = styled.select`

    width: 38%;
    background-color:#090a;
    color: white;
    font-size:20px;
    padding:10px;
    border:none;
    margin:25px;
    border-radius:2px;

`

const DivWrapper = styled.div`
    width:100%;
    height:50vh;
    display:flex;
    justify-content:center;
    align-items:flex-end;
    background:url(${all_product_background_image});
    background-size: cover;
    background-attachment: fixed;

`
export default function AllProducts(){  
    
    const [researched,setResearched] =  useState("")
    const [categorie, setCategorie] = useState('all_product')
    const [data , setData] = useState(dataBlog)
    useEffect(()=>{
       setData(dataBlog.filter(d => categorie =='all_product' ? d : d.categorie === categorie))

    },[categorie])
    useEffect(()=>{
        Aos.init({ duration: 5000 })
    },[])

    return (
        <> 
           { 
            <>
            <DivWrapper>
                <SearchInput>
                    <h2><span></span>Our Products<span></span></h2>
                    <input 
                    type= 'search' 
                    placeholder = 'Search' 
                    onChange = {(event) => setResearched(event.target.value)}
                    /><i 
                        style = {{position:'relative',
                        left:'-66px',
                        top:'5px',
                        backgroundColor:'#090a',
                        fontSize:'30px',color:"#fff", 
                        display:'inline-block',
                        width:'3%',
                        padding:'10px'
                        
                    }} 
                        class="fa fa-search" 
                        aria-hidden="true"></i>

                    <StyledSelect 
                    onChange = {(event) => setCategorie(event.target.value)}
                    value = {categorie}
                    >
                            <option value ='all_product'>all categories</option>
                            <option value = 'men'>men</option>
                            <option value = 'women'>women</option>
                            <option value = 'children'>children</option>
                    </StyledSelect>
                </SearchInput>
            </DivWrapper>
             
                <ItemContainer >
                        {
                            data.filter(data => {
                                const d = data.nom
                                if (researched == ''){
                                    return data
                               }
                               else if (d.toUpperCase().includes(researched.toUpperCase())){
                                    return data
                                }
                
                            }).map(item =>  
                                <Blog item = {item} key = {item.id} data-aos = 'fade-right'/>  
                            )
                        }
                </ItemContainer>  
             </>
           }

        </>
    )
}