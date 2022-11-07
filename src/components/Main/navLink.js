import uba from './uba.png'
import visa from './visa.png'
import mastercard from './mastercard.png'
import paypal from './paypal.png'
import gif from './paiement.png'
import {useState} from 'react'
import { useNavigate} from 'react-router'
import styled from 'styled-components'
import Cards from 'react-credit-cards'
import { FieldSet, InputField } from 'fannypack';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';




export default function Checkout(){


        const {
        meta,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps
        } = usePaymentInputs();
        const { erroredInputs, touchedInputs } = meta;
    
       


        const navigate =useNavigate()


        const [info , setInfo] = useState({
                lastname:'',
                firstname:'',
                email:'',
                phone:'',
                address:'',
                postcode:'',
                view:null,
                cardnumber:'',
                expiration:'',
                valid:''
        })

        function handleChange(event){
                        
                event.preventDefault()

                const {value, name, type, checked} = event.target

                setInfo(prev => ({...prev,[name]: type == 'checkbox' ? checked : value}))
        }
        function handleSubmit(event){
                event.preventDefault()
                if(info.email){
                        alert('la transaction a été effectué avec succès')
                        function redirect(){ return navigate('/home')}
                        redirect()
                }
        }


    return (
        <div className ='paiement'>
            <form className= 'information'>
                <label className = 'court-input'>
                        <h4>Last Name</h4> <br />
                        <input 
                                name = 'lastname' 
                                type = 'text' 
                                onChange = {handleChange}
                                value = {JSON.parse(localStorage.getItem('data')).name}
                                required
                        /> 
            
                        <h4>First Name</h4><br />
                        <input 
                                name = 'firstname' 
                                type = 'text' 
                                onChange = {handleChange} 
                                value = {JSON.parse(localStorage.getItem('data')).surname}
                                required 
                        />
                </label>
                <label>
                        <h4>email address</h4> <br />
                        <input 
                                name = 'email' 
                                type = 'email' 
                                onChange = {handleChange} 
                                value = {JSON.parse(localStorage.getItem('data')).email}
                                required
                        />
                
                </label>
                <label>
                        <h4>The phone number</h4> <br />
                        <input 
                                name = 'phone' 
                                type = 'tel' 
                                onChange = {handleChange} 
                                required
                        />
                
                </label>
                <label>
                        <h4>Your address</h4> <br />
                        <input 
                                name = 'address' 
                                type = 'text' 
                                onChange = {handleChange} 
                                required
                        />
                
                </label>
                <label className = 'court-input'>
            
                        <h4>The postcode</h4> <br />
                        <input 
                                name = 'postcode' 
                                type = 'text' 
                                onChange = {handleChange} 
                                required
                        />
                        <h4>City</h4> <br />
                        <input 
                                name = 'city' 
                                type = 'text' 
                                onChange = {handleChange} 
                                required
                        />
                
                </label>
                <span className = 'view-valid'>Confirme ?</span>
                <input  
                        name = 'view' 
                        type = 'checkbox' 
                        checked = {info.view} 
                        onChange = {handleChange} 
                        required
                />
                <input type = 'submit' value = 'SAVE'/>
            </form>
            <form className = 'info-card' onSubmit = {handleSubmit}>
            <div>
                    <img src={gif} width = '500'/>
            </div> 
               <label>
                    <img src = {visa} width = '70'/>
                    <img src = {uba} width = '70'/>
                    <img src = {mastercard} width = '70'/>
                    <img src = {paypal} width = '70'/>
                </label>
              
            
                <span className = 'view-valid'>Sure to confirm purchase??</span>
                <input 
                        name = 'valid' 
                        type = 'checkbox' 
                        checked = {info.valid} 
                        onChange = {handleChange} 
                        required
                />
                <input type = 'submit' value = 'VALIDE' />
            </form>
            <FieldSet isHorizontal>
      <InputField
        // Here is where React Payment Inputs injects itself into the input element.
        {...getCardNumberProps()}
        placeholder="0000 0000 0000 0000"
        label="Card number"
        inputRef={getCardNumberProps().ref}
        // You can retrieve error state by making use of the error & touched attributes in `meta`.
        state={erroredInputs.cardNumber && touchedInputs.cardNumber ? 'danger' : undefined}
        validationText={touchedInputs.cardNumber && erroredInputs.cardNumber}
        maxWidth="15rem"
      />
      <InputField
        {...getExpiryDateProps()}
        label="Expiry date"
        inputRef={getExpiryDateProps().ref}
        state={erroredInputs.expiryDate && touchedInputs.expiryDate ? 'danger' : undefined}
        validationText={touchedInputs.expiryDate && erroredInputs.expiryDate}
        maxWidth="8rem"
      />
      <InputField
        {...getCVCProps()}
        placeholder="123"
        label="CVC"
        inputRef={getCVCProps().ref}
        state={erroredInputs.cvc && touchedInputs.cvc ? 'danger' : undefined}
        validationText={touchedInputs.cvc && erroredInputs.cvc}
        maxWidth="5rem"
      />
    </FieldSet>
          

      
        </div>
    )
    
}