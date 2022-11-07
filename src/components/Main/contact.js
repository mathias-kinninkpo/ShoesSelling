import contactIcon from '../conta.png'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons';
import {useState} from 'react'
import $ from 'jquery'


const ContactWrapper = styled.div`
    background-color: white;
    padding : 5%;
    margin: 2px;
    display: flex;
    height: 60vh;
    flex-direction: column;
    align-items:center;
    & * {
        background-color: #fff;
        margin: 2% 0;
    }

    & .content{
        display: flex;
        width:60%;
        justify-content:space-between;
        height:70%;

        & > div{
            height:100%;
        }
        & img{
            width: 100%;
            height:100%;
        }
        & h3{
            font-size: 22px;
            margin-bottom: 22px;
            color: #444;
        }
        & button{
            border: none;
            padding: 5% 15%;
            background-color: green;
            font-size:20px;
            font-weight:700;
            color:#fdfdfd;
            cursor: pointer;

        }
        
    }
    & form{
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        align-items:center;
        height:100%;
        & input, textarea{
            border: none;
            background-color: #ddd;
            padding:15px;
            width: 150%;
            font-size:17px;
            border-radius:10px;
        }
        & input{
            
        }
    }


`
const Hdr = styled.h2`
    text-align: center;
    margin: 3% 0;
    color:#047a41;
`

export default function Contact(){

    const [contact , setContact] = useState({
        email : '',
        fullName : '',
        message : ''

    })

    function handleChange(e){
        const [name , value] = e.target
        setContact(prev =>({
            ...prev,
            [name] : value
        }))
    }
    function handleBlur(e){
        if(e.target.value == ""){
            $(`#${e.target.name}`).css({"border": "1px solid #f00", "outline": "#f00"})
            $(`#${e.target.name}Error`).text(`fill out the field ${e.target.name}`)
            $(`#${e.target.name}Error`).css({"display":"block","color":"red","font-size":"15px"})
        }
        else{
            $(`#${e.target.name}`).css({"border": "2px solid #2b2", "outline": "#2b2"})
            $(`#${e.target.name}Error`).css({"display":"none"})
        }
    }
    return (
        <>
        <ContactWrapper>
            <Hdr>HAVE SOME QUESTIONS ?</Hdr>
            <div className = 'content'>
                <div>
                    <img src = {contactIcon} /> 
                </div>
                <div>
                    <h3>Contact us here <SocialIcon url="https://email.com/jaketrent" /></h3>
                    <form>
                        <input 
                            type= 'text' 
                            placeholder = 'Full Name' 
                            name ='fullName'
                            id ='fullName'
                            required
                            onBlur = {handleBlur}
                        /><br />
                        <span id = 'fullNameError'></span>
                        <input 
                            type= 'email' 
                            placeholder = 'Email'
                            name = 'email'
                            id = 'email'
                            onBlur = {handleBlur}
                            required 
                        /><br />
                        <span id = 'emailError'></span>
                        <textarea  
                            cols="" 
                            rows="" 
                            name = 'message'
                            id = 'message'
                            onBlur = {handleBlur}
                            placeholder = 'Your message here' >
                        </textarea><br />
                        <span id = 'messageError'></span>

                        <button>SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </ContactWrapper>
        <div>
            <Hdr>FIND US HERE</Hdr>
            <iframe style = {{width : '100%', height:'500px'}} id="gmap_canvas" src="https://maps.google.com/maps?q=benin,%20calavi%20,%20university%20of%20abomey-calavi,%20cous&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
        </>

    )
}