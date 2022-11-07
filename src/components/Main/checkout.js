import uba from './uba.png'
import visa from './visa.png'
import mastercard from './mastercard.png'
import paypal from './paypal.png'
import gif from './paiement.png'
import {useState, useContext} from 'react'
import {ConnexionContext} from '../Context'
import { useNavigate} from 'react-router'
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FieldSet, InputField } from 'fannypack'; 
import Modal from 'react-modal'
import {useCart} from 'react-use-cart'


export default function Checkout(){

        const navigate =useNavigate()

        const {connected} = useContext(ConnexionContext)

        if(!connected){
                function redirect(){ return navigate("/")}
                redirect()
        }
        
        // toast for printint if the payement has been made successfully


        const showToastMessage = () => {
                toast.success('The payment has been made successfully!', {
                    position: toast.POSITION.TOP_CENTER
                });
        };


        function sleep(time){
                return new Promise((re) => setTimeout(re,time))
        }
        const styles = {
                content:{
                    top:'50%',
                    left:'50%',
                    right:'auto',
                    bottom:'auto',
                    transform: 'translate(-50%,-50%)'
                }
        }
        const [isOpenModal, setIsOpenModal] = useState(false)

        function OpenModal(){
                setIsOpenModal(true)
        }
        function closeModal(){
                setIsOpenModal(false)
        }
        
        const {
                meta,
                getCardNumberProps,
                getExpiryDateProps,
                getCVCProps
              } = usePaymentInputs();
              const { erroredInputs, touchedInputs } = meta

    
       


        

        // initial state

        const [info , setInfo] = useState({
                lastname:`${JSON.parse(localStorage.getItem('data')).name}`,
                firstname:`${JSON.parse(localStorage.getItem('data')).surname}`,
                email:`${JSON.parse(localStorage.getItem('data')).email}`,
                phone:'',
                address:'',
                postcode:'',
                view:null,
                cardnumber:'',
                expiration:'',
                valid:'',
                cvc:''
        })
        const {emptyCart, items} = useCart()
        // to register the data
        function handleChange(event){
                        
                event.preventDefault()

                const {value, name, type, checked} = event.target

                setInfo(prev => ({...prev,[name]: type == 'checkbox' ? checked : value}))
        }
        // an async function because the sleep function

        async function handleSubmit(event){
                event.preventDefault()
                if(info.email){
                        emptyCart()
                        OpenModal()
                        await sleep(5000)
                        function redirect(){ return navigate('/home')}
                        redirect()
                }
        }


    return (
            <>
        <form className ='paiement' onSubmit = {handleSubmit}>
                <div>
                <ToastContainer />
                </div>
         <div className = 'information-container'>

            <div className= 'information'>
                <label>
                        <h4>Last Name</h4> <br />
                        <input className = 'input-info' 
                                name = 'lastname' 
                                type = 'text' 
                                onChange = {handleChange}
                                value = {JSON.parse(localStorage.getItem('data')).name}
                                required
                        /> 
                </label>
                <label>
                        <h4>First Name</h4><br />
                        <input className = 'input-info' 
                                name = 'firstname' 
                                type = 'text' 
                                onChange = {handleChange} 
                                value = {JSON.parse(localStorage.getItem('data')).surname}
                                required 
                        />
                </label>
                <label>
                        <h4>email address</h4> <br />
                        <input className = 'input-info' 
                                name = 'email' 
                                type = 'email' 
                                onChange = {handleChange} 
                                value = {JSON.parse(localStorage.getItem('data')).email}
                                required
                        />
                
                </label>
                <label>
                        <h4>The phone number</h4> <br />
                        <input className = 'input-info' 
                                name = 'phone' 
                                type = 'tel' 
                                onChange = {handleChange}
                                value = {info.phone}
                                required
                        />
                
                </label>
                <label>
                        <h4>Your address</h4> <br />
                        <input className = 'input-info' 
                                name = 'address' 
                                type = 'text' 
                                onChange = {handleChange} 
                                value ={info.address}
                                required
                        />
                
                </label>
                <label>
                        <h4>The postcode</h4> <br />
                        <input className = 'input-info' 
                                name = 'postcode' 
                                type = 'text' 
                                onChange = {handleChange} 
                                value = {info.postcode}
                                required
                        />
                </label>
            </div>
        </div>
            <div className = 'info-card' onSubmit = {handleSubmit}>
                <label >
                        <h4>City</h4> <br />
                        <input className = 'input-info' 
                                name = 'city' 
                                type = 'text' 
                                onChange = {handleChange} 
                                value = {info.city}
                                required
                        />
                
                </label>            
                <label>
                        <div><img src={gif} width = '500'/></div>
                        <img src = {visa} width = '50' style= {{margin:"0 40px"}} />
                        <img src = {uba} width = '50' style= {{margin:"0 40px"}} />
                        <img src = {mastercard} width = '50' style= {{margin:"0 40px"}} />
                        <img src = {paypal} width = '50' style= {{margin:"0 40px"}} />
                        
                </label>           
                <FieldSet isHorizontal>
                <div>
                        <InputField
                                // Here is where React Payment Inputs injects itself into the input element.
                                {...getCardNumberProps()}
                                placeholder="0000 0000 0000 0000"
                                label="Card number"
                                inputRef={getCardNumberProps().ref}
                                // You can retrieve error state by making use of the error & touched attributes in `meta`.
                                state={erroredInputs.cardNumber && touchedInputs.cardNumber ? 'danger' : undefined}
                                validationText=''
                                maxWidth="15rem"
                                onChange = {handleChange} 
                                name = "cardnumber"
                        />
                        <span style = {{fontSize:'13px', color:"red"}}>{touchedInputs.cardNumber && erroredInputs.cardNumber}</span>
                </div>
                <div>
                        <InputField
                                {...getExpiryDateProps()}
                                label="Expiry date"
                                inputRef={getExpiryDateProps().ref}
                                state={erroredInputs.expiryDate && touchedInputs.expiryDate ? 'danger' : undefined}
                                validationText=''
                                maxWidth="8rem"
                                onChange = {handleChange}
                                name = "expiration" 
                        />
                        <span style = {{fontSize:'13px', color:"red"}}>{touchedInputs.expiryDate && erroredInputs.expiryDate}</span>
                </div>
                <div>
                        <InputField
                                {...getCVCProps()}
                                placeholder="123"
                                label="CVC"
                                inputRef={getCVCProps().ref}
                                state={erroredInputs.cvc && touchedInputs.cvc ? 'danger' : undefined}
                                validationText=''
                                maxWidth="5rem"
                                onChange = {handleChange} 
                                name = "cvc"
                        />
                        <span style = {{fontSize:'13px', color:"red"}}>{touchedInputs.cvc && erroredInputs.cvc}</span>
                </div>
           

                </FieldSet>
                
                <label>
                        <input 
                                name = 'valid' 
                                type = 'checkbox' 
                                onChange = {handleChange}
                                name = "cardnumber" 
                                required
                        />
                        <span className = 'view-valid'>Sure to confirm purchase??</span>
                </label>
                <input  type = 'submit' value = 'VALIDATE'/>
            </div>
        
        </form>
        <button onClick = {()=>OpenModal()}>OPEN</button>

        <div style = {{position:'absolute',background:"#999",width:'100%'}}>
                <Modal 
                        isOpen = {isOpenModal}
                        onRequestClose = {closeModal}
                        style = {styles}
                
                >
                        <div style = {{textAlign:'center'}}>
                        <i class="fa fa-check" 
                                aria-hidden="true" 
                                style = {{fontSize:"150px", 
                                color:'green'
                                }}></i>
                        <p style = {{fontSize:"30px",color:'#232a'}}>The payment has been made successfully!</p>
                        </div>
                </Modal>
        </div>
        </>
            
    )
    
}